from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Blog
from rest_framework import serializers 
from django.contrib.contenttypes.models import ContentType

class BlogSerializer(ModelSerializer):
    creation_time = DateTimeField(read_only=True)
    # object_id = serializers.IntegerField(required=False, min_value=1)

    class Meta:
        model = Blog
        fields = '__all__'