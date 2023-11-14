from rest_framework import serializers
from accounts.models import Account, PetSeeker, PetShelter

from .models import Account

class PetSeekerSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

class PetSeekerSignUpSerializer(serializers.ModelSerializer):

    class Meta:
        model = PetSeeker
        fields = '__all__'

class PetShelterSignUpSerializer(serializers.ModelSerializer):
   
    sheltername = serializers.CharField(write_only=True, max_length=50,required=True)
    companyaddress = serializers.CharField(max_length=150,required=True)
    city = serializers.CharField(max_length=50,required=True)
    postal = serializers.CharField(max_length=6,required=True)
    website = serializers.URLField(max_length=200,required=False)
    mission = serializers.CharField(required=False)
    policy = serializers.CharField(required=False)

    class Meta:
        model = PetShelter
        fields = '__all__'

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