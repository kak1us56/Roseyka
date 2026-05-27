from django.shortcuts import render
from rest_framework import viewsets, routers, status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly

from .models import CarouselItem
from .serializer import CarouselItemSerializer


class CarouselItemViewset(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticatedOrReadOnly]
    serializer_class = CarouselItemSerializer
    queryset = CarouselItem.objects.all()

    def list(self, request: Request) -> Response:
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
router = routers.DefaultRouter()
router.register(r"carousel", CarouselItemViewset, basename="carousel")