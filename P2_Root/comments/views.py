from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .models import Comment, Shelter, Application
from .serializers import CommentSerializer

# Create your views here.
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 30

class ShelterCommentListCreateView(ListCreateAPIView):
    queryset = Comment.objects.filter(content_typemodel='shelter')
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        shelter_id = self.kwargs.get('shelter_id')
        shelter = get_object_or_404(Shelter, id=shelter_id)
        serializer.save(author=self.request.user, content_object=shelter)

class ApplicationCommentListCreateView(ListCreateAPIView):
    queryset = Comment.objects.filter(content_typemodel='application')
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        application_id = self.kwargs.get('application_id')
        application = get_object_or_404(Application, id=application_id)
        serializer.save(author=self.request.user, content_object=application)