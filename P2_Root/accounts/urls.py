from django.urls import path
from . import views

app_name='accounts'
urlpatterns = [ 
    # path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('hello/', views.HelloWorldView.as_view()),
    path('registration/seeker/', views.PetSeekerRegisterView.as_view()),
    path('registration/shelter/', views.PetShelterRegisterView.as_view()),
    path('<int:pk>/profile', views.ProfileUpdateView.as_view()),
    path('shelter/<int:pk>/details', views.ShelterDetailsView.as_view()),
    path('<int:pk>/delete', views.AccountDeleteView.as_view()),
]
