from rest_framework import serializers
from ..models.TipoIncapacidad import TipoIncapacidad


class TipoIncapacidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoIncapacidad
        fields = "__all__"
