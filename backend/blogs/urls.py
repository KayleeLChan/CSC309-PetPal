from django.urls import path
from .views import BlogCreateView, BlogDetailsView, BlogListView

app_name = 'blogs'
urlpatterns = [
    path('/', BlogCreateView.as_view(), name='make_blog'),  # to make a specific blog
    path('<int:blog_id>/', BlogDetailsView.as_view(), name='blog'),  # to grab a specific blog
    path('all/', BlogListView.as_view(), name='all_blogs'),  # to see ALL blogs in the database
]
