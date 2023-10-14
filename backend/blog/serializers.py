from rest_framework import serializers
from .models import User,Login


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id','username','password','email')

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()