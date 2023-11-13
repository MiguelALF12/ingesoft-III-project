from rest_framework import viewsets
from ..models.Empleado import Empleado
from ..serializers.Empleado import EmpleadoSerializer


class EmpleadoViewSet(viewsets.ModelViewSet):
    queryset = Empleado.objects.all()
    serializer_class = EmpleadoSerializer
