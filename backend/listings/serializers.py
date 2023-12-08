from rest_framework.serializers import ModelSerializer
from .models import Listing, ListingImage

class ListingImageSerializer(ModelSerializer):
    class Meta:
        model = ListingImage
        fields = '__all__'
        read_only_fields = ['listing']

class ListingSerializer(ModelSerializer):
    images = ListingImageSerializer(many=True, required=False)

    class Meta:
        model = Listing
        fields = '__all__'

