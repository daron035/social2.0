from django.urls import include, path
from rest_framework import routers

from .views import *


router = routers.DefaultRouter()
router.register(r"posts", PostsViewSet)
# print("\n\n", router.urls, "\n\n")

urlpatterns = [
    path("", include(router.urls)),
    path("post-images/<int:pk>/", ImagesViewSet.as_view()),
    path("upload-file/", PostCreate.as_view(), name='upload_file'),
]
