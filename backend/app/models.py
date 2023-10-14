from django.db import models
from users.models import User

from .queryset.cash import CashManager


TYPES = (
    ('расход', 'расход'),
    ('доход', 'доход')
)


class Cash(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.CharField(max_length=200)

    objects = CashManager()

    def __str__(self):
        return self.amount


class Card(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card_number = models.CharField(max_length=20)
    expiration_date = models.CharField(max_length=30)
    cv = models.CharField(max_length=10)

    def __str__(self):
        return self.card_number


class Category(models.Model):
    name = models.CharField(max_length=100)
    type = models.CharField(max_length=100, choices=TYPES)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    amount = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)

    def __str__(self):
        return self.amount


class Limit(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self):
        return self.amount
