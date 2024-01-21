from django.urls import path, include
from playerauth import views
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('api/data-list', views.DataList.as_view(), name='data-list'),
    path('api/data-list/<int:pk>', views.DataDetail.as_view(), name='data-detail'),
    path('api/users', views.UserList.as_view(), name='user-list'),
    path('api/user/<int:pk>', views.UserDetail.as_view(), name='user-detail'),
]

