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
        exclude = ['pet_seeker_user', 'pet_listing']