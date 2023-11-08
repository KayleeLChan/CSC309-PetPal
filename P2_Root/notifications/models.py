from django.db import models
from django.contrib.auth.models import User
from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType

class Notification(models.Model):
    NOTIF_TYPE_CHOICES = [
        ("comment", "Someone has commented on your shelter."),
        ("application", "Someone has commented on your application"),
    ]

    # Associated users that have access to the notification
    # TODO: Might have to change User to shelter/seeker model, depends, we'll see
    recipient = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='notifications_received')
    notifier = models.ForeignKey(User, on_delete=models.SET_NULL, related_name='notifications_sent')
    # Notification metadata
    creation_time = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False, verbose_name="read")
    content = models.CharField(max_length=1000)
    title = models.field(max_length=13, choices=NOTIF_TYPE_CHOICES)
    # Make a link that points to an associated model: either an application or a comment
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    link = GenericForeignKey("content_type", "object_id")

    def __str__(self):
        return f"{self.notifier} to {self.recipient}: {self.title}"