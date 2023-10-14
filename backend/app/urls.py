from django.urls import path
from .views import CardListCreateView, CardDetail,CategoryDetail,CategoryList,UserSpending,SpendingLimit,CashListCreateView, CashDetailView 

urlpatterns = [
    path('cards/', CardListCreateView.as_view(),name='card'),
    path('cards/<int:pk>/', CardDetail.as_view(), name='card-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('user-spending/', UserSpending.as_view(), name='user-spending'),
    path('spending-Limit/',SpendingLimit.as_view(),name='spending-Limit'),
    path('deposits/', CashListCreateView.as_view(), name='deposit-list-create'),
    path('deposits/<int:pk>/', CashDetailView.as_view(), name='deposit-detail'),
]
