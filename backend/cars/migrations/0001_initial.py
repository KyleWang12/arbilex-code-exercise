# Generated by Django 4.1.3 on 2022-11-21 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('car_name', models.CharField(max_length=50)),
                ('date_of_listing', models.DateTimeField()),
                ('tag', models.CharField(max_length=50)),
                ('engine', models.CharField(max_length=50)),
                ('horsepower', models.IntegerField()),
                ('torque', models.IntegerField()),
                ('mph_0_60', models.FloatField()),
                ('bidding_status', models.CharField(max_length=50)),
                ('date_listing_ends', models.DateTimeField()),
            ],
        ),
    ]
