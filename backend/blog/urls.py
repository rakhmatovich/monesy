from django.urls import path
from .views import UserRegistrationView,LoginAPIView

urlpatterns = [
    path('register/',UserRegistrationView.as_view(), name='user_registration'),
    path('login/',LoginAPIView.as_view(),name='login')
]