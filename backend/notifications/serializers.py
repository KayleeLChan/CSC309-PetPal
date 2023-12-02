from rest_framework.serializers import ModelSerializer, DateTimeField, ReadOnlyField
from .models import Notification

class NotificationSerializer(ModelSerializer): 
    creation_time = DateTimeField(read_only=True)
    notifier_username = ReadOnlyField(source='notifier.username')
   
    class Meta:
        model = Notification
        fields = '__all__'

