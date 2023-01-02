import pytest


@pytest.mark.django_db
def test_profile_post_create(django_user_model):
    django_user_model.objects.create(
        username="test_username", email="email@mail.com", password="strong_3346_pass"
    )
    get_user = django_user_model.objects.get(id=1)
    assert django_user_model.objects.count() == 1
    assert str(get_user.profile) == "test_username"
    assert get_user.profile.user.username == "test_username"
