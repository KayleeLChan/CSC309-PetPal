from django.db import models
from petpal.settings import AUTH_USER_MODEL as User
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Blog(models.Model):
    # only shelters can make blogs (very important cause we dont have to differentiate between seekers and shelters now)

    # blog id is the django generated object ID (let it do its thing)

    blog_title = models.CharField(max_length=40, null=True) # new; might new more?
    text = models.TextField() # body of blog
    creation_time = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='blogs', null=True) 
    # if shelter user that made this article is deleted, it will reflect that user has been deleted
    author_name = models.CharField(max_length=40, null=True)
    # profilepic = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return f"{self.author} at {self.creation_time}: {self.blog_title}"

