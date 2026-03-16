#tipo de datos primitivos en python
#boolean
es_mayor_edad = True;
tengo_sueño = False;

# tipos numeros (int, float)
edad = 32
altura = 1.69

#texto (char, string)
nombre_mascota1 = "Loki"
nombre_mascota2 = "Neo Nuevo"

#tipo de dato compuesto/estructura de datos

#tuplas: tipo de dato inmutable (const), se escribe con () todos están separados por comas(,), se recomienda que vayan con comillas simples para distinguir de los string (') todas las tuplas empiezan en la posición 0
#tamaño es la cantidad de elementos
gato = ('Neo', 6, True)
print(gato[0])
#gato[0] = 'Loki' la tupla no permite reasignación del item

#listas: son mutables, se escriben con corchete, todos están separados por comas(,), se recomienda que vayan con comillas simples para distinguir de los string (') todas las listas empiezan en la posición 0, se le puede agregar información
#tienen funciones
#tamaño es la cantidad de elementos
lista_vacia = []
mascotas = ['Neo', 'Loki']
#print(mascotas[0])
mascotas[1] = 'Pancho'
#print(mascotas[1])
#mascotas[3] = 'Clara' #list assignment index out of range
#funciones append (agrega un elemento al final de la lista)
mascotas.append('Clara')
#print(mascotas[2])
#funcion pop (elimina un elemento)
mascotas.pop() #elimina el último
mascotas.pop(0) #elimina el elemento de la posición 0
#print(mascotas)

mis_gatos = mascotas
#print(mis_gatos) #['Pancho']
mascotas.append('Abogato')
#print(mascotas)
#print(mis_gatos) #['Pancho', 'Abogato'] la lista mis perros cambia porque mascotas y mis perros apuntan al mismo espacio de memoria #ejercitar otras funciones e investigar como se hacen copias de listas

#diccionarios: estructura de datos que almacena elementos en pares clave(k) : valor(v), son mutables, se asignan con llaves{}, múltiples tipos de datos cada valor se separa por valor, tienen funciones cuando se trabaja con diccionarios es muy similar a trabajar con JSON
diccionario_vacio = {}
dic_alumnos = {
    'alumno1' : {'nombre': 'Carolina', 'apellido' : 'Muñoz', 'edad' : 32}, #solo tengo 1 par clave valor (1 elemento)
    'alumno2' : {'nombre': 'Alexis', 'apellido' : 'Quezada', 'edad' : 32},
    'cantidad' : 30,
    'lista' : [2,4,6,8]
}

#si la key no existe, crea el par k:v, sino lo actualiza
#acceder al valor asociado a la clave/key (GET)
#print(dic_alumnos['alumno2']) #{'nombre': 'Alexis', 'apellido' : 'Quezada', 'edad' : 32}

#agregar k:v al diccionario (POST) 
dic_alumnos['nombre_curso'] = 'Los Pythonisos'
#print(dic_alumnos)

#eliminar par k:v
#dic_alumnos.pop() TypeError: pop expected at least 1 argument, got 0

valor_a_eliminar = dic_alumnos.pop('alumno2')
print(dic_alumnos)
print(valor_a_eliminar)

#tipo de dato que tiene la variable ->funcion type
print(type(dic_alumnos))
print(type(tengo_sueño))
print(type(mis_gatos))
print(type(gato))
print
print(len(dic_alumnos))
#print(len(tengo_sueño)) variables booleanas no tienen tamaño
print(len(mascotas))
print(len(gato))
print(len(nombre_mascota1))

#conversiones: cambiar tipo de dato (casteo)
#print("Hola,"+20) TypeError: can only concatenate str (not "int") to str

print("Hola,"+ str(20))

neto = 100
iva = "19"
#total = neto + int TypeError: unsupported operand type(s) for +: 'int' and 'str'
total = neto + int(iva)
print(total)

