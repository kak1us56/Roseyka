from django.contrib import admin
from django.forms import BaseInlineFormSet
from django.utils.safestring import mark_safe
from ckeditor.widgets import CKEditorWidget

from .models import Room, RoomImage


class RoomImageInline(admin.TabularInline):
    model = RoomImage
    extra = 4
    fields = ['image', 'preview']
    readonly_fields = ['preview']

    def preview(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" style="max-height: 100px; border-radius: 4px"; />')


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ["title", "price", "id"]
    readonly_fields = ["slug",]

    inlines = [RoomImageInline]
