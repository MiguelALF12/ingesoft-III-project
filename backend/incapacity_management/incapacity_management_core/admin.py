from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Empleado)
admin.site.register(Documento)
admin.site.register(TipoEntidad)
admin.site.register(EntidadSalud)
admin.site.register(TipoIncapacidad)
admin.site.register(Incapacidad)
