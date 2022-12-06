from django.urls import include, path
from rest_framework import routers

from .views import *


router = routers.DefaultRouter()
router.register(r"posts", PostsViewSet)
router.register(r"images", ImagesViewSett)

# urlpatterns = [path("posts/", ListPosts.as_view()), path("", include(router.urls))]
urlpatterns = [
    path("", include(router.urls)),
    path("post-images/<int:pk>/", ImagesViewSet.as_view()),
    # path("<int:pk>/", ImagesRetrieveAPIView.as_view()),
]
