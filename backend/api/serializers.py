from rest_framework import serializers
from .models import *


class dealSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=400)
    price = serializers.CharField(max_length=400)
    
    def create(self,validate_data):
        return deals.objects.create(**validate_data)