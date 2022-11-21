from django.db import models


class Car(models.Model):
    car_name = models.CharField(max_length=50)
    date_of_listing = models.DateField()
    tag = models.CharField(max_length=50)
    engine = models.CharField(max_length=50)
    horsepower = models.IntegerField()
    torque = models.IntegerField()
    mph_0_60 = models.FloatField()
    bidding_status = models.CharField(max_length=50)
    date_listing_ends = models.DateField()

    def __str__(self):
        return self.car_name
