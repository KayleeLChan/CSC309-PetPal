from rest_framework.generics import ListCreateAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from .models import Blog
from .serializers import BlogSerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class BlogCreateView(ListCreateAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

    def get_queryset(self):
        return Blog.objects.filter(author=self.request.user)

class BlogDetailsView(RetrieveAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return get_object_or_404(Blog, pk=self.kwargs['blog_id'])

class BlogListView(ListCreateAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Blog.objects.all()