from rest_framework import serializers
from ..models.TipoEntidad import TipoEntidad


class TipoEntidadSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoEntidad
        fields = "__all__"
