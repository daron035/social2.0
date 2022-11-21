from django.contrib import admin
from .models import *


class PostsAdmin(admin.ModelAdmin):
    list_display = ("id", "body", "image")


admin.site.register(Posts, PostsAdmin)
