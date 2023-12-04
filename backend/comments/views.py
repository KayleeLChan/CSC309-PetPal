from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .models import Comment
from accounts.models import Account, PetShelter, PetSeeker
from applications.models import Application
from notifications.models import Notification
from .serializers import CommentSerializer
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse
from django.core.exceptions import PermissionDenied


# Create your views here.
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 30

class CommentListCreateView(ListCreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
    pagination_class = StandardResultsSetPagination

    # making a comment for given shelter
    def perform_create(self, serializer):
        object_id = self.kwargs['object_id']
        model = self.kwargs['model']
        comment_object = get_object_or_404(ContentType, id=object_id)
        
        if model != "shelter":
            application = get_object_or_404(Application, id=object_id)
            involved_users = [application.pet_seeker_user, application.pet_listing.shelter]
            if self.request.user not in involved_users:
                raise PermissionDenied("You do not have permission to access this view.")
        
        new_comment = serializer.save(author=self.request.user, object_id=object_id, content_type=comment_object, content_model=model)

        if model == "shelter":
            comment_content = "A new comment has been added to your shelter!"
            comment_title = "comment" 
            comment_recipient = get_object_or_404(PetShelter, id=object_id)
        else:
            comment_content = "A new comment has been added to one of your applications!"
            comment_title = "application"
            if self.request.user.accounttype == "petshelter":
                comment_recipient = application.pet_seeker_user
            else:
                comment_recipient = application.pet_listing.shelter

            application.last_updated_at = new_comment.creation_time
            application.save()
            
            
        Notification.objects.create(
            recipient= comment_recipient,
            notifier= self.request.user,
            content=comment_content,
            title= comment_title,
            link= reverse("comments:comment", kwargs={'model': model, 'object_id': object_id})
        )

    def get_queryset(self):
        object_id = self.kwargs['object_id']
        model = self.kwargs['model']
        
        if model != "shelter":
        
            application = get_object_or_404(Application, id=object_id)
            involved_users = [application.pet_seeker_user, application.pet_listing.shelter]
        
        if (model == "shelter") or (self.request.user in involved_users and model !='shelter'):
            comments = Comment.objects.filter(content_model=model, object_id=object_id).order_by("-creation_time")
            return comments
        else:
            raise PermissionDenied("You do not have permission to access this view.")