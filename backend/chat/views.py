from django.shortcuts import redirect, render
from rest_framework import viewsets
from rest_framework.response import Response
from django.conf import settings
from django.contrib.auth import login, get_user_model, logout

from .serializers import ProfileSerializer
from twitter.models import Profile
import json


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def list(self, request, *args, **kwargs):
        queryset = Profile.objects.filter(user_id=request.user.id)
        serializer = ProfileSerializer(queryset, many=True)
        print(serializer.data)
        return Response(serializer.data)


def to_conversation(request):
    """Force authenticate with 'username' field from axios.get params
    cred: email='kamil249@mail.ru' password='nbuksddnvi43434'"""
    username = request.GET.copy()["user"]
    a = request.GET.copy()
    print(a)
    user = get_user_model().objects.get(username=username)
    user.backend = "django.contrib.auth.backends.ModelBackend"
    login(request, user)
    return redirect("index")


def index(request):
    # profile = Profile.objects.get(user=request.user)
    profile = Profile.objects.all()
    return render(request, "chat/index.html", {"profile": profile})
