from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Blog

class BlogSerializer(ModelSerializer):
    creation_time = DateTimeField(read_only=True)

    class Meta:
        model = Blog
        fields = '__all__'
