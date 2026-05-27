from django.contrib import admin
from ckeditor.widgets import CKEditorWidget

from .models import Room

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ["title", "price", "id"]
    readonly_fields = ["slug",]
