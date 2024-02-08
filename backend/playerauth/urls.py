from django.urls import path, include
from playerauth import views
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

urlpatterns = [
    path('data-list/', views.DataList.as_view(), name='data-list'),
    path('data-list/<int:pk>/', views.DataDetail.as_view(), name='data-detail'),

    path('users/', views.UserList.as_view(), name='user-list'),
    path('user/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),

    path('current-user/', views.CurrentUser.as_view(), name='current-user'),
    
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='toekn-verify'),
    
]

