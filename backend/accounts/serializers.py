from rest_framework import serializers
from accounts.models import Account, PetSeeker, PetShelter
from .models import Account
import re

###############LOGIN AND DELETE SERIALIZERS #############################
#Account Serializer called in the login view. Works for either seeker or shelter
class AccountSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

#just used in the DestroyAPI view
class DeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

########################################################################

##### GET serializers used in the RetrieveUpdate Profile view #########
class PetSeekerGetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=False)
    phonenumber = serializers.CharField(required=False)
    username = serializers.CharField(required=False)

    class Meta:
        model = PetSeeker
        fields = '__all__'
    
    def validate(self, attrs):
        phonenumber = attrs.get('phonenumber')
        errors = {}
        if attrs.get('password') != attrs.get('confirmpassword'):
            errors['password'] = "The two passwords do not match."

        if (phonenumber and len(phonenumber) != 10):
            errors['phonenumber'] = 'Enter a valid Phone Number'

        username = attrs.get('username')
        
        if Account.objects.filter(username=username):
            errors['username'] = 'This username already exists'

        if errors:
            raise serializers.ValidationError(errors)

        return attrs

class PetShelterGetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=False)
    phonenumber = serializers.CharField(required=False)
    username = serializers.CharField(required=False)

    class Meta:
        model = PetShelter
        fields = '__all__'

    def validate(self, attrs):
        phonenumber = attrs.get('phonenumber')
        errors = {}
        if attrs.get('password') != attrs.get('confirmpassword'):
            errors['password'] = "The two passwords do not match."

        if (phonenumber and len(phonenumber) != 10):
            errors['phonenumber'] = 'Enter a valid Phone Number'

        username = attrs.get('username')

        if Account.objects.filter(username=username):
            errors['username'] = 'This username already exists'

        if errors:
            raise serializers.ValidationError(errors)

        return attrs
    
#######################################################################

########### REGISTER SERIALIZERS #####################################
class SeekerSerializer(serializers.ModelSerializer):
    phonenumber = serializers.CharField(required=True)
    confirmpassword = serializers.CharField(write_only=True)
    
    def validate_phone_number(self, phonenumber):
        if phonenumber is not None:
            return bool(re.match(r'^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$', phonenumber))
        else:
            return False

    class Meta:
        model = PetSeeker
        fields = '__all__'
        # fields = ['first_name', 'last_name', 'username', 'password','confirmpassword','phonenumber', 'profilepic', 'email', 'accounttype']
        
    def validate(self, attrs):
        phonenumber = attrs['phonenumber']
        errors = {}
        if attrs['password'] != attrs['confirmpassword']:
            errors['password'] = "The two passwords do not match."

        if not (self.validate_phone_number(phonenumber)):
            errors['phonenumber'] = 'Enter a valid Phone Number'

        if errors:
            raise serializers.ValidationError(errors)

        return attrs

    def create(self, validated_data):
        validated_data.pop('confirmpassword')
        return super().create(validated_data)

class ShelterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    website = serializers.URLField(max_length=200,required=False)
    mission = serializers.CharField(required=False)
    policy = serializers.CharField(required=False)
    confirmpassword = serializers.CharField(write_only=True)
    phonenumber = serializers.CharField(required=True)

    class Meta:
        model = PetShelter
        fields = '__all__'

    def validate_phone_number(self, phonenumber):
        if phonenumber is not None:
            return bool(re.match(r'^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$', phonenumber))
        else:
            return False

    # def validatepostal(self, postal):
    #     if postal is not None:
    #         return bool(re.match(r'^[ABCEGHJKLMNPRSTVXY]\\d [ABCEGHJ-NPRSTV-Z] [ -]?\\d [ABCEGHJ-NPRSTV-Z]\\d$', postal))
    #     else:
    #         return False

    def validate(self, attrs):
        phonenumber = attrs['phonenumber']
        # postal = attrs['postal']
        errors = {}
        if attrs['password'] != attrs['confirmpassword']:
            errors['password'] = "The two passwords do not match."

        if not (self.validate_phone_number(phonenumber)):
            errors['phonenumber'] = 'Invalid Phone Number'

        # if not (self.validatepostal(postal)):
        #     errors['postal'] = 'Invalid Postal Code'

        if errors:
            raise serializers.ValidationError(errors)

        return attrs

    def create(self, validated_data):
        validated_data.pop('confirmpassword')
        return super().create(validated_data)

############ ADDITIONAL SHELTER SERIALIZERS FOR LIST OF SHELTER AND SHELTER PROFILES ####################

class ShelterDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy', 'date_joined', 'phonenumber']

class ShelterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['sheltername', 'id']  

