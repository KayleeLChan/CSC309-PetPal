from django.db import models
from petpal.settings import AUTH_USER_MODEL as User
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

from django.db import models
from petpal.settings import AUTH_USER_MODEL as User
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Blog(models.Model):
    # only shelters can make blogs (very important cause we dont have to differentiate between seekers and shelters now)
    shelter = models.OneToOneField(User, on_delete=models.CASCADE, related_name='blog', null=True)
    # blog id is the django generated object ID (let it do its thing)

    blog_title = models.CharField(max_length=40, null=True) # new; might new more?
    creation_time = models.DateTimeField(auto_now_add=True)
    author_name = models.CharField(max_length=40, null=True)

    def __str__(self):
        return f"{self.author} at {self.creation_time}: {self.blog_title}"

class BlogContent(models.Model):
    text = models.TextField()  # Body of the blog content
    creation_time = models.DateTimeField(auto_now_add=True)
    blog = models.ForeignKey(Blog, on_delete=models.SET_NULL, related_name='blog_content', null=True) # most important thing
    author = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='author', null=True) # dont use

    def __str__(self):
        return f"Content for Blog {self.blog_id} created at {self.creation_time}"




