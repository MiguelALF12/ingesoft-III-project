from django.db import models
from .TipoEntidad import TipoEntidad


class EntidadSalud(models.Model):
    nombre = models.CharField(max_length=30)
    tipo = models.ForeignKey(
        TipoEntidad, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def as_object(self) -> dict:
        EntidadSalud_as_object = {
            "id": self.id,
            "nombre": self.nombre,
            "tipo": self.tipo,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }
        return EntidadSalud_as_object

    def __str__(self):
        return str(self.id) + " " + self.nombre
