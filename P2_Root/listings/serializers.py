from rest_framework.serializers import ModelSerializer, ListField
from .models import Listing, ListingImage

class ListingImageSerializer(ModelSerializer):
    class Meta:
        model = ListingImage
        fields = ['image']

class ListingSerializer(ModelSerializer):
    # TODO: Learn how to make required later
    images = ListingImageSerializer(many=True, required=False)
    class Meta:
        model = Listing
        fields = '__all__'

