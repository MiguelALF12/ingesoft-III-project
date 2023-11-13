from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework import status
from rest_framework.decorators import action
from ..models.Incapacidad import Incapacidad
from ..models.Documento import Documento
from ..serializers.Incapacidad import IncapacidadSerializer


class IncapacidadViewSet(viewsets.ModelViewSet):
    queryset = Incapacidad.objects.all()
    serializer_class = IncapacidadSerializer
    parser_classes = (MultiPartParser, FormParser, JSONParser)

    @action(detail=True)
    def incapacitiesbyuser(self, request, pk=None):
        """"
        Why these methods didnt work? -> 
        # incapacities = self.get_queryset().filter(cedula_empleado=pk)
        # # print(incapacities)
        # serializer = None

        # if len(incapacities) == 1:
        #     serializer = self.get_serializer(data=incapacities)
        # elif len(incapacities) > 1:
        #     serializer = self.get_serializer(incapacities, many=True)

        # if type(serializer) != None:
        #     if serializer.is_valid():
        #         print("Serializer is valid")
        #         return Response(serializer.data, status=status.HTTP_200_OK)
        #     else:
        #         print("serializer: ", serializer, "\n")
        #         print(serializer.errors)
        # else:
        #     print("There is no information to return")
        #     return Response(data={}, status=status.HTTP_200_OK)

        # filteredIncapacities = self.filter_queryset(incapacities)
        # # print(len(filteredIncapacities))
        # if len(filteredIncapacities) > 0:
        #     serializer = self.get_serializer(
        #         data=filteredIncapacities)
        #     if serializer.is_valid():
        #         return Response(serializer.data, status=status.HTTP_200_OK)
        #     else:
        #         print(serializer.errors)
        # else:
        """

        # Currently working
        """
        incapacities = self.get_queryset().filter(cedula_empleado=pk)
        serializer = self.get_serializer(data=incapacitiesAsObj, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        """
        incapacities = self.get_queryset().filter(cedula_empleado=pk)
        incapacitiesAsObj = []
        for incapacity in incapacities:
            incapacitiesAsObj.append(incapacity.as_object)

        # Search documents
        for incapacity in incapacitiesAsObj:
            documents = Documento.objects.filter(
                incapacidad=incapacity["id"])
            documentName = None
            for document in documents:
                documentName = document.archivo.name
            incapacity["documento"] = documentName.split("/")[-1].split(".")[0]
        return Response(data=incapacitiesAsObj, status=status.HTTP_200_OK)
