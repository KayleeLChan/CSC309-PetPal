from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Account, PetShelter, PetSeeker
from django.contrib.auth.hashers import check_password
from rest_framework import serializers
from django.core.validators import EmailValidator
from rest_framework.validators import UniqueValidator


class ShelterListSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['sheltername']  

class SeekerSerializer(ModelSerializer):
    confirmpassword = serializers.CharField(write_only=True)
    email = serializers.EmailField(validators=[EmailValidator()])
    username = serializers.CharField(validators=[UniqueValidator(queryset=Account.objects.all())])

    class Meta:
        model = PetSeeker
        fields = ['accounttype','first_name', 'last_name', 'username', 'password','confirmpassword','phonenumber', 'profilepic']
        
    def validate(self, attrs):
        validate_password(attrs['password'])
        if attrs['password'] != attrs['confirmpassword']:
            raise serializers.ValidationError("The two passwords do not match.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirmpassword')
        return super().create(validated_data)
        

class ShelterSerializer(ModelSerializer):
    confirmpassword = serializers.CharField(write_only=True)
    email = serializers.EmailField(validators=[EmailValidator()])
    username = serializers.CharField(validators=[UniqueValidator(queryset=Account.objects.all())])

    class Meta:
        model = PetShelter
        fields = ['accounttype','first_name', 'last_name', 'username', 'password', 'confirmpassword','phonenumber', 'profilepic'
            'sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy']

    def validate(self, attrs):
        validate_password(attrs['password'])
        if attrs['password'] != attrs['confirmpassword']:
            raise serializers.ValidationError("The two passwords do not match.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirmpassword')
        return super().create(validated_data)
        
    
class ShelterDetailsSerializer(ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy']


