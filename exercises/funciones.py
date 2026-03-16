#funciones 
#palabra reservada def/pass
def nombre_funcion():
    pass
# sumar_dos_numeros() función no definida ya que está arriba de la función
#definicion de una f(x) con dos parámetros
#parámetros: variables 
#"scope: espacio en el que trabajan los datos, x ejemplo, el parámetro solo existe en la f(x)"
def sumar_dos_numeros(numero1,numero2): #numero1 = 2; numeror2 = 4 según el llamado a la f(x) que haremos luego
    #suma = numero1 + numero2
    #print(numero1 + numero2) #evalua la variable y su valor para imprimir en consola
    #print("hola clase!!")
    return numero1+numero2
"""obj de una f(x) reutilizar código para no usar tanto código. NO SIRVEN DE NADA SI NO SON LLAMADAS"""
#llamado a la f(x) (invocación)
sumar_dos_numeros(2,4)

retorno = sumar_dos_numeros(3,5)
#print(numero1) is not defined

#print("valor de retorno ", retorno)
print("valor de retorno ", sumar_dos_numeros(3,5))


###
def datos_personales(nombre='', edad=''):
    pass
    print("hola! ", nombre, "tu edad es: ", edad, "años")
    #interpolación
    print(f"Hola {nombre}, tu edad es: {edad} años")
    
datos_personales("Carolina" , 32)#Hola Carolina, tu edad es: 32 años

#datos_personales("Carolina") TypeError: datos_personales() missing 1 required positional argument: 'edad'

datos_personales() # Hola , tu edad es:  años
datos_personales(edad= 32) #(argumentos nombrados) Hola , tu edad es: 32 años
datos_personales(None, 4)

#terribles 13 ejercicios

### tipos de ordenamientos (que es la burbuja) INVESTIGAR
### operadores ternarios 
### Lambdas
### recursividad LEER SOBRE TODOS ESTOS CONCEPTOS









