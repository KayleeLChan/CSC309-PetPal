# urls.py

from django.urls import path

from . import views


app_name = 'accounts'

urlpatterns = [
    path('registration/seeker/', views.PetSeekerRegisterView.as_view(), name='registration-seeker'),
    path('registration/shelter/', views.PetShelterRegisterView.as_view(), name='registration-shelter'),
    path('', views.LoginView.as_view(), name='login'),
    path('<int:pk>/profile/', views.ProfileUpdateView.as_view()),
    path('shelter/<int:pk>/details/', views.ShelterDetailsView.as_view()),
    path('<int:pk>/deletion/', views.AccountDeleteView.as_view()),
    path('shelter/', views.ShelterListView.as_view()),
]