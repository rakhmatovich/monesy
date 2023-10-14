from rest_framework import serializers
from .models import Card,Category,Transaction,Cash

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('user','card_number','expiration_date','cvv')


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('name','type')


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('amount','category','card')


class LimitSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('user','category','amount')

class CashSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('summ')
