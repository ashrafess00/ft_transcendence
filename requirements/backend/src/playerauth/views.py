from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from playerauth.models import PlayerData
from playerauth.serializers import PlayerDataSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions, renderers,viewsets
from rest_framework.reverse import reverse
from .serializers import UserRegistrationSerializer
from django.contrib.auth import authenticate, login
from rest_framework import status
# from .models import User


class DataList(generics.ListCreateAPIView):
    queryset = PlayerData.objects.all()
    serializer_class = PlayerDataSerializer



    
class DataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlayerData.objects.all()
    serializer_class = PlayerDataSerializer



class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    print("---[", queryset, "]---")
    # serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CurrentUserView(APIView):
    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)

class UserRegistrationViewSet(viewsets.ViewSet):
    def create(self, request):
        serializer = UserRegistrationSerializer(data=request.data)

        if serializer.is_valid():
            username = serializer.validated_data['username']
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            confirm_password = serializer.validated_data['confirm_password']
            

            if password != confirm_password:
                print("Passwords do not match")
                return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)
            elif User.objects.filter(email=email).exists() or User.objects.filter(username=username).exists():
                print("Email or Username already exists")
                return Response({"error": "Email or Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user = authenticate(username=username, password=password)
                login(request, user)
                response_data = {
                    "status": "Successfully Registered",
                    "user_id": user.id,
                    "username": user.username,
                    "email": user.email,
                    "avatar": user.avatar.url if user.avatar else None,
                }
                print(response_data)
                return Response({"status": "Successfully Registered"}, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response({"error": "test"}, status=status.HTTP_400_BAD_REQUEST)
        