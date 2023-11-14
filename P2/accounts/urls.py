# urls.py

from django.urls import path

from . import views


app_name = 'accounts'

urlpatterns = [
    path('registration/seeker/', views.PetSeekerSignUpView.as_view(), name='registration-seeker'),
    path('registration/shelter/', views.PetShelterSignUpView.as_view(), name='registration-shelter'),
    path('login/', views.PetSeekerLoginView.as_view(), name='login'),
    path('<int:pk>/', views.SeekerRetrieveUpdateDestroyView.as_view(), name='seeker_detail'),
]