from rest_framework import serializers
from playerauth.models import PlayerData
from django.contrib.auth.models import User

class PlayerDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerData
        fields = ['id', 'firstName', 'lastName']
    
class UserSerializer(serializers.ModelSerializer):
        model = User
        fields = ['id', 'username', 'email']


class UserRegistrationSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    confirm_password = serializers.CharField()
