from .models import Car
from rest_framework import viewsets
from .serializers import CarSerializer
from rest_framework.response import Response


class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

