from django.urls import path
from .views import BlogCreateView, BlogCreateContentView, BlogDetailsView, BlogListView, BlogContentListView

app_name = 'blogs'
urlpatterns = [
    path('creation/', BlogCreateView.as_view(), name='make_blog'),  # to make a specific blog
    path('creation/<int:blog_id>/', BlogCreateContentView.as_view(), name='make_blog_content'),  # to make a specific blog
    path('<int:blog_id>/', BlogDetailsView.as_view(), name='blog'),  # to grab a specific blog
    path('content/<int:blog_id>/', BlogContentListView.as_view(), name='blog_content'),  # to grab a specific blog
    path('all/', BlogListView.as_view(), name='all_blogs'),  # to see ALL blogs in the database
]
