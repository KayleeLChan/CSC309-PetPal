from django.shortcuts import render

# Create your views here.
# views.py

from rest_framework import views
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from .models import PetSeeker, Account, PetShelter
from .serializers import SeekerSerializer, ShelterSerializer, AccountSerializer, DeleteSerializer, \
ShelterDetailsSerializer, ShelterListSerializer, PetSeekerGetSerializer, PetShelterGetSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView, CreateAPIView, RetrieveUpdateAPIView, RetrieveAPIView, ListAPIView, DestroyAPIView
from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class PetSeekerRegisterView(CreateAPIView):
    serializer_class = SeekerSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        new_user = serializer.save()
        new_user.is_active = True
        new_user.accounttype = "petseeker"
        new_user.save()


class PetShelterRegisterView(CreateAPIView):
    serializer_class = ShelterSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        new_user = serializer.save()
        new_user.is_active = True
        new_user.accounttype = "petshelter"
        new_user.save()


#NOT EdITING THIs

class LoginView(views.APIView):
    serializer_class = AccountSerializer
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


class ProfileUpdateView(RetrieveUpdateAPIView):
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.request.user.accounttype == 'petseeker':
            return PetSeekerGetSerializer
        else:
            return PetShelterGetSerializer

    def get_object(self):
        instance = get_object_or_404(Account, pk=self.kwargs['pk'])
        if instance != self.request.user:
            raise PermissionDenied('You do not have permission to view this profile')
        else:
            return instance

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data.copy()
        if request.user.accounttype == "petshelter":
            additional_fields = ["sheltername", "companyaddress", "city", "postal", "website", "mission", "policy"]
            shelter_instance = PetShelter.objects.get(pk=instance.pk)
            for field in additional_fields:
                if not request.data.get(field):
                    new_field = {field: getattr(shelter_instance, field)}
                    data.update(new_field)
        else:
            additional_fields = ["pref_location", "pref_animal", "pref_breed", "pref_age", "pref_size", "pref_colour", "pref_sex", "pref_personality"]
            seeker_instance = PetSeeker.objects.get(pk=instance.pk)
            for field in additional_fields:
                if not request.data.get(field):
                    new_field = {field: getattr(seeker_instance, field)}
                    data.update(new_field)
                    
        serializer = self.get_serializer(instance, data=data, partial=self.partial_update)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def perform_update(self, serializer):
        serializer.save()



class ShelterDetailsView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ShelterDetailsSerializer
    def get_object(self):
        return get_object_or_404(PetShelter, pk=self.kwargs['pk'])
    
class ShelterListView(ListAPIView):
    serializer_class = ShelterListSerializer
    permission_classes = [permissions.AllowAny]
    def get_queryset(self):
        query_set = PetShelter.objects.all()
        return query_set

class AccountDeleteView(DestroyAPIView):
    queryset = Account.objects.all()
    serializer_class = DeleteSerializer
    permission_classes = [IsAuthenticated]

    def destroy(self, request, *args, **kwargs):
        pk = self.kwargs['pk']
        instance = get_object_or_404(Account, pk=pk)
        
        if instance != request.user:
            raise PermissionDenied('You do not have permission to delete this profile')
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
        