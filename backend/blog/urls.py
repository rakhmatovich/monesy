from django.urls import path
from .views import UserRegistrationView,LoginListCreateView

urlpatterns = [
    path('register/',UserRegistrationView.as_view(), name='user_registration'),
    path('login/',LoginListCreateView.as_view(),name='login-list-create')
]