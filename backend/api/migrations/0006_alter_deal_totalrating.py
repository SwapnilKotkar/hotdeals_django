# Generated by Django 4.0.1 on 2022-05-20 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_deal_totalrating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='deal',
            name='totalRating',
            field=models.IntegerField(default=3),
        ),
    ]
