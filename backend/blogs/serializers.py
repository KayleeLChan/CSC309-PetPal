# serializers.py
from rest_framework import serializers
from .models import Blog, BlogContent

# class BlogSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = BlogContent
#         fields = ['text', 'creation_time']

# class BlogWithContentSerializer(serializers.ModelSerializer):
#     blog_content = BlogSerializer(many=True, read_only=True)

#     class Meta:
#         model = Blog
#         fields = ['id', 'blog_title', 'creation_time', 'author_name', 'blog_content']

class BlogContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogContent
        # fields = ['text', 'creation_time']
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        # fields = ['id', 'blog_title', 'creation_time', 'author_name', 'blog_content']
        fields = '__all__'
