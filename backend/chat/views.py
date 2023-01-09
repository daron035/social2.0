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

    def list(self, request, *args, **kwargs):
        queryset = Profile.objects.filter(user_id=request.user.id)
        serializer = ProfileSerializer(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data)
