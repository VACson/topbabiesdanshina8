from rest_framework import serializers

from .models import Baby


class BabySerializer(serializers.ModelSerializer):
    class Meta:
        model = Baby
        fields = (
            "id",
            "name",
            "is_confirmed",
            "description",
            "rating",
            "get_image",
            "telegram_username"
        )