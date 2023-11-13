from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from django.http import FileResponse
from ..models.Documento import Documento
from ..models.Incapacidad import Incapacidad
from ..serializers.Documento import DocumentoSerializer

from ..utilities.file import zipFiles


class DocumentoViewSet(viewsets.ModelViewSet):
    queryset = Documento.objects.all()
    serializer_class = DocumentoSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    def create(self, request):
        print("Data received in /create docs: ", request.data)
        files = request.data
        belongsToIncapacidad = files['incapacidad']
        incapacity = Incapacidad.objects.get(
            id=belongsToIncapacidad)
        file = list(files.items())[1]
        print("results after search: ", incapacity, file)
        serializer = self.get_serializer(
            data={"incapacidad": incapacity.id, 'archivo': file[1]})
        if serializer.is_valid():
            serializer.save()
            return Response(data={}, status=status.HTTP_201_CREATED)
        return Response(data={}, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True)
    def documentsbyemployee(self, request, pk=None):
        incapacities_by_user = Incapacidad.objects.filter(cedula_empleado=pk)
        documents = []
        for incapacity in incapacities_by_user:
            documentsByIncapacity = Documento.objects.filter(
                incapacidad=incapacity.id)
            for document in documentsByIncapacity:
                documents.append(document.archivo)
        print("Documents per user incapacity: User: ",
              pk, "Documents: ", documents)

        filesInZip = zipFiles(documents)
        filesInZip.seek(0)
        print("\n\n")
        return FileResponse(filesInZip, as_attachment=True)

    def post(self, request, format=None):
        uploadedFile = request.FILES['file']
        filename = '/tmp/myfile'
        with open(filename, 'wb+') as temp_file:
            for chunk in uploadedFile.chunks():
                temp_file.write(chunk)
        temp_file.close()
