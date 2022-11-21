from django.http import HttpResponse
from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view()
def test(request):
    routes = ["klasjdfklsdj"]
    return Response(routes)
