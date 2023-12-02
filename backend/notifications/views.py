from django.shortcuts import get_object_or_404
from django.core.exceptions import PermissionDenied
from rest_framework.generics import ListAPIView, RetrieveDestroyAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
from .serializers import NotificationSerializer
from .models import Notification

# Create your views here.
class StandardResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 10

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
    
class NotificationRetrieveDestroy(RetrieveDestroyAPIView):
    serializer_class = NotificationSerializer

    def get_object(self):
        notification = get_object_or_404(Notification, pk=self.kwargs['pk'])
        if notification.recipient != self.request.user:
            raise PermissionDenied("You do not have access to this notification")
        return notification

    def to_representation(self, instance):
        return {"link": instance.link}

    def retrieve(self, request, *a, **k):
        notification = self.get_object()
        link = self.to_representation(notification)
        notification.is_read = True
        notification.save()
        return Response(link)