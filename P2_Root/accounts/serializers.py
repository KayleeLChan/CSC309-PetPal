from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Account, PetShelter, PetSeeker
from django.contrib.auth.hashers import check_password
from rest_framework import serializers


class ShelterListSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['sheltername']  

class SeekerSerializer(ModelSerializer):
    confirmpassword = serializers.CharField(write_only=True)

    class Meta:
        model = PetSeeker
        fields = ['accounttype','first_name', 'last_name', 'username', 'password', 'confirmpassword','phonenumber', 'profilepic']
        
    def validate(self, data):
        password1 = data.get('password')
        password2 = data.get('confirmpassword')
        # Check if the passwords match
        if not check_password(password1, password2):
            raise serializers.ValidationError("The passwords do not match. Please try again.")

        return data

class ShelterSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['accounttype','first_name', 'last_name', 'username', 'password', 'confirmpassword','phonenumber', 'profilepic'
            'sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy']

    password2 = serializers.CharField(write_only=True)
    def validate(self, data):
        password1 = data.get('password')
        password2 = data.get('password2')
        # Check if the passwords match
        if not check_password(password1, password2):
            raise serializers.ValidationError("The passwords do not match. Please try again.")

        return data
        
    
class ShelterDetailsSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy']