from django.urls import path
from .views import CardAPIView, CardDetail,CategoryDetail,CategoryList,UserSpending,SpendingLimit

urlpatterns = [
    path('cards/', CardAPIView.as_view(),name='card'),
    path('cards/<int:pk>/', CardDetail.as_view(), name='card-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('user-spending/', UserSpending.as_view(), name='user-spending'),
    path('spending-Limit/',SpendingLimit.as_view(),name='spending-Limit')
]
