from django.urls import path
from .views import 

app_name='applications'

urlpatterns = [
    path('<int:pk>/new/', CreateApplicationView.as_view(), name='application-create'),
    path('updated/<int:pk>/', UpdateApplicationView.as_view(), name='application-update'),
    path('list/<int:pk>/', ListApplicationView.as_view(), name='application-list'),
    path('details/<int:pk>/', GetApplicationView.as_view(), name='application-get')
]
