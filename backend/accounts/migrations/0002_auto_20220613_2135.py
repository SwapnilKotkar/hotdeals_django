# Generated by Django 3.0.8 on 2022-06-13 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='useraccount',
            name='id',
            field=models.BigIntegerField(default=20220613213500),
        ),
    ]
