from django.contrib import admin
from .models import Cash,Card,Category,UserBalance

# Register your models here.
admin.site.register(Cash)
admin.site.register(Card)
admin.site.register(Category)
admin.site.register(UserBalance)

