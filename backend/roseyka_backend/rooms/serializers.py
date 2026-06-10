from rest_framework import serializers

from .models import Room, RoomImage


class RoomImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomImage
        fields = ["id", "image"]

class RoomSerializer(serializers.ModelSerializer):
    images = RoomImageSerializer(many=True, read_only=True)

    class Meta:
        model = Room
        fields = [
            'id', 'slug', 'title', 'subtitle_page', 'subtitle_card', 'description_card',
            'description_page', 'price', 'main_image', 
            'conditioner', 'tv', 'shower', 'furniture', 'fridge', 'images'
        ]
