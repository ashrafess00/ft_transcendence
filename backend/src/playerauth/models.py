from django.db import models
from django.contrib import admin
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User

# Create your models here.
class PlayerData(models.Model):
    firstName = models.CharField(max_length=50, blank=True)
    lastName = models.CharField(max_length=50, blank=True)
    # testField = models.CharField(max_length=50, blank=True)
    owner = models.ForeignKey('auth.User', related_name='playerdata', on_delete=models.CASCADE, default=None)
    def __str__(self):
        return self.firstName
    
class PlayDataAdmin(admin.ModelAdmin):
    list_display = [ "owner", 'firstName', "lastName" ]
    

class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)

class UserAdmin(admin.ModelAdmin):
    list_display = [ "username", 'email', "password" ]
    
