from rest_framework import serializers
from rest_framework import ReadOnlyField
from .models import Application

# read only for display
# treat fields in serializer as form 
#

class ApplicationSerializer(serializers.ModelSerializer):
    applicant_first_name = ReadOnlyField(source='pet_seeker_user.first_name')
    applicant_last_name = ReadOnlyField(source='pet_seeker_user.last_name')
    applicant_phone_number= ReadOnlyField(source='pet_seeker_user.phonenumber')
    applicant_profile_picture = ReadOnlyField(source='pet_seeker_user.profilepic')

    applicant_pref_animal = ReadOnlyField(source='pet_seeker_user.pref_animal')
    applicant_pref_breed = ReadOnlyField(source='pet_seeker_user.pref_breed')
    applicant_pref_age = ReadOnlyField(source='pet_seeker_user.pref_age')
    applicant_pref_size = ReadOnlyField(source='pet_seeker_user.pref_size')
    applicant_pref_colour = ReadOnlyField(source='pet_seeker_user.pref_colour')
    applicant_pref_sex = ReadOnlyField(source='pet_seeker_user.pref_sex')
    applicant_pref_personality = ReadOnlyField(source='pet_seeker_user.pref_personality')

    pet_listing_name = ReadOnlyField(source='pet_listing.name')
    pet_listing_animal = ReadOnlyField(source='pet_listing.animal')
    pet_listing_age = ReadOnlyField(source='pet_listing.age')
    pet_listing_sex = ReadOnlyField(source='pet_listing.sex')
    pet_listing_size = ReadOnlyField(source='pet_listing.size')
    pet_listing_breed = ReadOnlyField(source='pet_listing.breed')


    class Meta:
        model = Application
        fields = '__all__'

class CreateApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        exclude = ['pet_seeker_user']
        read_only_fields = ['pet_listing']
