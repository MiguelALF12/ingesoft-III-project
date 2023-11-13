from django.db import models


class Empleado(models.Model):

    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    cedula = models.CharField(max_length=10, unique=True)
    telefono = models.CharField(max_length=10)
    # TODO: Que departamentos definimos?
    departamento = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    @property
    def as_object(self) -> dict:
        empleado_as_object = {
            'id': self.id,
            'nombre': self.nombre,
            'apellido': self.apellido,
            'cedula': self.cedula,
            'telefono': self.telefono,
            'departamento': self.departamento,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
        return empleado_as_object

    def __str__(self):
        return f'{self.id}-{self.nombre}-{self.apellido}-{self.cedula}'
