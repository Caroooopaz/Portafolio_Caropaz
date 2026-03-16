from django.shortcuts import get_object_or_404
from .models import Proyecto
from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import ProyectoSerializer, UserSerializer

class UserRegistrationView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProyectoViewSet(viewsets.ModelViewSet):
    serializer_class = ProyectoSerializer
    
    def get_permissions(self):
        """
        - GET (list, retrieve): Permitir a cualquiera ver el portafolio
        - POST, PUT, DELETE: Exigir que el usuario esté autenticado
        """
        if self.action in ['list', 'retrieve']:
            permission_classes = [permissions.AllowAny]
        else:
            permission_classes = [permissions.IsAuthenticated]
        return [permission() for permission in permission_classes]
    
    def get_queryset(self):
        """
        Si se especifica username por parametro, filtrar por ese usuario.
        Sirve para el portafolio público de un usuario específico.
        """
        queryset = Proyecto.objects.all()
        username = self.request.query_params.get('username')
        if username:
            queryset = queryset.filter(user__username=username)
        return queryset

    def perform_create(self, serializer):
        """
        Al crear un proyecto, guardar automáticamente al usuario que hizo la petición como dueño.
        """
        serializer.save(user=self.request.user)