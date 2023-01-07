from django.urls import include, path
from rest_framework import routers

from .views import ProfileViewSet


router_chat = routers.SimpleRouter()
# router_chat = routers.DefaultRouter()
router_chat.register(r"profiles", ProfileViewSet)
print("\n\n", router_chat.urls, "\n\n")

urlpatterns = [
    path("", include(router_chat.urls)),
    # path("profilelist/", ProfileViewSet.as_view({"get": "list"})),
    # path("profilelist/<int:pk>/", ProfileViewSet.as_view({"get": "retrieve"})),
]
