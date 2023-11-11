from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Comment

class CommentSerializer(ModelSerializer):
    creation_time = DateTimeField(read_only=True)

    class Meta:
        model = Comment
        fields = '__all__'

