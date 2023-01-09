from django.http import request
from django.shortcuts import render


def index(request):
    return render(request, "index.html")


from rest_framework import generics, viewsets

from .models import Posts, Images
from .serializers import ImagesSerializer, PostsSerializer


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all().order_by("-id")
    serializer_class = PostsSerializer


class ImagesViewSet(generics.ListAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer

    def get_queryset(self):
        pk = self.kwargs.get("pk")
        return Images.objects.filter(post_id=pk)


class PostCreate(generics.CreateAPIView):
    serializer_class = PostsSerializer
