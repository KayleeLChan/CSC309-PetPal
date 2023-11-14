# urls.py

from django.urls import path

from .views import PetSeekerSignUpView, PetSeekerLoginView, SeekerRetrieveUpdateDestroyView


app_name = 'accounts'

urlpatterns = [
    path('signup/', PetSeekerSignUpView.as_view(), name='signup'),
    path('login/', PetSeekerLoginView.as_view(), name='login'),
    path('<int:pk>/', SeekerRetrieveUpdateDestroyView.as_view(), name='seeker_detail'),
]