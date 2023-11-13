from django.db import models
from .Empleado import Empleado
from .TipoIncapacidad import TipoIncapacidad
from .EntidadSalud import EntidadSalud


class Incapacidad(models.Model):
    cedula_empleado = models.ForeignKey(
        Empleado, on_delete=models.CASCADE, to_field='cedula', null=True)
    tipo_incapacidad = models.ForeignKey(
        TipoIncapacidad, on_delete=models.CASCADE)
    entidad = models.ForeignKey(
        EntidadSalud, on_delete=models.CASCADE, null=True)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def as_object(self) -> dict:
        Incapacidad_as_object = {
            "id": self.id,
            "cedula_empleado": self.cedula_empleado.cedula,
            "tipo_incapacidad": self.tipo_incapacidad.tipo,
            "fecha_inicio": self.fecha_inicio,
            "fecha_fin": self.fecha_fin,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
        return Incapacidad_as_object

    def __str__(self):
        return str(self.id) + "-" + str(self.cedula_empleado) + "-" + str(self.tipo_incapacidad)
