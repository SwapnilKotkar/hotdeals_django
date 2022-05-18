from django.db import models

# Create your models here.
class deals(models.Model):
    title=models.CharField(max_length=400)
    price=models.CharField(max_length=400)