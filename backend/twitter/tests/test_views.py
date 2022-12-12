from datetime import datetime
from django.test import TestCase, Client
from rest_framework.test import APIRequestFactory
from django.core.files.uploadedfile import SimpleUploadedFile
from django.contrib.auth import get_user_model
from ..models import *


class PostsModelTest(TestCase):
    def setUp(self):
        self.client = Client()
        # factory = APIRequestFactory()

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

    def test_username(self):
        self.assertEqual(str(PostsModelTest.user), "root")

    # def test_imagesviewset_pk(self):
    #     # request = factory.get("/api/post-images/1/")
    #     # print(request)
    #     img_path = "test_img.jpg"
    #     img = SimpleUploadedFile(
    #         name="test_img.jpg",
    #         content=open(img_path, "rb").read(),
    #         content_type="image/jpeg",
    #     )
    #     image = Images.objects.create(image=img)
    #     response = self.client.get("/api/post-images/1/")
    #     print(response.json())

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
