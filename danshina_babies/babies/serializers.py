from rest_framework import serializers

from .models import Baby


class BabySerializer(serializers.Serializer):
    class Meta:
        model = Baby
        fields = (
            "id",
            "is_confirmed",
            "description",
            "rating",
            "get_image",
            "telegram_id"
        )