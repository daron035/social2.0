from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APITestCase


class ChannelsTest(TestCase):
    def setUp(self):
        self.user_1 = get_user_model().objects.create_user(
            username="root_111", email="root_111@mail.ru"
        )
        self.user_2 = get_user_model().objects.create_user(
            username="root_222", email="root_222@mail.ru"
        )

    def test_create_or_return_private_chat_room(self):
        c = Client()
        c.force_login(self.user_1)
        response = c.get("/chat/2/")
        a = response.json()["response"]
        self.assertEqual(a, "Successfully got the chat.")
        b = response.json()["chatroom_id"]
        self.assertEqual(b, 1)
