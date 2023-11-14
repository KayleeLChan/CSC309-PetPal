from django.shortcuts import render

# Create your views here.
# views.py

from rest_framework import views
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import PetSeeker, Account, PetShelter
from .serializers import PetSeekerRetrieveSerializer, PetSeekerSignUpSerializer,PetSeekerUpdateSerializer,PetSeekerSerializer, PetShelterSignUpSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied


class PetSeekerSignUpView(CreateAPIView):
    serializer_class = PetSeekerSignUpSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        new_user = serializer.save()
        new_user.is_active = True
        new_user.save()

class PetShelterSignUpView(CreateAPIView):
    serializer_class = PetShelterSignUpSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        serializer.save()

class PetSeekerLoginView(views.APIView):

    serializer_class = PetSeekerSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = serializer.validated_data.get('username')
        password = serializer.validated_data.get('password')
        user = Account.objects.filter(username=username).first()
        
        if user is None or not (user.password == password):
            return Response({'message': 'Invalid credentials'})
        
        refresh = RefreshToken.for_user(user)
        response_data = {
            'refresh_token': str(refresh),
            'access_token': str(refresh.access_token),
        }
        return Response(response_data)
    
    
"""
must be logged in to see a seeker 
Single endpoint /seeker/<>/
-> GET : user can see own profile, shelter can see user profile if application active
-> DELETE profile
=> UPDATE profile information
"""
class SeekerRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    serializer_class = PetSeekerRetrieveSerializer
    queryset = PetSeeker.objects.all()

    def get_object(self):
        
        # this is Account object, NOT a PetSeeker object 
        user_id = self.request.user.id
        user = get_object_or_404(Account, id=user_id)

        seeker_id = self.kwargs.get('pk') # pet seeker id from URL capture 
        url_seeker = get_object_or_404(PetSeeker, id=seeker_id)

        seeker = get_object_or_404(PetSeeker, user=user)
        print(seeker_id)
        print(seeker.id)
        if seeker_id != seeker.id:
            shelter = get_object_or_404(PetShelter, user=user)
            # Check if the shelter has an active application with the pet seeker
            if seeker.applications.filter(shelter=shelter, application_status__in=['Approved', 'Pending']).exists():
                return seeker
            else:
                raise PermissionDenied(
                    'You do not have permission to view this profile. This shelter does not have an active application with this pet seeker.')
        
        return seeker 
        
        

    def get_serializer_class(self):
        # Override to use different serializers for different HTTP methods
        if self.request.method == 'PUT': # update
            return PetSeekerUpdateSerializer
        return PetSeekerRetrieveSerializer

    def perform_update(self, serializer):
        # can only update your own profile 
        if self.request.user != serializer.instance.user:
            return Response({"detail": "You do not have permission to update this shelter."},
                            status=status.HTTP_403_FORBIDDEN)

        
        user_data = serializer.validated_data.pop('user', tuple())

        user = Account.objects.get(id=self.request.user.id)
        for key, value in user_data.items():
            setattr(user, key, value)
        user.save()

        serializer.save()
        

    def perform_destroy(self, instance):
        # can only edit your own profile
        if self.request.user != instance.user:
            return Response({"detail": "You do not have permission to delete this shelter."},
                            status=status.HTTP_403_FORBIDDEN)
        user = Account.objects.get(id=instance.user.id)
        user.delete()
        instance.delete()