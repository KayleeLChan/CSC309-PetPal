from django.shortcuts import render
from rest_framework import generics
from .models import Application
from .serializers import ApplicationSerializer

# Create your views here.

class CreateApplicationView(CreateAPIView):
    """ Can only create applications for a pet listing that is "available"
    
    URL: path('applications/create/', CreateApplicationView.as_view(), name='application-create')
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    
    def create(self, request, *args, **kwargs):
        # check if pet listing is "available"

class UpdateApplicationView(UpdateAPIView):
    """ Details of an application cannot be updated once submitted/created, 
    except for its status (see below).
    Shelter can only update the status of an application from pending to accepted or denied.
    Pet seeker can only update the status of an application from pending or accepted to withdrawn.

    URL: path('applications/update/<int:pk>/', UpdateApplicationView.as_view(), name='application-update') 
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer 

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        user = self.request.user

        # check if application status 

        # check if user is shelter associated with application

        # check if user is pet seeker associated with application

        # else return error

class ListApplicationView(ListAPIView):
    """ Shelters can only view their own applications, not that of other shelters.
    - Filter applications by status (2 marks)
    - Sort application by creation time and last update time (4 marks)
    - When an application receives a new comment, its "last update time" should be changed.
    - Pagination support (1 mark) 

    URL: path('applications/list/', ListApplicationView.as_view(), name='application-list')
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

class GetApplicationView(RetrieveAPIView):
    """
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    pass


