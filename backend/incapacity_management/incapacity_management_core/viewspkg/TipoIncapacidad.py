from rest_framework import viewsets
from ..models.TipoIncapacidad import TipoIncapacidad
from ..serializers.TipoIncapacidad import TipoIncapacidadSerializer


class TipoIncapacidadViewSet(viewsets.ModelViewSet):
    queryset = TipoIncapacidad.objects.all()
    serializer_class = TipoIncapacidadSerializer
