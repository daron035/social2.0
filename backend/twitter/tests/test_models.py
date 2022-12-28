import io
import mock
from PIL import Image
from django.urls import reverse
from rest_framework import status
from django.core.files import File
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model
from django.core.files.uploadedfile import SimpleUploadedFile

from ..models import Posts, Images


class PostsModelTest(APITestCase):
    def setUp(self):
        """Создаем один пост с юзером и картинкой"""
        file_mock = mock.MagicMock(spec=File)
        file_mock.name = "photo.jpg"

        self.user = get_user_model().objects.create_user(
            username="root", email="root@mail.ru", password="1"
        )
        self.post_test1 = Posts.objects.create(
            body="post body", user=self.user, image=file_mock.name
        )
        Images.objects.create(post=self.post_test1, image=file_mock.name)

        image = io.BytesIO()
        Image.new(mode="RGB", size=(200, 200)).save(image, "JPEG")
        image.seek(0)
        image_file = SimpleUploadedFile("image.jpg", image.getvalue())

        self.data = {"body": "test post_body_2", "uploaded_images": image_file}

    def test_username(self):
        self.assertEqual(str(self.user), "root")

    def test_post(self):
        """Проверка полей поста (body, user)"""
        post = Posts.objects.get(id="1")
        expected_object_body = post.body
        expected_username = post.user.username
        expected_user_email = post.user.email
        self.assertEqual(expected_object_body, "post body")
        self.assertEqual(expected_username, "root")
        self.assertEqual(expected_user_email, "root@mail.ru")

    def test_posts_list(self):
        """Одна запись, одна картинка"""
        response = self.client.get(reverse("posts-list"))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(len(response.data[0]["images"]), 1)

    def test_post_detail(self):
        response = self.client.get(
            reverse("posts-detail", kwargs={"pk": self.post_test1.id})
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.json().get("body"), "post body")

    def test_post_detail_fail(self):
        response = self.client.get(reverse("posts-detail", kwargs={"pk": 60}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_post_create(self):
        """Отправляем POST запрос от созданного юзера (root) для создания поста с изображением"""
        user = get_user_model().objects.get(id=1)
        # client = APIClient()
        self.client.force_authenticate(user=user)
        response = self.client.post(
            reverse("upload_file"),
            self.data,
            format="multipart",
        )
        new_posts_image = Images.objects.all()
        self.assertEqual(len(new_posts_image), 2)  # проверка количества картинок
        self.assertEqual(
            new_posts_image[1].post.user.username, "root"
        )  # проверка username созданной картинки
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        res = self.client.get("/api/posts/2/")
        self.assertEqual(res.status_code, status.HTTP_200_OK)

    def test_post_images_pk(self):
        response = self.client.get("/api/post-images/1/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0]["post_id"], 1)

        response_2 = self.client.get("/api/post-images/2/")
        self.assertEqual(len(response_2.data), 0)
        
        # response_3 = self.client.get("/api/post-images/")
        # # self.assertEqual(len(response_3.data), 1)
        # print(response_3.data)