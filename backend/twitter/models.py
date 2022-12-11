from django.db import models
from django.conf import settings


class Posts(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name="posts", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to="images/%Y/%m/%d/", blank=True)
    body = models.CharField(max_length=225)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Posts"

    def time_admin(self):
        return f"{self.created_at:%d-%m-%Y %H:%M}"


class Images(models.Model):
    post = models.ForeignKey(Posts, related_name="images", on_delete=models.CASCADE)
    image = models.ImageField(blank=True, upload_to="images/%Y/%m/%d/")

    # def __str__(self):
    #     return 'id: %d' % (self.id)
    # def __str__(self):
    #     return 'images'
