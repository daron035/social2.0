from rest_framework import serializers
from django.utils.timezone import now


from .models import Images, Posts
from user.serializers import UserSerializer


class ImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Images
        fields = ("id", "post_id", "image")


class PostsSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    images = ImagesSerializer(many=True, read_only=True)
    uploaded_images = serializers.ListField(
        required=False,
        child=serializers.ImageField(
            max_length=1000000, allow_empty_file=True, use_url=False
        ),
        write_only=True,
    )
    hours_since_joined = serializers.SerializerMethodField()

    class Meta:
        model = Posts
        fields = (
            "id",
            "user",
            "body",
            "created_at",
            "hours_since_joined",
            "image",
            "images",
            "uploaded_images",
        )

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

    def get_hours_since_joined(self, obj):
        """timedelta Objects¶"""
        return ((now() - obj.created_at).seconds) // 3600
