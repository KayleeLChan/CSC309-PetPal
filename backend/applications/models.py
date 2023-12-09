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

    INSURANCE_CHOICES = [
        ("visa", "Visa"),
        ("master", "Mastercard"),
        ("amex", "American Express"),
        ("interac", "Interac E-transfer"),
        ("paypal", "Paypal")
    ]
    # creation and update time
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated_at = models.DateTimeField(auto_now=True)

    # status of application
    application_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending') 

    # pet listing of application, calls Listing class (access pet details through this field)
    pet_listing = models.ForeignKey(Listing, on_delete=models.CASCADE)

    # the User viewing application - either a Pet Seeker (applicant) or a Shelter (rejector, approver, etc.)
    pet_seeker_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pet_seeker_applicant')

    # section 1: applicant details - first name, last name, phone number and email come from User class
    applicant_first_name = models.CharField(max_length=50) # pre-populated
    applicant_last_name = models.CharField(max_length=50) # pre-populated
    applicant_email = models.CharField(max_length=50) # pre-populated
    applicant_phone_number = models.IntegerField() # pre-populated
    address = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=6)
    above_twentyone = models.BooleanField()

    # section 2: application details
    adopting_for = models.CharField(max_length=10, choices=[("myself", "myself"),("family", "my family")], default='myself') #
    children = models.CharField(max_length=5, choices=[("kids", "kids"),("none", "no kids")], default='none') #
    pet_owner_history = models.CharField(max_length=10, choices=[("previous", "previous"),("first", "first-time")], default='first') #
    current_pets = models.CharField(max_length=10, choices=[("none", "no pet(s)"),("cat", "cat(s)"),("dog", "dog(s)"), ("both", "dog(s) and cat(s)"), ("other", "other pet(s)")], default='none')
    ideal_pet_age = models.CharField(max_length=10, choices=[("none", "none"), ("new", "newborn"), ("young", "young"), ("adult", "adult"), ("senior", "senior")], default="none")
    ideal_pet_sex = models.CharField(max_length=5, choices=[("none", "no gender preference"), ("F", "female"), ("M", "male")], default="none")
    ideal_pet_size = models.CharField(max_length=5, choices=[("none", "no size preference"), ("S", "small"), ("M", "medium"), ("L", "large"), ("XL", "extra large")], default="none")
    ideal_pet_behaviour = models.CharField(max_length=15, choices=[("none", "no behaviour preference"), ("very active", "very active"), ("active", "active"), ("laid-back", "laid-back"), ("lap", "lap-pet")], default="none")

    # section 3: payment
    currently_insured = models.BooleanField()
    insurance_name = models.CharField(max_length=10, choices=INSURANCE_CHOICES)

    def __str__(self):
        return f"Application #{self.id} for {self.pet_listing}"

    class Meta:
        ordering = ['-created_at', '-last_updated_at']

