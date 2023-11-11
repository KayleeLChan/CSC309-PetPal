from django.db import models
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Comment(models.Model):
    text = models.TextField()
    creation_time = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='comments', null=True) 
    # if user that comments is deleted, it will reflect that user has been deleted

    # comment id is the django generated object ID
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField() # id of object this comment references to (i.e. shelter user or application)
    content_object = GenericForeignKey('content_type', 'object_id')

    def __str__(self):
        return f"{self.author} at {self.creation_time}: {self.text}"



