from django.urls import path
# from .views import ShelterCommentListCreateView, ApplicationCommentListCreateView
from .views import CommentListCreateView

# comments/ prefixes all the following urls
app_name='comments'
urlpatterns = [
    path('<str:model>/<int:object_id>/', CommentListCreateView.as_view(), name='comment'),
]