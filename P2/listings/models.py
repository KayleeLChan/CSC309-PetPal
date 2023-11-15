from django.db import models
from petpal.settings import AUTH_USER_MODEL as User
from multiselectfield import MultiSelectField

class Listing(models.Model):
    STATUS_CHOICES = [
        ("available", "available"),
        ("adopted", "adopted"),
        ("pending", "pending"),
        ("withdrawn", "withdrawn"),
    ]

    SEX_CHOICES = [
        ("F", "Female"),
        ("M", "Male"),
    ]

    HEALTH_CHOICES = [
        ("N/A", "N/A"),
        ("vaccinated", "vaccinated"),
        ("spayed/neutered", "spayed/neutered"),
    ]
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    # TODO: might have to change shelter to new account type
    shelter = models.ForeignKey(User, on_delete=models.SET_NULL, related_name="shelters", null=True)
    animal = models.CharField(max_length=50)
    breed = models.CharField(max_length=50)
    age = models.IntegerField()
    size = models.IntegerField()
    colour = models.CharField(max_length=50)
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    personality = models.CharField(max_length=50)
    health = MultiSelectField(max_length=28, choices=HEALTH_CHOICES)
    good_with = models.CharField(max_length=50)
    good_without = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return f"{self.name}"

class ListingImage(models.Model):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to="listing_images/")

    def __str__(self):
        return f"{self.listing.title} - Image {self.pk}"