from django.shortcuts import get_object_or_404
from .models import Listing, ListingImage
from .serializers import ListingSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

# Create your views here.
class PetListingsListCreate(ListCreateAPIView):
    serializer_class = ListingSerializer
    
    def get_queryset(self):
        return Listing.objects.all()
    
    def perform_create(self, serializer):
        # # TODO: Make it so that only shelters can create
        # # permission_claess = [IsShelter]
        # # remove products from the form data
        # images = serializer.validated_data.pop('images')

        # save the store first (otherwise products won't have a store to refer to)
        # TODO: Might have to change shelter from user to new account type
        listing = Listing.objects.create(**serializer.validated_data, shelter=self.request.user)

        # # for each product in products, create new product
        # for image_data in images:
        #     ListingImage.objects.create(**image_data, listing=listing)

class PetListingsRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    # TODO: Make it so that only shelters can use this view
    # permission_claess = [IsShelter]
    serializer_class = ListingSerializer
    def get_object(self):
        return get_object_or_404(Listing, pk=self.kwargs['pk'], shelter=self.request.user)