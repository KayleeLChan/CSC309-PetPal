from django.db import models

# Create your models here.

from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

class PetListing(models.Model):
    # Define PetListing model here


class Application(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('denied', 'Rejected'),
        ('withdrawn', 'Withdrawn'),
    ]

    pet_listing = models.ForeignKey(PetListing, on_delete=models.CASCADE)
    shelter = models.ForeignKey(User, on_delete=models.CASCADE, related_name='shelter_applications')
    pet_seeker = models.ForeignKey(User, on_delete=models.CASCADE, related_name='pet_seeker_applications')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated_at = models.DateTimeField(auto_now=True)


    def __str__(self):
        return f"Application #{self.id} for {self.pet_listing}"

    # def delete(self, *args, **kwargs):
    #     # Check if the associated pet listing is being deleted
    #     if hasattr(self, 'pet_listing') and self.pet_listing is not None:
    #         super().delete(*args, **kwargs)
    #     else:
    #         # Handle the case where the associated pet listing is not being deleted
    #         # You might want to raise an exception, log a message, or take other actions
    #         pass

    class Meta:
        # Add any additional meta options if needed
        ordering = ['-created_at', '-last_updated_at']


class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'


