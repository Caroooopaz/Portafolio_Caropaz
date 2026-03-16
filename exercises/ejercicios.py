"""Esta longitud, ese valor : escribe una función que acepte dos enteros como parámetros: tamaño y valor. La función debe crear y devolver una lista cuya longitud es igual al tamaño dado y cuyos valores son todos los valores dados.
Ejemplo: length_and_value (4,7) debería devolver [7,7,7,7]
Ejemplo: length_and_value (6,2) debería devolver [2,2,2,2,2,2]"""

def longitud_y_valor(tamanio, valor):
    lista = []
    for i in range(0,tamanio): #0,1,2,3
        lista.append(valor)
    return lista

#cuando se define el valor a un parámetro, todos a la derecha deben tener un valor asignado
resultado = longitud_y_valor(0,2)
print(resultado)

"""1. First Plus Length : crea una función que acepta una lista y devuelve la suma del primer valor de la lista más la longitud de la lista.
Ejemplo: first_plus_length ([1,2,3,4,5]) debería devolver 6 (primer valor: 1 + longitud: 5)
2. Valores mayores que el segundo : escribe una función que acepte una lista y crea una nueva lista que contenga solo los valores de la lista original que sean mayores que su segundo valor. Imprima cuántos valores son y luego devuelva la nueva lista. Si la lista tiene menos de 2 elementos, haga que la función devuelva False
Ejemplo: values_greater_than_second ([5,2,3,2,1,4]) debería imprimir 3 y devolver [5,3,4]
Ejemplo: values_greater_than_second ([3]) debería devolver False"""
