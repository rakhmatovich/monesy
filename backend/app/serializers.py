from rest_framework import serializers
from .models import Cash,Card,Category,Transaction,Limit


class CashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cash
        fields = ('id', 'amount')

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('card_number','expiration_date','cv')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name','type')

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class LimitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Limit
        fields = '__all__'