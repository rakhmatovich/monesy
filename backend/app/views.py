from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cash,Card,Category,Transaction,Limit
from .serializers import CashSerializer,CardSerializer,CategorySerializer,TransactionSerializer
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum


class CashView(APIView):
    def get(self, request):
        user = request.user
        cash = Cash.objects.filter(user=user)
        print(cash)
        serializer = CashSerializer(cash, many=True)
        return Response(serializer.data)

    def post(self, request):
        user = request.user
        amount = request.data.get('amount')
        if not amount:
            return Response({'error': 'Amount is required.'}, status=status.HTTP_400_BAD_REQUEST)
        cash, _ = Cash.objects.get_or_create(user=user)
        cash.amount = amount
        cash.save()

        serializer = CashSerializer(cash)
        return Response(serializer.data)



class CategoryView(APIView):
    def get(self,request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories,many=True)
        return Response(serializer.data)

    def post(self,request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.data,status=status.HTTP_400_BAD_REQUEST)



class IncomeExpence(APIView):
    def get(self,request,*args,**kwargs):
        user = request.user
        transactions = Transaction.objects.filter(user=user)
        income = 0
        expenses = {}

        for transaction in transactions:
            if transaction.cash.type == 'income':
                income += transaction.cash.amount
            else:
                category = transaction.category.name
                if category in expenses:
                    expenses[category]+=transaction.cash.amount
                else:
                    expenses[category] = transaction.cash.amount

        result = {
            'income':income,
            'expenses':expenses
        }

        return Response(result)



class AddCartToCashView(APIView):
    def post(self,request):
        data = request.data
        card_number = data.get('card_number')

        if not card_number:
            return Response({'error':'Card number is required.'},status=status.HTTP_400_BAD_REQUEST)

        try:
            card = Card.objects.get(card_number=card_number,user=request.user)
        except Card.DoesNotExist:
            return Response({'erorr':'Card Not found'},status=status.HTTP_404_NOT_FOUND)

        if card.cash.amount > 0:
            cash = Cash.objects.get(user=request.user)
            cash.amount += card.cash.amount
            cash.save()

            card.cash.amount = 0
            card.cash.save()

            return Response({'message':'Card balance added to cash successfully.'})
        else:
            return Response({'message':'Card balance is zero or negative.'},status=status.HTTP_400_BAD_REQUEST)


class LimitView(APIView):
    def post(self,request):
        data = request.data
        category_id = data.get('category_id')
        amount = data.get('amount')

        if not category_id or not amount:
            return Response({'error':'Category_id and amount are required'},status=status.HTTP_400_BAD_REQUEST)

        try:
            category = Category.objects.filter(id=category_id)
        except Category.DoesNotExist:
            return Response({'error':'Category not found'},status=status.HTTP_404_NOT_FOUND)

        try:
            limit = Limit.objects.filter(user=request.user,category=category)
        except Limit.DoesNotExist:
            limit = None

        if limit and amount > limit.amount:
            return Response({'warning': 'You have exceeded the spending limit for this category.'},
                            status=status.HTTP_200_OK)

        return Response({'message': 'Spending processed successfully.'})



