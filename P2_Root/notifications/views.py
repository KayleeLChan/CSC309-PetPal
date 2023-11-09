from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .serializers import NotificationSerializer
from .models import Notification

# Create your views here.
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 30

class UserNotificationsList(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotificationSerializer
    pagination_class = StandardResultsSetPagination

    def get_queryset(self):
        user = self.request.user
        filter_read = self.request.query_params.get('filter', None)
        if filter_read:
            filter_read = filter_read.lower()
        queryset = Notification.objects.filter(recipient=user).order_by("-creation_time")

        # Filter queryset to only contain unread notifications
        if filter_read == 'unread':
            queryset = queryset.filter(is_read=False)
        elif filter_read == 'read':
            queryset = queryset.filter(is_read=True)

        return queryset
    
class NotificationDeleteView(DestroyAPIView):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer
    
    def get_object(self):
        return get_object_or_404(Notification, pk=self.kwargs['pk'], recipient=self.request.user)
    
class NotificationRetrieve(RetrieveAPIView):
    serializer_class = NotificationSerializer

    def get_object(self):
        return get_object_or_404(Notification, pk=self.kwargs['pk'], recipient=self.request.user)

    def to_representation(self, instance):
        return {"link": instance.link}

    def retrieve(self, request, *a, **k):
        notification = self.get_object()
        link = self.to_representation(notification)
        # TODO: Double check that is_read bool should be updated here
        notification.is_read = True
        notification.save()
        return Response(link)