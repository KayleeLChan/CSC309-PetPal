from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers
from listings.models import Listing

# Create your models here.
class Application(models.Model):
    STATUS_CHOICES = [
       ("available", "available"),
        ("pending", "pending"),
        ("denied", "denied")
        ("withdrawn", "withdrawn")
        ('accepted', 'accepted')
    ]
    # status of pet listing, calls Listing class
    pet_listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')

    # creation and update time
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated_at = models.DateTimeField(auto_now=True)

    # each application is associated to one pet seeker and one shelter
    pet_seeker = models.OneToOneField(User, on_delete=models.CASCADE, related_name='pet_seeker_applications')
    shelter = models.OneToOneField(User, on_delete=models.CASCADE, related_name='shelter_applications')

    # pet listing details - should get from Listing class?
    # breed = models.CharField(Listing.breed)
    # age = models.CharField(Listing.age)
    # sex = models.CharField(Listing.sex)
    # size = models.CharField(Listing.size)
    # personality = models.CharField(Listing.personality)

    # section 1: applicant details
    # first name, last name, and email should come from the Account User model?
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.IntegerField()
    above_twentyone = models.CharField(max_length=50)

    # section 2: application details
    adopting_for = models.CharField(max_length=50)
    children = models.CharField(max_length=50)
    pet_owner_history = models.CharField(max_length=50)
    current_pets = models.CharField(max_length=50)
    ideal_pet = models.CharField(max_length=50)
    ideal_pet_sex = models.CharField(max_length=50)
    ideal_pet_size = models.CharField(max_length=50)
    ideal_pet_behaviour = models.CharField(max_length=50)

    # section 3: payment
    currently_insured = models.CharField(max_length=50)
    insurance_name = models.CharField(max_length=50)
    method_of_payment = models.CharField(max_length=50)

    def __str__(self):
        return f"Application #{self.id} for {self.pet_listing}"

    class Meta:
        ordering = ['-created_at', '-last_updated_at']
