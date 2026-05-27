from django.shortcuts import render
from rest_framework import routers, viewsets, status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from django.shortcuts import get_object_or_404

from .serializers import RoomSerializer
from .models import Room


class RoomAPIViewSet(viewsets.ModelViewSet):
    permission_classes = [AllowAny]
    serializer_class = RoomSerializer
    lookup_field = "slug"
    queryset = Room.objects.all()

    def list(self, request: Request) -> Response:
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data

        return Response(data=data, status=status.HTTP_200_OK)
    
    def retrieve(self, request: Request, slug=None) -> Response:
        queryset = Room.objects.prefetch_related('images').all()
        room = get_object_or_404(queryset, slug=slug)
        serializer = RoomSerializer(room)

        return Response(serializer.data, status=status.HTTP_200_OK)


router = routers.DefaultRouter()
router.register(f"rooms", RoomAPIViewSet, basename="rooms")
