from django.urls import path
from .views import ShelterCommentListCreateView, ApplicationCommentListCreateView

# comments/ prefixes all the following urls
app_name='comments'
urlpatterns = [
    path('shelters/<int:shelter_id>', ShelterCommentListCreateView.as_view()),
    path('applications/<int:application_id>', ApplicationCommentListCreateView.as_view()),
]