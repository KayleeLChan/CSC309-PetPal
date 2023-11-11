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

    accounttype = models.CharField(max_length=15, choices=ACCOUNT_TYPE_CHOICES)
    phonenumber = models.CharField(max_length=20)
    profilepic = models.ImageField(upload_to='images/', blank=True)
    groups = models.ManyToManyField(Group, related_name='account_groups', blank=True) #chatgt suggestion
    user_permissions = models.ManyToManyField(Permission, related_name='account_permissions', blank=True)

    def __str__(self):
        return f"{self.username}"

class PetShelter(Account):
    # only for petshelters
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

class PetSeeker(Account):
    def __str__(self):
        return f"{self.first_name}"
