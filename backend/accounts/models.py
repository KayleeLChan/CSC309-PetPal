from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, Permission
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import Group
from rest_framework import permissions



class Account(AbstractUser):
# username, password, email already included
    ACCOUNT_TYPE_CHOICES = [("petseeker", "Pet Seeker"), ("petshelter", "Pet Shelter")]
    REQUIRED_FIELDS = ["phonenumber"]

    accounttype = models.CharField(max_length=15, choices=ACCOUNT_TYPE_CHOICES, null=True)
    is_active = models.BooleanField(default=True)
    phonenumber = models.CharField(max_length=20)
    profilepic = models.ImageField(upload_to='images/', blank=True)
    groups = None
    user_permissions = None

    def __str__(self):
        return f"{self.username}"

class PetShelter(Account):
    # only for petshelters
    REQUIRED_FIELDS = ["sheltername", "companyaddress", "city", "postal", "website", "mission", "policy"]
    sheltername = models.CharField(max_length=50)
    companyaddress = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    postal = models.CharField(max_length=6)
    website = models.URLField(max_length=200, null=True)
    mission = models.TextField(null=True)
    policy = models.TextField(null=True)
    # listings and applications will have a foreign key
    

    def __str__(self):
        return f"{self.sheltername}"

class PetSeeker(Account):
    SEX_CHOICES = [
        ("F", "Female"),
        ("M", "Male"),
    ]
    # user = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True, related_name='seekers')
    # first_name = models.CharField(max_length=30)
    # last_name = models.CharField(max_length=30)
    pref_location = models.CharField(max_length=50)
    pref_animal = models.CharField(max_length=50)
    pref_breed = models.CharField(max_length=50)
    pref_age = models.IntegerField()
    pref_size = models.IntegerField()
    pref_colour = models.CharField(max_length=50)
    pref_sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    pref_personality = models.CharField(max_length=50)
    
    def __str__(self):
        return f"{self.first_name}"
