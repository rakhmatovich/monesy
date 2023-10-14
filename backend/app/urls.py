from django.urls import path
from .views import CashView

urlpatterns = [
    path('cash/', CashView.as_view(), name="cash-view")

]
