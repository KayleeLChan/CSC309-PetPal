from django.urls import path
from .views import 

app_name='applications'

urlpatterns = [
    path('create/', CreateApplicationView.as_view(), name='application-create'),
    path('update/<int:pk>/', UpdateApplicationView.as_view(), name='application-update'),
    path('list/', ListApplicationView.as_view(), name='application-list'),
    path('get/<int:pk>/', GetApplicationView.as_view(), name='application-get')
]
