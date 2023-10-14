from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cash
from .serializers import CashSerializer
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
