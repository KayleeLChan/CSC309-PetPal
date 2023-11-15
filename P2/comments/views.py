from django.shortcuts import render

from django.shortcuts import get_object_or_404
from rest_framework.generics import ListCreateAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .models import Comment
from accounts.models import Account, PetShelter, PetSeeker
from notifications.models import Notification
from .serializers import CommentSerializer
from django.contrib.contenttypes.models import ContentType
from django.urls import reverse


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
        serializer.save(author=self.request.user, object_id=object_id, content_type=comment_object, content_model=model)

        if model == "shelter":
            comment_content = "A new comment has been added to your shelter!"
            comment_title = "comment" 
            comment_recipient = get_object_or_404(PetShelter, id=object_id)
        else:
            comment_content = "A new comment has been added to one of your applications!"
            comment_title = "application"
            if self.request.user.accounttype == "petshelter":
                comment_recipient = (get_object_or_404(Application, id=object_id)).pet_seeker_user
            else:
                comment_recipient = (get_object_or_404(Application, id=object_id)).pet_listing.shelter
            
        print(comment_recipient)

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
        # if model == "shelter":
        #     account_content_type = ContentType.objects.get_for_model(PetShelter)
        # else:
        #     account_content_type = ContentType.objects.get_for_model(Application)
        # print(account_content_type)
        comments = Comment.objects.filter(content_model=model, object_id=object_id).order_by("-creation_time")
        return comments

# class ApplicationCommentListCreateView(ListCreateAPIView):
#     queryset = Comment.objects.filter(content_type='application')
#     serializer_class = CommentSerializer
#     permission_classes = [IsAuthenticated]

#     def perform_create(self, serializer):
#         application_id = self.kwargs.get('application_id')
#         application = get_object_or_404(Application, id=application_id)
#         serializer.save(author=self.request.user, content_object=application)

# class ApplicationCommentListCreateView(ListCreateAPIView):
#     serializer_class = CommentSerializer
#     permission_classes = [IsAuthenticated]

#     # making a comment for given shelter
#     def perform_create(self, serializer):
#         application_id = self.kwargs['application_id']
#         shelter = get_object_or_404(ContentType, id=object_id)
#         print(object_id)
#         print(shelter)
#         serializer.save(author=self.request.user, object_id=object_id, content_type=shelter)

#     def get_queryset(self):
#         object_id = self.kwargs['object_id']
#         # print(object_id)
#         account_content_type = ContentType.objects.get_for_model(PetShelter)
#         petshelter_comments = Comment.objects.filter(content_type=account_content_type, object_id=object_id)
#         return petshelter_comments
