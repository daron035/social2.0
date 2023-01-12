from django.urls import include, path
from rest_framework import routers

from .views import *


router_chat = routers.SimpleRouter()
router_chat.register(r"profiles", ProfileViewSet)
print("\n\n", router_chat.urls, "\n\n")

urlpatterns = [
    path("api/", include(router_chat.urls)),
    path("to_conversation/", to_conversation, name="to_conversation"),
    path("conversation/", index, name="index"),
    path("chat/<int:pk>/", create_or_return_private_chat_room, name="create_room"),
    path("chat-room/<int:room>/", chat_room, name="chat_room"),
]
