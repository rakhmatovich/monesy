from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer
from .models import User,Token,Login
from django.contrib.auth import authenticate, login
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics
from .models import Login
from .serializers import LoginSerializer

class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class LoginListCreateView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Login.objects.all()
    serializer_class = LoginSerializer

