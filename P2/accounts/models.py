from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser, Permission
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import Group
from rest_framework import permissions



class Account(AbstractUser):
# username, password, email already included
    # identifier = models.CharField(max_length=40, unique=True)# ensure that the username is unique
    # ACCOUNT_TYPE_CHOICES = [("petseeker", "Pet Seeker"), ("petshelter", "Pet Shelter")]
    # USERNAME_FIELD = "identifier"
    REQUIRED_FIELDS = ["phonenumber"]

    # accounttype = models.CharField(max_length=15, choices=ACCOUNT_TYPE_CHOICES, null=True)
    phonenumber = models.CharField(max_length=20)
    profilepic = models.ImageField(upload_to='images/', blank=True)
    groups = None
    user_permissions = None
    # groups = models.ManyToManyField(Group, related_name='account_groups', blank=True) #chatgt suggestion
    # user_permissions = models.ManyToManyField(Permission, related_name='account_permissions', blank=True)

    def __str__(self):
        return f"{self.username}"

class PetShelter(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True, related_name='shelters')
    # only for petshelters
    REQUIRED_FIELDS = ["sheltername", "companyaddress", "city", "postal", "website", "mission", "policy"]
    sheltername = models.CharField(max_length=50)
    companyaddress = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    postal = models.CharField(max_length=6)
    website = models.URLField(max_length=200)
    mission = models.CharField(max_length=200)
    policy = models.CharField(max_length=200)
    # listings and applications will have a foreign key?

    def __str__(self):
        return f"{self.sheltername}"

class PetSeeker(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE, null=True, blank=True, related_name='seekers')
    firstname = models.CharField(max_length=30, blank=False, null=False)
    lastname = models.CharField(max_length=30, blank=False, null=False)
    def __str__(self):
        return f"{self.firstname}"
