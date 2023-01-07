from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from user.serializers import UserSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .serializers import ProfileSerializer
from twitter.models import Profile


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # authentication_classes = [JWTAuthentication]
    # permission_classes = (IsAuthenticatedOrReadOnly,)

    def list(self, request, *args, **kwargs):
        # print("\n\n", self.request.user.id, "\n\n")
        queryset = Profile.objects.filter(
            user_id=request.user.id
        )  # user_id = 4 kamil249@mail.re

        serializer = ProfileSerializer(queryset, many=True)
        return Response(serializer.data)
