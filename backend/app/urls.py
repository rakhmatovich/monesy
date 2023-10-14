from django.urls import path
from .views import CashView,AddCardBalanceView,CategoryView

urlpatterns = [
    path('cash/', CashView.as_view(), name="cash-view"),
    path('add_card_balance/',AddCardBalanceView.as_view(),name='add-card-balance-view'),
    path('category/',CategoryView.as_view(),name='category')

]
