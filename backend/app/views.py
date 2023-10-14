from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Card,Category,Transaction,Limit,Cash
from django.http import Http404
from .serializers import CardSerializer,CategorySerializer,TransactionSerializer,LimitSerializer,CashSerializer
from datetime import datetime
from django.db.models import Avg, Max, Min,Sum
from blog.models import Token,User
from rest_framework import generics
from rest_framework import permissions
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated


class CardListCreateView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Card.objects.all()
    serializer_class = CardSerializer

class CardDetail(APIView):
    permission_classes  = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            return Card.objects.get(pk=pk)
        except Card.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        card = self.get_object(pk)
        serializer = CardSerializer(card)
        return Response(serializer.data)

    def put(self, request, pk):
        card = self.get_object(pk)
        serializer = CardSerializer(card, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        card = self.get_object(pk)
        card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CategoryList(APIView):
    permission_classes  = (IsAuthenticated,)
    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryDetail(APIView):
    permission_classes  = (IsAuthenticated,)
    def get_object(self, pk):
        try:
            return Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        category = self.get_object(pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)

    def put(self, request, pk):
        category = self.get_object(pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        category = self.get_object(pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class UserSpending(APIView):
    permission_classes  = (IsAuthenticated,)
    def get(self, request):
        transactions = Transaction.objects.all()

        total_user_spending = sum([float(transaction.amount) for transaction in transactions])

        category_data = {}
        categories = Category.objects.all()
        for category in categories:
            category_transactions = transactions.filter(category=category)
            total_spending_in_category = sum([float(transaction.amount) for transaction in category_transactions])
            category_data[category.name] = total_spending_in_category

        data = {
            'total_user_spending': total_user_spending,
            'category_spending': category_data
        }

        return Response(data)
    

class SpendingLimit(APIView):
    permission_classes  = (IsAuthenticated,)
    def get(self, request, user_id):
        user = User.objects.get(id=user_id)
        current_month = datetime.now().month
        current_year = datetime.now().year
        user_limits = Limit.objects.filter(user=user, category__isnull=False, category__type="expense")
        exceeded_limits = []

        for limit in user_limits:
            category = limit.category
            total_spending = Transaction.objects.filter(
                card__user=user,
                category=category,
                date__month=current_month,
                date__year=current_year
            ).annotate(total_spending=Sum('amount'))['total_spending'] or 0

            if total_spending > limit.amount:
                exceeded_limits.append({
                    "category": category.name,
                    "limit": limit.amount,
                    "total_spending": total_spending,
                    "warning": f"You have exceeded the spending limit for {category.name}."
                })

        return Response({"exceeded_limits": exceeded_limits})
    

class CashListCreateView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cash.objects.all()
    serializer_class = CashSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Cash.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CashDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Cash.objects.all()
    serializer_class = CashSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Cash.objects.filter(user=self.request.user)
    




