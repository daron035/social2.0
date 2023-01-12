from django.http import HttpResponse
from django.shortcuts import redirect, render
from rest_framework import status, viewsets
from rest_framework.response import Response
from django.contrib.auth import login, get_user_model
from django.views.decorators.http import require_http_methods
import json

from chat.utils import find_or_create_private_chat

from .serializers import ProfileSerializer
from twitter.models import Profile
from .models import PrivateChatRoom, Messages


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    def list(self, request, *args, **kwargs):
        queryset = Profile.objects.filter(user_id=request.user.id)
        serializer = ProfileSerializer(queryset, many=True)
        return Response(serializer.data)


def to_conversation(request):
    """Force authenticate with 'username' field from axios.get params
    cred: email='kamil249@mail.ru' password='nbuksddnvi43434'"""
    username = request.GET.copy()["user"]
    try:
        user = get_user_model().objects.get(username=username)
    except:
        return HttpResponse(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    user.backend = "django.contrib.auth.backends.ModelBackend"
    login(request, user)
    return redirect("index")


def index(request):
    # profile = Profile.objects.get(user=request.user)
    profile = Profile.objects.all()
    return render(request, "chat/index.html", {"profile": profile})


@require_http_methods(["GET"])
def create_or_return_private_chat_room(request, pk):
    from_user = request.user
    payload = {}
    if from_user.is_authenticated:
        try:
            to_user = get_user_model().objects.get(pk=pk)
            chat = find_or_create_private_chat(from_user, to_user)
            payload["response"] = "Successfully got the chat."
            payload["chatroom_id"] = chat.pk
            return redirect("chat_room", chat.pk)
        except Exception as e:
            payload["response"] = "Unable to start a chat with that user."
            print(e)
    else:
        payload["response"] = "Your can't start a chat if you are not authenticated"

    return HttpResponse(json.dumps(payload), content_type="application/json")


def chat_room(request, room):
    room = PrivateChatRoom.objects.get(id=room)
    username = request.user.username
    messages = Messages.objects.filter(room=room)[0:25]
    profile = Profile.objects.all()

    return render(
        request,
        "chat/chat_room.html",
        {
            "room": room,
            "username": username,
            "messages": messages,
            "profile": profile,
        },
    )
