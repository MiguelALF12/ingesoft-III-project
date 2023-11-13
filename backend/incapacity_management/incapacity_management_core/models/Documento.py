from django.db import models
from .Incapacidad import Incapacidad


class Documento(models.Model):
    incapacidad = models.ForeignKey(Incapacidad, on_delete=models.CASCADE)
    archivo = models.FileField(upload_to="incapacities")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return str(self.id) + " " + self.archivo.name
