from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cash,Card,UserBalance,Category
from .serializers import CashSerializer,CardSerializer,CategorySerializer
from rest_framework.permissions import IsAuthenticated


class CashView(APIView):
    # permission_classes = (IsAuthenticated,)
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

class AddCardBalanceView(APIView):
    def post(self,request):
        user = request.user
        card_id = request.data.get('card-id')
        amount = request.data.get('amount')

        if not card_id or not amount:
            return Response({"error":'Card ID and amount are required.'},status=status.HTTP_400_BAD_REQUEST)

        try:
            card = Card.objects.filter(id=card_id,user=user)
        except Card.DoesNotExist:
            return Response({'error':'Card not found'},status=status.HTTP_404_NOT_FOUND)

        try:
            user_balance = UserBalance.objects.filter(user=user)
        except UserBalance.DoesNotExist:
            user_balance = UserBalance(user=user)

        user_balance.balance += amount
        user_balance.save()

        return  Response({
            'message':'Balance added successfuly',
            'card':CardSerializer(card).data,
            'user_balance':user_balance.balance,
        })

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



