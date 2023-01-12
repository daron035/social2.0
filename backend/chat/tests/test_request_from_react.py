from django.urls import reverse
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from rest_framework import status


class ConversationTest(APITestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(username="root")

    def test_to_coversation(self):
        response = self.client.get(
            reverse("to_conversation"), {"user": "root"}, follow=True
        )
        self.assertEqual(self.user.is_authenticated, True)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertRedirects(response, "/conversation/")

    def test_to_coversation_fail(self):
        response = self.client.get(reverse("to_conversation"), {"user": "root_222"})
        self.assertEqual(response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)
