from django.contrib import admin
from .models import Card,Category,Transaction,Limit
# Register your models here.

admin.site.register(Card)
admin.site.register(Category)
admin.site.register(Transaction)
admin.site.register(Limit)


