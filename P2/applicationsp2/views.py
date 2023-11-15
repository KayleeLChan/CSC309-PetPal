from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, RetrieveAPIView
from django.shortcuts import get_object_or_404
from .models import Application
from .serializers import ApplicationSerializer, CreateApplicationSerializer
from rest_framework.response import Response
from listings.models import Listing
from accounts.models import Account
from django.urls import reverse


# Create your views here.
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

        # # default initial status of application
        # new_application.application_status = 'pending'

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
                        link=reverse('application-get', kwargs={'pk': application.id})
                        )

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
                        recipient=application.pet_listing.shelter.user,
                        notifier=request.user, 
                        content=f"Status update", 
                        title="application", 
                        link=reverse('application-get', kwargs={'pk': application.id})
                        )

                    application.save()
                    return Response({'message': 'Application status updated successfully.'}, status=200)
                else:
                    return Response({'error': 'Invalid status update for pet seeker.'}, status=400)

        # else return error
        return Response({'error': 'Unauthorized to update this application.'}, status=401)


class ListApplicationView(ListAPIView):
    """ Shelters can only view their own applications, not that of other shelters.
    - Filter applications by status (2 marks)
    - Sort applications by creation time and last update time (4 marks)
    - When an application receives a new comment, its "last update time" should be changed.
    - Pagination support (1 mark) 
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def get_queryset(self):
        # to ensure shelter is only viewings their own applications
        if self.request.user.is_authenticated:
            # retrieve all listings associated to that shelter
            instance = get_object_or_404(Account, id=self.kwargs["pk"])
            listings_queryset = Listing.objects.filter(shelter=instance)
            # create queryset for those listings
            application_querysets = [Application.objects.filter(pet_listing=listing) for listing in listings_queryset]

            # Combine the QuerySets using the | operator (or union method)
            all_applications = Application.objects.none()  # Create an empty queryset as the initial value
            for queryset in application_querysets:
                all_applications |= queryset

            # filter applications by status
            status = self.request.query_params.get('application_status')
            if status:
                queryset = all_applications.filter(application_status=status)
            else:
                queryset = all_applications
            
            # when an application receives a new comment ...
            for application in application_querysets:
                # update last update time when a new comment is added
                comments_added = application.Comments_set.all().order_by(creation_time)
                # update last update time of application (creation time of comment)
                new_comment_creation_time = comments_added.last().creation_time
                application.last_updated_at = new_comment_creation_time
                application.save()

            # sort application by creation time and last update time
            return queryset.order_by('-created_at', '-last_updated_at')

        # Return an empty queryset if the user is not authenticated
        return Response({'error': 'Unauthorized to view these applications.'}, status=401)


class GetApplicationView(RetrieveAPIView):
    """ Get Application (2 marks).
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def retrieve(self, request, *args, **kwargs):
        application = self.get_object()
        serializer = self.get_serializer(application)
        return Response(serializer.data)



