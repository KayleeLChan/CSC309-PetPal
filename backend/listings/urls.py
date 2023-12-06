from django.urls import path
from . import views

app_name='listings'
urlpatterns = [ 
    path('', views.PetListingsListCreate.as_view()),
    path('<int:pk>/', views.PetListingsRetrieveUpdateDestroy.as_view()),
    path('image/', views.PetListingsImageCreate.as_view()),
    path('image/<int:pk>/', views.PetListingsImageRetrieveUpdateDestroy.as_view()),
]
