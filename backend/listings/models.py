from django.db import models
from petpal.settings import AUTH_USER_MODEL as User

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

    AGE_CHOICES = [("new", "newborn"), ("young", "young"), ("adult", "adult"), ("senior", "senior")]

    SIZE_CHOICES = [("S", "small"), ("M", "medium"), ("L", "large"), ("XL", "extra large")]

    name = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES)
    shelter = models.ForeignKey(User, on_delete=models.CASCADE, related_name="listings", null=True)
    animal = models.CharField(max_length=50)
    breed = models.CharField(max_length=50)
    age = models.CharField(max_length=10, choices=AGE_CHOICES)
    size = models.CharField(max_length=5, choices=SIZE_CHOICES)
    colour = models.CharField(max_length=50)
    sex = models.CharField(max_length=1, choices=SEX_CHOICES)
    personality = models.CharField(max_length=15, choices=[("very active", "very active"), ("active", "active"), ("laid-back", "laid-back"), ("lap", "lap-pet")])
    good_with = models.CharField(max_length=50)
    description = models.TextField()
    deadline = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    last_updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"

class ListingImage(models.Model):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name='images', blank=True, null=True)
    image = models.ImageField(upload_to="listing_images/")

    def __str__(self):
        return f"{self.listing.title} - Image {self.pk}"