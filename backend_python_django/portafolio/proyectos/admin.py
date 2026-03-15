from django.contrib import admin
from .models import Proyecto

# Register your models here.
@admin.register(Proyecto)
class ProyectoAdmin(admin.ModelAdmin):
    #columnas que quiero ver en la tabla
    list_display = ('nombre', 'descripcion', 'url')
    
    #agrego filtros laterales y buscador
    #list_filter = ('activo', 'fecha_creacion')
   # search_fields = ('nombre', 'proyecto__nombre')
    