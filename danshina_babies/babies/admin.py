from django.contrib import admin

from .models import Baby

admin.site.site_header = 'Babies Admin'


class BabyAdmin(admin.ModelAdmin):
    model = Baby
    extra = 1
    list_display = ("id",
                    "name",
                    "telegram_username",
                    "rating",
                    "is_confirmed",
                    )
    list_filter = ('is_confirmed',)
    readonly_fields = ('image_preview',)


admin.site.register(Baby, BabyAdmin)
