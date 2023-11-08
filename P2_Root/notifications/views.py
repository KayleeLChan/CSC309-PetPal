from django.shortcuts import render
from rest_framework.generics import ListAPIView

# Create your views here.
class UserNotificationsList(ListAPIView):
    serializer_class = PostSerializer
    model = serializer_class.Meta.model
    paginate_by = 100
    def get_queryset(self):
        poster_id = self.kwargs['poster_id']
        queryset = self.model.objects.filter(poster_id=poster_id)
        return queryset.order_by('-post_time')