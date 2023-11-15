from rest_framework import serializers
from .models import Application

# read only for display
# treat fields in serializer as form 
#

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'

class CreateApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        exclude = ['pet_seeker_user', 'shelter_user', 'pet_listing']
        read_only_fields = ['breed', 'age', 'sex', 'size', 'belongs_to_shelter']