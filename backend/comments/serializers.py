from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Comment
from rest_framework import serializers 
from django.contrib.contenttypes.models import ContentType

class CommentSerializer(ModelSerializer):
    creation_time = DateTimeField(read_only=True)
    content_type = serializers.PrimaryKeyRelatedField(queryset=ContentType.objects.all(), required=False, allow_null=True)
    object_id = serializers.IntegerField(required=False, min_value=1)

    class Meta:
        model = Comment
        fields = '__all__'