from django.contrib import admin

from .models import Baby

admin.site.site_header = 'Babies Admin'


class BabyAdmin(admin.ModelAdmin):
    model = Baby
    extra = 1


admin.site.register(Baby, BabyAdmin)
