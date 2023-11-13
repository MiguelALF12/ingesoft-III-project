from rest_framework import serializers
from ..models.Incapacidad import Incapacidad


class IncapacidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incapacidad
        fields = "__all__"
