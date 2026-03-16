#for i in range(0,10,1): 

#Recorrer Lista
mi_lista = ["aeiou",1234, True,'s']
mi_lista[0]#"aeiou"
print("tamaño de lista ",len(mi_lista))
for i in range(0,len(mi_lista)):#range(0,4)#{0,1,2,3}
       print(i,mi_lista[i])

print()
#foreach
for elemento in mi_lista:
    print(elemento)#True

##Diccionarios
mi_diccionario={"nombre":"Mijail", "edad":3}
mi_diccionario["nombre"]#"Mijail"
print("")
for key in mi_diccionario:
    print(key, mi_diccionario[key])

#1
for key in mi_diccionario.keys():
    print(key)
   
#2
for valor in mi_diccionario.values():
    print(valor)
   
#3
for k,v in mi_diccionario.items():
    print(k,v)


print("")
for v in  "Israel":
    if v == "a":
        break
    print(v)

"""Contador flexible : establece tres variables: lowNum, highNum, mult. Comenzando en lowNum y pasando por highNum, imprima solo los enteros que son múltiplos de mult. Por ejemplo, si lowNum = 2, highNum = 9 y mult = 3, el bucle debe imprimir 3, 6, 9 (en líneas sucesivas).""" 

