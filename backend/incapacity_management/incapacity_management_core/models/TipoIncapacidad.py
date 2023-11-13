from django.db import models

# Create your models here.


class TipoIncapacidad(models.Model):
    GENERAL_SICKNESS = "ENFERMEDAD_GENERAL"
    ROAD_ACCIDENT = "ACCIDENTE_TRAFICO"
    WORK_ACCIDENT = "ACCIDENTE_LABORAL"
    MATERNITY_LICENSE = "LICENSIA_MATERNIDAD"
    PATERNITY_LICENSE = "LICENSIA_PATERNIDAD"
    DOCUMENTS = [
        (GENERAL_SICKNESS, "Enfermedad general"),
        (ROAD_ACCIDENT, "Accidente de tráfico"),
        (WORK_ACCIDENT, "Accidente laboral"),
        (MATERNITY_LICENSE, "Licencia de maternidad"),
        (PATERNITY_LICENSE, "Licencia de paternidad")
    ]
    tipo = models.CharField(max_length=30, choices=DOCUMENTS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return str(self.id) + " " + self.tipo
