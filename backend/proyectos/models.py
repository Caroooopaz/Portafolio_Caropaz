from django.db import models
from django.contrib.auth.models import User

# Create your models here. (el modelo es la representación de nuestra tabla en codigo)

class Proyecto(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='proyectos', null=True, blank=True)
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)
    url = models.CharField(max_length=100)
    #fecha_creacion = models.DateTimeField(auto_now_add=True)
    #activo = models.BooleanField(default=True)
    

    
    
