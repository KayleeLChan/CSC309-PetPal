from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import Notification

class BaseStoreSerializer(ModelSerializer): 
    creation_time = DateTimeField(read_only=True)
    paginate_by = 7
   
    class Meta:
        model = Notification
        fields = '__all__'

