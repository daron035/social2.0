from django.contrib import admin
from django.utils.safestring import mark_safe
from django import forms
from .models import *


class ImagesInline(admin.TabularInline):
    model = Images
    extra = 0
    readonly_fields = ("get_img",)

    def get_img(self, obj):
        if obj.image:
            return mark_safe(f'<img src={ obj.image.url } width="150" >')


@admin.register(Posts)
class PostsAdmin(admin.ModelAdmin):
    list_display = ("id", "body", "created_at", "get_img")
    readonly_fields = ("get_img",)
    inlines = [ImagesInline]

    def get_img(self, obj):
        if obj.image:
            return mark_safe(f'<img src={ obj.image.url } width="150" >')

    get_img.short_description = "image"
