from rest_framework import serializers
from .models import Card,Category,Transaction,Cash

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('id','user','card_number','expiration_date','cvv')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id','name','type')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('id','amount','category','card')


class LimitSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','user','category','amount')

class CashSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id','summ')
