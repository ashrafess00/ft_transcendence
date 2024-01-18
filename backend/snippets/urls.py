from django.urls import path
from snippets import views
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('snippets/', views.SnippetList.as_view(), name='snippets'),
    path('snippets/<int:pk>/', views.SnippetDetail.as_view(), name='snippet-detail'),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>', views.UserDetail.as_view()),
    path('api/restricted/', views.RestictedView.as_view(), name="restricted")
]

urlpatterns = format_suffix_patterns(urlpatterns)