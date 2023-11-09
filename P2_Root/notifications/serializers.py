from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Notification

class NotificationSerializer(ModelSerializer): 
    creation_time = DateTimeField(read_only=True)
   
    class Meta:
        model = Notification
        fields = '__all__'

