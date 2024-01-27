from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class PlayerData(models.Model):
    firstName = models.CharField(max_length=50, blank=True)
    lastName = models.CharField(max_length=50, blank=True)
    owner = models.ForeignKey('auth.User', related_name='playerdata', on_delete=models.CASCADE)
    def __str__(self):
        return self.firstName
    
class User(models.Model):
    username = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=50)
