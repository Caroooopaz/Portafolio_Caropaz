from django.shortcuts import render, redirect, get_object_or_404
from .models import Proyecto
#(controladores -> lógica)
def index_proyecto(request):
    #ORM (mapea los datos con su modelo/tabla busca la información en la base de datos)
    proyectos = Proyecto.objects.all()# select * from productos; trae todos los registros de la tabla "productos"
    context = {
        'lista_proyectos': proyectos
    }
    return render(request,'index.html', context)
 
def crear_proyecto(request):
    
    if request.method=='GET':
        return render(request, 'crear_proyecto.html')
    
    if request.method=='POST': #captura los datos
        nombre = request.POST['nombre']
        descripcion = request.POST.get('descripcion')
        url = request.POST.get('url')
        
        #instancia de la clase Proyecto
        proyecto = Proyecto(nombre = nombre, descripcion = descripcion, url= url)
        proyecto.save() #insert into proyectos (nombre, descripcion, url) values (...,...,...)
        return redirect ('index_proyecto')
        
        

def editar_proyecto(request, id):
    proyecto = get_object_or_404(Proyecto, pk=id)
    if request.method == 'POST' :    
        proyecto.nombre = request.POST['nombre']
        proyecto.descripcion = request.POST['descripcion']
        proyecto.url = request.POST['url']
        proyecto.save()
        return redirect ('index_proyecto')    
    else:
        context ={
            'proyecto' : proyecto
        }
        return render(request, 'editar_proyecto.html', context)

def eliminar_proyecto(request, pk):
    proyecto = get_object_or_404(Proyecto, pk=pk)
    proyecto.delete()
       
    return redirect ('index_proyecto')

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