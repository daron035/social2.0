from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APITestCase, RequestsClient
from rest_framework import status
from rest_framework.authtoken.models import Token


class RegistrationTestCase(TestCase):
    def test_registration(self):
        content_type = "application/json"
        data = {
            "username": "root",
            "email": "root@mail.ru",
            "password": "skaldjfalksdjfaksldfjaksldj3232",
            "re_password": "skaldjfalksdjfaksldfjaksldj3232",
        }
        response = self.client.post("/api/auth/users/", data, content_type=content_type)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


# class ProfileViewSetTestCase(APITestCase):
#     list_url = reverse()
#     def setUp(self):
#
#         self.user = get_user_model().objects.create(username='root', password='some-strong-psw')
#         self.token = Token.objects.create(user=self.user)
#         self.api_authentication()
#
#     def api_authentication(self):
#         self.client.credentials(HTTP_AUTHOTIZATION='JWT ' + self.token)
