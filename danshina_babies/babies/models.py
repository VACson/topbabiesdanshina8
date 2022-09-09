from django.core.validators import MaxValueValidator, RegexValidator
from django.db import models
from io import BytesIO
from PIL import Image
from pathlib import Path
from django.core.files.uploadedfile import InMemoryUploadedFile


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
        return str(f'id: {self.id}, rating: {self.rating}')

    def save(self, *args, **kwargs):
        super().save()
        img = Image.open(self.image.path)
        width, height = img.size

        '''if width > 300 and height > 300:
            # keep ratio but shrink down
            img.thumbnail((width, height))'''

        # check which one is smaller
        if height < width:
            # make square by cutting off equal amounts left and right
            left = (width - height) // 2
            right = (width + height) // 2
            top = 0
            bottom = height
            img = img.crop((left, top, right, bottom))

        elif width < height:
            # make square by cutting off bottom
            left = 0
            right = width
            top = 0
            bottom = width
            img = img.crop((left, top, right, bottom))

        '''if width > 300 and height > 300:
            img.thumbnail((300, 300))'''

        img.save(self.image.path)

    def get_image(self):
        if self.image:
            return 'http://127.0.0.1:8000' + self.image.url
        return ''
