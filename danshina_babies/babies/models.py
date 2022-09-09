from django.core.validators import MaxValueValidator, RegexValidator
from django.db import models
from io import BytesIO
from PIL import Image


class Baby(models.Model):
    id = models.AutoField(primary_key=True)
    is_confirmed = models.BooleanField(default=False)
    description = models.CharField(max_length=255, null=True, blank=True)
    rating = models.PositiveIntegerField(default=0, null=False)
    image = models.ImageField(upload_to='uploads/babies/', null=False)
    telegram_id = models.CharField(max_length=20, null=False)

    class Meta:
        db_table = 'baby'

    def __str__(self):
        return str(f'{self.id}')

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''
