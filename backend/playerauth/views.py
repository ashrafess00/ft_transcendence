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
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    
class DataDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PlayerData.objects.all()
    serializer_class = PlayerDataSerializer
    permission_classes = [permissions.IsAuthenticated]


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

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
            email = serializer.validated_data['Email']
            password = serializer.validated_data['Password']
            confirm_password = serializer.validated_data['Confirm_Password']

            if password != confirm_password:
                return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)
            elif User.objects.filter(email=email).exists() or User.objects.filter(username=username).exists():
                return Response({"error": "Email or Username already exists"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user = authenticate(username=username, password=password)
                login(request, user)

                return Response({"status": "Successfully Registered"}, status=status.HTTP_201_CREATED)

        return Response({"error": "test"}, status=status.HTTP_400_BAD_REQUEST)
