from django.db import models
from blog.models import User

# Create your models here.

TYPES=(
    ('расход','расход'),
    ('доход','доход')
)

class Cash(models.Model):
    summ = models.CharField(max_length=200)

    def __str__(self):
        return self.summ



class Card(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card_number = models.CharField(max_length=16)
    expiration_date = models.CharField(max_length=5)
    cvv = models.CharField(max_length=3)

    def __str__(self):
        return self.user
    

class Category(models.Model):
    name = models.CharField(max_length=200)
    type = models.CharField(max_length=200,choices=TYPES)


    def __str__(self):
        return self.name


class Transaction(models.Model):
    amount = models.CharField(max_length=200)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    card = models.ForeignKey(Card,on_delete=models.CASCADE)

    def __str__(self):
        return self.amount




class Limit(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    amount = models.IntegerField()

    def __str__(self) -> str:
        return self.amount
