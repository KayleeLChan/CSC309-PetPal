from django.shortcuts import get_object_or_404
from .models import Listing, ListingImage
from .serializers import ListingSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework.response import Response

# Create your views here.
class IsShelterOrReadOnly(BasePermission):
    """
    Object-level permission to only allow shelters of a listing to edit it.
    Assumes the model instance has a `shelter` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in SAFE_METHODS:
            return True

        # Instance must have an attribute named `shelter`.
        return obj.shelter == request.user

class PetListingsListCreate(ListCreateAPIView):
    serializer_class = ListingSerializer
    permission_classes = [IsShelterOrReadOnly]

    def get_queryset(self):
        return Listing.objects.all()
    
    def perform_create(self, serializer):
        serializer.save(shelter=self.request.user)

class PetListingsRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    serializer_class = ListingSerializer
    permission_classes = [IsShelterOrReadOnly]

    def get_object(self):
        return get_object_or_404(Listing, id=self.kwargs['pk'], shelter=self.request.user)
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)







# class PetListingsListCreate(ListCreateAPIView):
#     serializer_class = ListingSerializer
#     permision_claess = [IsShelterOrReadOnly]
    
#     def get_queryset(self):
#         return Listing.objects.all()
    
#     def perform_create(self, serializer):
#         listing = serializer.save(shelter=self.request.user)
#         # # TODO: Make it so that only shelters can create
#         # # permission_claess = [IsShelter]
#         # # remove products from the form data
#         # images = serializer.validated_data.pop('images')

#         # # save the store first (otherwise products won't have a store to refer to)
#         # # TODO: Might have to change shelter from user to new account type
#         # listing = Listing.objects.create(**serializer.validated_data, shelter=self.request.user)

#         # # for each product in products, create new product
#         # for image_data in images:
#         #     ListingImage.objects.create(**image_data, listing=listing)

# class PetListingsRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
#     serializer_class = ListingSerializer
#     permision_claess = [IsShelterOrReadOnly]

#     def get_object(self):
#         return get_object_or_404(Listing, pk=self.kwargs['pk'], shelter=self.request.user)