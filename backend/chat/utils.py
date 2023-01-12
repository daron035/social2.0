from .models import PrivateChatRoom


def find_or_create_private_chat(user_1, user_2):
    try:
        chat = PrivateChatRoom.objects.get(user_1=user_1, user_2=user_2)
    except PrivateChatRoom.DoesNotExist:
        try:
            chat = PrivateChatRoom.objects.get(user_1=user_2, user_2=user_1)
        except PrivateChatRoom.DoesNotExist:
            chat = PrivateChatRoom.objects.create(user_1=user_1, user_2=user_2)
            chat.save()
    return chat
