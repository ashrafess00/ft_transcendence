from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from playerauth.models import PlayerData
from playerauth.serializers import PlayerDataSerializer, UserSerializer
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework import permissions, renderers
from rest_framework.reverse import reverse

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