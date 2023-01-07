from rest_framework import serializers
from user.serializers import UserSerializer

from twitter.models import Profile


class FriendsSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source="user.username")

    class Meta:
        model = Profile
        fields = ("username",)


class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    friends = FriendsSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = (
            "id",
            "user",
            "friends",
        )
