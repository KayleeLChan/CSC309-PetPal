# views.py
from rest_framework.generics import ListCreateAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from .models import Blog, BlogContent
from .serializers import BlogSerializer, BlogContentSerializer
from django.shortcuts import get_object_or_404
from rest_framework.response import Response

class BlogCreateView(CreateAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(shelter=self.request.user) # this was causing the issue

class BlogCreateContentView(CreateAPIView):
    serializer_class = BlogContentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        # Get the blog_id from URL parameters
        blog_id = self.kwargs.get('blog_id')
        
        # Check if the Blog with the given ID exists
        try:
            blog = Blog.objects.get(pk=blog_id)
        except Blog.DoesNotExist:
            return Response({"error": "Blog not found"}, status=status.HTTP_404_NOT_FOUND)

        # Associate the BlogContent with the identified Blog
        serializer.save(blog=blog, author=self.request.user)

class BlogDetailsView(RetrieveAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_object(self):
        # because of the serializer, the content is attatched as a field called 'blog_content'
        return get_object_or_404(Blog, pk=self.kwargs['blog_id']) 

class BlogListView(ListAPIView):
    serializer_class = BlogSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def get_queryset(self):
        return Blog.objects.all()

class BlogContentListView(ListCreateAPIView):
    serializer_class = BlogContentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Get the blog_id from URL parameters
        blog_id = self.kwargs.get('blog_id')

        # Fetch the Blog object or return a 404 response if not found
        blog = get_object_or_404(Blog, pk=blog_id)

        # Filter BlogContent objects based on the related Blog
        return BlogContent.objects.filter(blog=blog)

