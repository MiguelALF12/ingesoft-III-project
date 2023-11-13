from rest_framework import viewsets
from ..models.EntidadSalud import EntidadSalud
from ..serializers.EntidadSalud import EntidadSaludSerializer


class EntidadSaludViewSet(viewsets.ModelViewSet):
    queryset = EntidadSalud.objects.all()
    serializer_class = EntidadSaludSerializer
