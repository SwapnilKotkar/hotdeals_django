from attr import field
from rest_framework import serializers
from .models import *


class dealSerializer(serializers.ModelSerializer):
    class Meta:
        model = deal
        fields = ('title', 'price')