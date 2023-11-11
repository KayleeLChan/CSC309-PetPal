from django.urls import path
from . import views

app_name='accounts'
urlpatterns = [ 
    path('hello/', views.HelloWorldView.as_view()),
    path('registration/seeker/', views.PetSeekerRegisterView.as_view()),
    # path('registration/shelter/', views.PetShelterRegisterView.as_view()),
    # path('shelter/<int:pk>/profile', views.PetShelterListUpdate.as_view()),
    # path('seeker/<int:pk>/profile', views.PetSeekerListUpdate.as_view()),
    # path('shelter/<int:pk>/details', views.ShelterDetailsView.as_view())
]
