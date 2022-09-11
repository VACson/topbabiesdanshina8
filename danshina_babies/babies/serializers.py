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


class BabyInputSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(
        max_length=None,
        use_url=True
    )

    class Meta:
        model = Baby
        fields = (
            "name",
            "description",
            "image",
            "telegram_username"
        )

    def create(self, validated_data):
        return Baby.objects.create(**validated_data)
