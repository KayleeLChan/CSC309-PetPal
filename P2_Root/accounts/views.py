from django.shortcuts import render

# Create your views here.

from rest_framework.generics import ListAPIView, ListUpdateAPIView, UpdateAPIView, CreateAPIView
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Account, PetShelter
from .serializers import SeekerSerializer, ShelterSerializer

# Login stuff is covered by the tokens?
# Create/Update (6 marks)
# Shelter account (3 marks)
# Pet seeker account (3 marks)
# Get (4 marks)
# Any user (shelter or seeker) can see the profile of a shelter.
#NOTNEEDED implement via applications Shelters can only view pet seekers' profiles if they have an active application with the shelter. 
# List (2 marks)
# Can view a list of shelters
# Cannot view a list of pet seekers
# Delete (1 mark)
# Shelter: all of their pet listings will be deleted.
# Seeker: all of their applications will be deleted.
# Both: all of their notifications will be deleted.

#login is done by the token api stuff?


from rest_framework.generics import CreateAPIView
from rest_framework.response import Response
from rest_framework import status

class PetShelterCreateAPIView(CreateAPIView):
    serializer_class = PetShelterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PetSeekerCreateAPIView(CreateAPIView):
    serializer_class = PetSeekerSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PetSeekerRegisterView(CreateAPIView):
    serializer_class = SeekerSerializer
    def perform_create(self, serializer):
        serializer.save()


class PetShelterRegisterView(CreateAPIView):
    serializer_class = ShelterSerializer


class PetShelterListUpdate(ListUpdateAPIView):
    permission_classes = [IsAuthenticated]


class PetShelterListUpdate(ListUpdateAPIView):
    permission_classes = [IsAuthenticated]

# get
# endpoint /shelter/<int:pk>/details
# viewable to anyone
class ShelterDetailsView(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ShelterDetailsSerializer
    def get_query_set(self):
        return PetShelter.objects.filter(pk=self.request.pk)

# get seeker profile , excluding this requirement as the application contains this info


# list of shelters
# endpoint /shelter/all/
class ShelterListView(ListAPIView):
    serializer_class = ShelterListSerializer
    def get_query_set(self):
        query_set = PetShelter.objects.all()
        return query_set


#