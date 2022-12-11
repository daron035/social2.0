from rest_framework import serializers

from .models import Images, Posts


class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ("id", "post_id", "image")


class PostsSerializer(serializers.ModelSerializer):
    images = ImagesSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        required=False,
        child=serializers.ImageField(
            max_length=1000000, allow_empty_file=True, use_url=False
        ),
        write_only=True,
    )

    class Meta:
        model = Posts
        fields = ("id", "body", "image", "created_at", "images", "uploaded_images")

    def create(self, validated_data):
        """Upload multiple image from 'uploaded_images' post request
        and add user to owner post"""
        user = self.context["request"].user
        if "uploaded_images" in validated_data.keys():
            uploaded_images = validated_data.pop("uploaded_images")
            post = Posts.objects.create(user=user, **validated_data)
            for i in uploaded_images:
                Images.objects.create(image=i, post=post)
        else:
            post = Posts.objects.create(user=user, **validated_data)
        return post
