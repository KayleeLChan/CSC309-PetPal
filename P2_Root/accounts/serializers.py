from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Account, PetShelter
from django.contrib.auth.hashers import check_password

class ShelterListSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['sheltername']  

class SeekerSerializer(ModelSerializer):
    password2 = serializers.CharField()

    class Meta:
        model = PetSeeker
        fields = '__all__'

class SeekerSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = '__all__'

    password2 = serializers.CharField(write_only=True)
    
    def validate(self, data):
        password1 = data.get('password')
        password2 = data.get('password2')
        # Check if the passwords match
        if not check_password(password1, password2)
            raise serializers.ValidationError("The passwords do not match. Please try again.")

        return data
        
    
class ShelterDetailsSerializer(ModelSerializer):
