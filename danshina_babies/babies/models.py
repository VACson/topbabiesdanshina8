from django.core.validators import MaxValueValidator, RegexValidator
from django.db import models
from io import BytesIO
from PIL import Image
from pathlib import Path
from django.core.files.uploadedfile import InMemoryUploadedFile
from django.utils.safestring import mark_safe


class Baby(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30, null=False)
    is_confirmed = models.BooleanField(default=False)
    description = models.CharField(max_length=255, null=True, blank=True)
    rating = models.PositiveIntegerField(default=0, null=False)
    image = models.ImageField(upload_to='uploads/babies/', null=False)
    telegram_username = models.CharField(max_length=20, null=False)

    class Meta:
        db_table = 'baby'

    def __str__(self):
        return str(f'id: {self.id}, {self.name}, {self.telegram_username}')

    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.image.path)
        width, height = img.size

        if height < width:
            left = (width - height) // 2
            right = (width + height) // 2
            top = 0
            bottom = height
            img = img.crop((left, top, right, bottom))

        elif width < height:
            left = 0
            right = width
            top = 0
            bottom = width
            img = img.crop((left, top, right, bottom))

        img.save(self.image.path)

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''

    def image_preview(self):
        return mark_safe(u'<img width="300" src="%s" />' % self.get_image())

    image_preview.short_description = 'Image preview'
    image_preview.allow_tags = True

