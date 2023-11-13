from rest_framework import viewsets
from ..models.TipoEntidad import TipoEntidad
from ..serializers.TipoEntidad import TipoEntidadSerializer


class TipoEntidadViewSet(viewsets.ModelViewSet):
    queryset = TipoEntidad.objects.all()
    serializer_class = TipoEntidadSerializer
