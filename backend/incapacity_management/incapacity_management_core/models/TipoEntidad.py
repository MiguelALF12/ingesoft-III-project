from django.db import models


class TipoEntidad(models.Model):
    EPS = "EPS"
    ARL = "ARL"
    TIPOS = [
        (EPS, "EPS"),
        (ARL, "ARL")
    ]
    tipo = models.CharField(max_length=30, choices=TIPOS)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return str(self.id) + " " + self.tipo
