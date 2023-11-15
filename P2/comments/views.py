from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .models import Comment
from accounts.models import Account, PetShelter, PetSeeker
from .serializers import CommentSerializer

# Create your views here.
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 30

class ShelterCommentListCreateView(ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    # making a comment for given shelter
    def perform_create(self, serializer):
        shelter_id = self.kwargs['shelter_id']
        shelter = get_object_or_404(PetShelter, id=shelter_id)
        print(shelter_id)
        print(shelter)
        serializer.save(author=self.request.user, object_id=shelter_id, content_type=shelter)

    def get_queryset(self):
        shelter_id = self.kwargs['shelter_id']
        print(shelter_id)
        account_content_type = ContentType.objects.get_for_model(PetShelter)
        petshelter_comments = Comment.objects.filter(content_type=account_content_type, object_id=shelter_id)
        return petshelter_comments

# class ApplicationCommentListCreateView(ListCreateAPIView):
#     queryset = Comment.objects.filter(content_type='application')
#     serializer_class = CommentSerializer
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):
#         application_id = self.kwargs.get('application_id')
#         application = get_object_or_404(Application, id=application_id)
#         serializer.save(author=self.request.user, content_object=application)
