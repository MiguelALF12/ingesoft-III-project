from rest_framework import serializers
from ..models.EntidadSalud import EntidadSalud


class EntidadSaludSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntidadSalud
        fields = "__all__"
