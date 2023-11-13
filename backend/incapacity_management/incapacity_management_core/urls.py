"""
Este codigo genera todas las rutas GET, POST, PUT, DELETE.

routers.DefaultRouter() - se generan ruta del siguiente estilo: https://www.django-rest-framework.org/api-guide/routers/#defaultrouter
router.register() - registra las rutas para un modelo especifico, y a partir de este se generan rutas
"""
from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

from .viewspkg.Documento import DocumentoViewSet
from .viewspkg.Empleado import EmpleadoViewSet
from .viewspkg.EntidadSalud import EntidadSaludViewSet
from .viewspkg.Incapacidad import IncapacidadViewSet
from .viewspkg.TipoEntidad import TipoEntidadViewSet
from .viewspkg.TipoIncapacidad import TipoIncapacidadViewSet


router = routers.DefaultRouter()
router.register(r'documentos', DocumentoViewSet, 'documentos')
router.register(r'empleados', EmpleadoViewSet, 'empleados')
router.register(r'entidadsalud', EntidadSaludViewSet, 'entidadsalud')
router.register(r'incapacidades', IncapacidadViewSet, 'incapacidades')
router.register(r'tipoentidad', TipoEntidadViewSet, 'tipoentidad')
router.register(r'tipoincapacidad', TipoIncapacidadViewSet, 'tipoincapacidad')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Documentación API gestión de incapacidades"))
]
