from datetime import datetime
from django.test import TestCase, Client
from django.contrib.auth import get_user_model
from ..models import *


class PostsModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        cls.user = get_user_model().objects.create_user(
            username="root", email="root@mail.ru", password="1"
        )
        Posts.objects.create(body="post body", user=cls.user)

    def test_body_content(self):
        post = Posts.objects.get(id="1")
        expected_object_body = f"{post.body}"
        self.assertEqual(expected_object_body, "post body")

    # def setUp(self):
    #     self.client = Client()
    #     self.user = get_user_model().objects.create_user(
    #         username="root", email="root@mail.ru", password="1"
    #     )

    # def test_login(self):
    #     login = self.client.login(email="root@mail.ru", password="1")
    #     self.assertEqual(login)

    # @classmethod
    # def setUpTestData(cls):
    #     Posts.objects.create(body="post body", user=self.user)
    #
    # def test_body_content(self):
    #     post = Posts.objects.get(id="1")
    #     expected_object_body = f"{post.body}"
    #     self.assertEqual(expected_object_body, "post body")
