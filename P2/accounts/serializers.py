from rest_framework import serializers
from accounts.models import Account, PetSeeker, PetShelter
from .models import Account

#for login
class AccountSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)

class DeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'


class PetSeekerSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetSeeker
        fields = '__all__'

class PetSeekerGetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=False)
    phonenumber = serializers.CharField(required=False)
    username = serializers.CharField(required=False)

    class Meta:
        model = PetSeeker
        fields = '__all__'
        # edit the fields

class PetShelterGetSerializer(serializers.ModelSerializer):
    password = serializers.CharField(required=False)
    phonenumber = serializers.CharField(required=False)
    username = serializers.CharField(required=False)

    class Meta:
        model = PetShelter
        fields = '__all__'
        # edit the fields
            

class SeekerSerializer(serializers.ModelSerializer):
    #email not required field
    confirmpassword = serializers.CharField(write_only=True)
    # username = serializers.CharField(validators=[UniqueValidator(queryset=Account.objects.all())])
    class Meta:
        model = PetSeeker
        fields = '__all__'
        # fields = ['first_name', 'last_name', 'username', 'password','confirmpassword','phonenumber', 'profilepic', 'email', 'accounttype']
        
    def validate(self, attrs):
        #TOdo add phone number valid
        # display more than one error at a time
        if attrs['password'] != attrs['confirmpassword']:
            raise serializers.ValidationError("The two passwords do not match.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirmpassword')
        return super().create(validated_data)

class ShelterSerializer(serializers.ModelSerializer):
    # sheltername = serializers.CharField(write_only=True, max_length=50,required=True)
    # companyaddress = serializers.CharField(max_length=150,required=True)
    # city = serializers.CharField(max_length=50,required=True)
    # postal = serializers.CharField(max_length=6,required=True)
    website = serializers.URLField(max_length=200,required=False)
    mission = serializers.CharField(required=False)
    policy = serializers.CharField(required=False)
    confirmpassword = serializers.CharField(write_only=True)

    class Meta:
        model = PetShelter
        fields = '__all__'

    def validate(self, attrs):
        #TOdo add phone number valid
        # display more than one error at a time
        if attrs['password'] != attrs['confirmpassword']:
            raise serializers.ValidationError("The two passwords do not match.")
        return attrs

    def create(self, validated_data):
        validated_data.pop('confirmpassword')
        return super().create(validated_data)

class ShelterDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['profilepic','sheltername', 'companyaddress', 'city', 'postal', 'website', 'mission', 'policy']

class ShelterListSerializer(serializers.ModelSerializer):
    class Meta:
        model = PetShelter
        fields = ['sheltername']  

# class AccountSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Account
#         fields = '__all__'


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