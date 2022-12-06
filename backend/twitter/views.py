from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import generics, viewsets

from .models import Posts, Images
from .serializers import ImagesSerializer, PostsSerializer


# @api_view()
# def test(request):
#     routes = ["klasjdfklsdj"]
#     return Response(routes)


# class ListPosts(generics.ListAPIView):
#     queryset = Posts.objects.all()
#     serializer_class = PostsSerializer


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer

    # @action(method=["get"], detail=False)
    # def images(self, request):
    #     images = Images.objects.filter()


class ImagesViewSet(generics.ListAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer

    def get_queryset(self):
        pk = self.kwargs.get("pk")

        if not pk:
            return Images.objects.all()    

        return Images.objects.filter(post_id=pk)

class ImagesRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer


class ImagesViewSett(viewsets.ModelViewSet):
    queryset = Images.objects.all()
    serializer_class = ImagesSerializer