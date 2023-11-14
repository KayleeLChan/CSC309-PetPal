from rest_framework import serializers
from accounts.models import Account, PetSeeker
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


from django.contrib.auth.password_validation import validate_password
from .models import Account

class PetSeekerSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

class PetSeekerSignUpSerializer(serializers.ModelSerializer):
   
    firstname = serializers.CharField(write_only=True, max_length=30,required=True)
    lastname = serializers.CharField(write_only=True, max_length=30,required=True)
    class Meta:
        model = Account
        fields = ['username', 'password', 'email', 'firstname', 'lastname']



class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class PetSeekerRetrieveSerializer(serializers.ModelSerializer):
    user = AccountSerializer()

    class Meta:
        model = PetSeeker
        fields = ['firstname','lastname', 'user']

class AccountUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['password','phonenumber', 'address', 'email', 'profilepic']


class PetSeekerUpdateSerializer(serializers.ModelSerializer):
    user = AccountUpdateSerializer()
    class Meta: 
        model = PetSeeker
        fields = ['firstname','lastname', 'user']