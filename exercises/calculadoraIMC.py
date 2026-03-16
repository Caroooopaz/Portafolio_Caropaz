def calcular_imc():
    print("Calculadora de IMC (Índice de Masa Corporal)")
    peso = float(input("Ingrese su peso en kilogramos: "))
    altura = float(input("Ingrese su altura en metros: "))
    
    imc = peso / (altura ** 2)
    
    print(f"\nSu IMC es: {imc:.2f}")
    
    # Clasificación según la OMS
    if imc < 18.5:
        print("Clasificación: Bajo peso")
    elif imc < 25:
        print("Clasificación: Peso normal")
    elif imc < 30:
        print("Clasificación: Sobrepeso")
    else:
        print("Clasificación: Obesidad")

# Ejecutar la calculadora
calcular_imc()