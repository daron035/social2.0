from django.db import models
from django.conf import settings


class PrivateChatRoom(models.Model):
    user_1 = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user_1"
    )
    user_2 = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="user_2"
    )

    @property
    def room_group_name(self):
        """
        Returns the Channels Group name that sockets should subscribe to get sent messages as they are generated.
        """
        return f"PrivateChatRoom-{self.id}"


class Messages(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    room = models.ForeignKey(
        PrivateChatRoom, on_delete=models.CASCADE, related_name="messages"
    )
    body = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("timestamp",)
