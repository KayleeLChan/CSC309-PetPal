from rest_framework import serializers

from .models import Application


class ApplicationSerializer(serializers.ModelSerializer):
    applicant_first_name = serializers.ReadOnlyField(source='pet_seeker_user.first_name')
    applicant_last_name = serializers.ReadOnlyField(source='pet_seeker_user.last_name')
    applicant_phone_number= serializers.ReadOnlyField(source='pet_seeker_user.phonenumber')
    applicant_profile_picture = serializers.ReadOnlyField(source='pet_seeker_user.profilepic')

    applicant_pref_animal = serializers.ReadOnlyField(source='pet_seeker_user.pref_animal')
    applicant_pref_breed = serializers.ReadOnlyField(source='pet_seeker_user.pref_breed')
    applicant_pref_age = serializers.ReadOnlyField(source='pet_seeker_user.pref_age')
    applicant_pref_size = serializers.ReadOnlyField(source='pet_seeker_user.pref_size')
    applicant_pref_colour = serializers.ReadOnlyField(source='pet_seeker_user.pref_colour')
    applicant_pref_sex = serializers.ReadOnlyField(source='pet_seeker_user.pref_sex')
    applicant_pref_personality = serializers.ReadOnlyField(source='pet_seeker_user.pref_personality')

    pet_listing_name = serializers.ReadOnlyField(source='pet_listing.name')
    pet_listing_animal = serializers.ReadOnlyField(source='pet_listing.animal')
    pet_listing_age = serializers.ReadOnlyField(source='pet_listing.age')
    pet_listing_sex = serializers.ReadOnlyField(source='pet_listing.sex')
    pet_listing_size = serializers.ReadOnlyField(source='pet_listing.size')
    pet_listing_breed = serializers.ReadOnlyField(source='pet_listing.breed')


    pet_seeker_username = serializers.ReadOnlyField(source='pet_seeker_user.username')
    class Meta:
        model = Application
        fields = '__all__'

class CreateApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        exclude = ['pet_seeker_user']
        read_only_fields = ['pet_listing']
