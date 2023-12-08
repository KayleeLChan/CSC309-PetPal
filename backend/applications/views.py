from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, RetrieveAPIView
from django.shortcuts import get_object_or_404
from .models import Application
from .serializers import ApplicationSerializer, CreateApplicationSerializer
from rest_framework.response import Response
from listings.models import Listing
from accounts.models import Account
from notifications.models import Notification
from django.urls import reverse
from django.core.exceptions import PermissionDenied
from rest_framework.pagination import PageNumberPagination
from django_filters.rest_framework import DjangoFilterBackend
import django_filters
from django.db.models.functions import Lower
from django.db.models import F
from django.db import connection
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


# Create your views here.
class GetApplicationView(RetrieveAPIView):
    """ Get Application (2 marks).
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def retrieve(self, request, *args, **kwargs):
        application = self.get_object()
        serializer = self.get_serializer(application)
        return Response(serializer.data)
    

class CreateApplicationView(CreateAPIView):
    """ Pet Seekers can only create applications for a pet listing that is "available"
    Pet Shelters cannot create applications.
    """
    queryset = Application.objects.all()
    serializer_class = CreateApplicationSerializer

    def perform_create(self, serializer):
        # verify that a Pet Seeker (not a Shelter) is trying to create an application 

        if self.request.user.accounttype == 'petshelter':
            raise PermissionDenied('You do not have permission to create an application')

        pet_listing_id = self.kwargs['pk']
        pet_listing = get_object_or_404(Listing, id=pet_listing_id, status='available')

        new_application = serializer.save(pet_listing=pet_listing, pet_seeker_user=self.request.user)
        
        # Set fields based on pet seeker (User)
        new_application.pet_seeker_user = self.request.user
        new_application.applicant_first_name = self.request.user.first_name
        new_application.applicant_last_name = self.request.user.last_name
        new_application.applicant_email = self.request.user.email
        new_application.applicant_phone_number = self.request.user.phonenumber

        # Set fields based on the pet_listing (pk)
        new_application.pet_listing = pet_listing

        Notification.objects.create(
            recipient=new_application.pet_listing.shelter,
            notifier=self.request.user, 
            content=f"New Application", 
            title="application", 
            link=reverse('applications:application-get', kwargs={'pk': new_application.id}))

        # Call the super method to perform the actual creation
        return super().perform_create(new_application)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        application = self.perform_create(serializer)

        return Response(serializer.data, status=201)


class UpdateApplicationView(UpdateAPIView):
    """ Details of an application cannot be updated once submitted/created, 
    except for its status (see below).
    Shelter can only update the status of an application from pending to accepted or denied.
    Pet seeker can only update the status of an application from pending or accepted to withdrawn.
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer 

    def update(self, request, *args, **kwargs):
        application_id = self.kwargs['pk']
        application = get_object_or_404(Application, id=application_id)
        user = self.request.user

        # check if user is shelter associated with application
        if self.request.user.accounttype in ['petshelter', 'Pet Shelter']:
            # shelter can only update application status if pending
            if application.application_status == 'pending':
                # shelter can only update status to accepted or denied
                if 'application_status' in self.request.data and self.request.data['application_status'] in ['accepted', 'denied']:
                    application.application_status = self.request.data['application_status']

                    # create notification for status change
                    Notification.objects.create(
                        recipient=application.pet_seeker_user,
                        notifier=request.user, 
                        content=f"Status update", 
                        title="application", 
                        link=reverse('applications:application-get', kwargs={'pk': application.id}))

                    application.save()
                    return Response({'message': 'Application status updated successfully.'}, status=200)
                else:
                    return Response({'error': 'Invalid status update for shelter.'}, status=400)
        
        # check if user is pet seeker associated with application
        elif self.request.user.accounttype in ['petseeker', 'Pet Seeker']:
            # pet seeker application status can only be updated if pending or accepted
            if application.application_status == 'pending' or 'accepted':
            # pet seeker can only update status to withdrawn
                if 'application_status' in self.request.data and self.request.data['application_status'] == 'withdrawn':
                    application.application_status = self.request.data['application_status']

                    # create notification for status change
                    Notification.objects.create(
                        recipient=application.pet_listing.shelter,
                        notifier=request.user, 
                        content=f"Status update", 
                        title="application", 
                        link=reverse('applications:application-get', kwargs={'pk': application.id}))

                    application.save()
                    return Response({'message': 'Application status updated successfully.'}, status=200)
                else:
                    return Response({'error': 'Invalid status update for pet seeker.'}, status=400)

        # else return error
        return Response({'error': 'Unauthorized to update this application.'}, status=401)

