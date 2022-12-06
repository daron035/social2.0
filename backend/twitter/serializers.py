from rest_framework import serializers
from .models import Images, Posts


class PostsSerializer(serializers.ModelSerializer):
    # images = serializers.HyperlinkedRelatedField(many=True, read_only=True, view_name='images-detail')
    images = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Posts
        fields = ("id", "body", "image", "created_at", "images")


class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ("id", "post", "image")
        # fields = "__all__"
