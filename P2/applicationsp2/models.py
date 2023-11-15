from django.db import models
from petpal.settings import AUTH_USER_MODEL as User
from rest_framework import serializers
from listings.models import Listing

# Create your models here.
class Application(models.Model):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ('accepted', 'Accepted'),
        ("denied", "Denied"),
        ("withdrawn", "Withdrawn")
    ]
    # creation and update time
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated_at = models.DateTimeField(auto_now=True)

    # status of application
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending') 

    # pet listing of application, calls Listing class (access pet details through this field)
    pet_listing = models.ForeignKey(Listing, on_delete=models.CASCADE)

    # the User viewing application - either a Pet Seeker (applicant) or a Shelter (rejector, approver, etc.)
    pet_seeker_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pet_seeker_applicant')

    # section 1: applicant details - first name, last name, phone number and email come from User class
    applicant_first_name = models.CharField(max_length=50) # pre-populated
    applicant_last_name = models.CharField(max_length=50) # pre-populated
    applicant_email = models.CharField(max_length=50) # pre-populated
    applicant_phone_number = models.CharField(max_length=50) # pre-populated
    address = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=50)
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

