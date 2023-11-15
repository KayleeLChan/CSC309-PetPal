from django.urls import path
from .views import CreateApplicationView, UpdateApplicationView, ListApplicationView, GetApplicationView

app_name='applicationsp2'

urlpatterns = [
    path('new/<int:pk>/', CreateApplicationView.as_view(), name='application-create'),
    path('editor/<int:pk>/', UpdateApplicationView.as_view(), name='application-update'),
    path('list/<int:pk>/', ListApplicationView.as_view(), name='application-list'),
    path('details/<int:pk>/', GetApplicationView.as_view(), name='application-get')
]