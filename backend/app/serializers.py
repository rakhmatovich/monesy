from rest_framework import serializers
from .models import Cash,Card


class CashSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cash
        fields = ('id', 'amount')

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('card_number','expiration_date','cv')
