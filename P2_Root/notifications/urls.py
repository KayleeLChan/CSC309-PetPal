from django.urls import path
from . import views

app_name='notifications'
urlpatterns = [ 
    path('', views.UserNotificationsList.as_view()),
    path('removal/<int:pk>/', views.NotificationDeleteView.as_view()),
    path('<int:pk>/', views.NotificationRetrieve.as_view()),
]
