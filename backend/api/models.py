from djongo import models

# Create your models here.
class deal(models.Model):
    _id=models.ObjectIdField()
    title=models.CharField(max_length=400)
    price=models.CharField(max_length=400)