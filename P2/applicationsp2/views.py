from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import CreateAPIView, UpdateAPIView, ListAPIView, RetrieveAPIView
from django.shortcuts import get_object_or_404
from .models import Application
from .serializers import ApplicationSerializer
from rest_framework.response import Response
from .models import Listing

# Create your views here.
class CreateApplicationView(CreateAPIView):
    """ Pet Seekers can only create applications for a pet listing that is "available"
    Pet Shelters cannot create applications.
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def perform_create(self, serializer):
        pet_listing_id = self.kwargs.get('pk')
        pet_listing = get_object_or_404(Listing, id=pet_listing_id, status='available')

        new_application = serializer.save()
        
        # Set fields based on the current user
        new_application.pet_seeker = self.request.user
        new_application.first_name = self.request.user.first_name
        new_application.last_name = self.request.user.last_name
        new_application.email = self.request.user.email
        new_application.phone_number = self.request.user.phonenumber

        # Set fields based on the pet_listing 
        new_application.pet_listing = pet_listing
        new_application.breed = pet_listing.breed
        new_application.age = pet_listing.age
        new_application.sex = pet_listing.sex
        new_application.size = pet_listing.size
        new_application.belongs_to_shelter = pet_listing.shelter
        new_application.status = pet_listing.status
        
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
        application = self.get_object_or_404()
        user = self.request.user

        # check if user is shelter associated with application
        if user == application.shelter.user:
            # shelter application status can only be updated if pending
            if application.status == 'pending':
                # shelter can only update status to accepted or denied
                if 'status' in request.data and request.data['status'] in ['accepted', 'denied']:
                    application.status = request.data['status']
                    application.save()
                    return Response({'message': 'Application status updated successfully.'}, status=200)
                else:
                    return Response({'error': 'Invalid status update for shelter.'}, status=400)
        
        # check if user is pet seeker associated with application
        if user == application.pet_seeker.user:
            # pet seeker application status can only be updated if pending or accepted
            if application.status == 'pending' or 'accepted':
            # pet seeker can only update status to withdrawn
                if 'status' in request.data and request.data['status'] == 'withdrawn':
                    application.status = request.data['status']
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
        user_shelter = self.request.user.shelter

        # filter applications by status
        status = self.request.query_params.get('status')
        if status:
            queryset = Application.objects.filter(shelter=user_shelter, status=status)
        else:
            queryset = Application.objects.filter(shelter=user_shelter)
        
        for application in queryset:
            # update last update time when a new comment is added
            comments_added = application.Comments_set.all().order_by(creation_time)
            # update last update time of application (creation time of comment)
            new_comment_creation_time = comments_added.last().creation_time
            application.last_updated_at = new_comment_creation_time
            application.save()

        # sort application by creation time and last update time
        return queryset.order_by('-created_at', '-last_updated_at')


class GetApplicationView(RetrieveAPIView):
    """ Get Application (2 marks).
    """
    queryset = Application.objects.all()
    serializer_class = ApplicationSerializer

    def retrieve(self, request, *args, **kwargs):
        application = self.get_object_or_404()
        serializer = self.get_serializer(application)
        return Response(serializer.data)



