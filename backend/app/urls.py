from django.urls import path
from .views import CashView,CategoryView,IncomeExpence,AddCartToCashView,LimitView

urlpatterns = [
    path('cash/', CashView.as_view(), name="cash-view"),
    path('category/',CategoryView.as_view(),name='category'),
    path('add_card_to_cash/',AddCartToCashView.as_view(),name='add-card-to-cash-view'),
    path('spending/',LimitView.as_view(),name="limit"),
    path('transaction/',IncomeExpence.as_view(),name='incomeexpence')

]