class StandardResultsSetPagination(PageNumberPagination):
    page_size = 15
    page_size_query_param = 'page_size'
    max_page_size = 15

class SearchSortFilterApplication(django_filters.FilterSet):
    FILTER_STATUS_CHOICES = Application.STATUS_CHOICES + [("all", "all")]

    # Search params
    pet_listing_name = django_filters.CharFilter(field_name='pet_listing__name', lookup_expr='icontains')
    pet_listing_location = django_filters.CharFilter(field_name='pet_listing__location', lookup_expr='icontains')
    pet_listing_animal = django_filters.CharFilter(field_name='pet_listing__animal', lookup_expr='icontains')
    pet_listing_breed = django_filters.CharFilter(field_name='pet_listing__breed', lookup_expr='icontains')

    # Filters
    status = django_filters.ChoiceFilter(choices=FILTER_STATUS_CHOICES, initial='pending', method='filter_status')

    # Sorts
    sort_by = django_filters.OrderingFilter(
        fields=(
            ('pet_listing_name', 'pet_listing_name'),
            ('created_at', 'created_at'),
        ),
        field_labels={
            'pet_listing_name': 'Name',
            'created_at': 'Newest',
        }
    )
    
    class Meta:
        model = Application
        fields = ['pet_listing_name', 'pet_listing_location', 'application_status']

    def __init__(self, data=None, *args, **kwargs):
        if data is not None:
            data = data.copy()    # get a mutable copy of the QueryDict
            for name, f in self.base_filters.items():
                initial = f.extra.get('initial')
                
                # filter param is either missing or empty, use initial as default
                if not data.get(name) and initial:
                    data[name] = initial

        super().__init__(data, *args, **kwargs)


    def filter_status(self, queryset, name, value):
        if value == "all":
            return queryset
        elif value in [choice[0] for choice in Application.STATUS_CHOICES]:
            return queryset.filter(application_status=value)
        else:
            return queryset.filter(application_status="pending")


class ListApplicationView(ListAPIView):
    """ Shelters can only view their own applications, not that of other shelters.
    - Filter applications by status (2 marks)
    - Sort applications by creation time and last update time (4 marks)
    - When an application receives a new comment, its "last update time" should be changed.
    - Pagination support (1 mark) 
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    filterset_class = SearchSortFilterApplication
    sort_by_fields = ['pet_listing__name', 'created_at']
    search_fields = ['pet_listing_name', 'pet_listing_location', 'pet_listing_animal', 'pet_listing_breed']  
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        user = self.request.user
        # to ensure shelter is only viewings their own applications
        if user.is_authenticated:
            if user.accounttype == "petseeker":
                applications = Application.objects.filter(pet_seeker_user=user)
                return applications.order_by('-created_at', '-last_updated_at')
            
            print(f"Received application_status: {self.request.query_params.get('application_status')}")
            # else, if pet is seeker,
            applications = Application.objects.filter(pet_listing__shelter=user)
            applications = self.filter_queryset(applications)
            return self.paginate_queryset(applications)
        
        # Return an empty queryset if the user is not authenticated
        return Response({'error': 'Unauthorized to view these applications.'}, status=401)

