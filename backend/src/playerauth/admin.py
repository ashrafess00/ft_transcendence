from django.contrib import admin
from playerauth.models import PlayerData
from .models import UserAdmin, User, PlayerData, PlayDataAdmin

# Register your models here.
# admin.site.register(PlayerData)
admin.site.register(User, UserAdmin)
admin.site.register(PlayerData, PlayDataAdmin)