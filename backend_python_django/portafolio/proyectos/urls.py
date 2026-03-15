from django.urls import path
from proyectos import views


urlpatterns = [
    path('', views.index_proyecto, name='index_proyecto'), #http://127.0.0.1:8000/proyectos
    path('crear/', views.crear_proyecto, name='crear_proyecto'),#http://127.0.0.1:8000/proyectos/crear
    path('editar/<int:id>', views.editar_proyecto, name='editar_proyecto'),#http://127.0.0.1:8000/proyectos/editar/id
    path('eliminar/<int:pk>', views.eliminar_proyecto, name='eliminar_proyecto'),#http://127.0.0.1:8000/proyectos/eliminar/pk
    
    
]