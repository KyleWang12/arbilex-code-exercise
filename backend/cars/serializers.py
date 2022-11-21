from .models import Car
from rest_framework import serializers


class CarSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Car
        fields = ('car_name', 'date_of_listing', 'tag', 'engine', 'horsepower', 'torque', 'mph_0_60', 'bidding_status', 'date_listing_ends')