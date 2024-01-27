from rest_framework import serializers
from playerauth.models import PlayerData
from django.contrib.auth.models import User

class PlayerDataSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model = PlayerData
        fields = ['id', 'firstName', 'lastName', 'owner']
    
class UserSerializer(serializers.ModelSerializer):
    playerdata = serializers.PrimaryKeyRelatedField(many=True, queryset = PlayerData.objects.all())
    class Meta:
        model = User
        fields = ['id', 'username', 'playerdata']


class UserRegistrationSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=100)
    Email = serializers.EmailField()
    Password = serializers.CharField(write_only=True)
    Confirm_Password = serializers.CharField(write_only=True)