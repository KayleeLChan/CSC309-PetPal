from django.shortcuts import get_object_or_404
from rest_framework.generics import ListAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import NotificationSerializer
from .models import Notification

# Create your views here.
class UserNotificationsList(ListAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = NotificationSerializer

    def get_queryset(self):
        user = self.request.user
        filter_read = self.request.query_params.get('read', None)
        queryset = Notification.objects.filter(recipient=user).order_by("-creation_time")

        if filter_read:
            queryset = queryset.filter(is_read=False)

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