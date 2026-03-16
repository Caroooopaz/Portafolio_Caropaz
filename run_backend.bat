@echo off
echo ==========================================
echo Activando Entorno y Servidor Django
echo ==========================================

:: Forzar codificacion UTF-8 en la consola
chcp 65001 > nul

:: Forzar a Python a usar UTF-8
set PYTHONUTF8=1
set PYTHONIOENCODING=utf-8

:: Evitar que Python busque librerias en la carpeta de usuario (Andres Munoz)
set PYTHONNOUSERSITE=1

:: Verificar si el entorno venv existe
if not exist "venv\" (
    echo Creando entorno virtual...
    python -m venv venv
)

:: Activar el entorno
echo Activando venv...
call venv\Scripts\activate

:: Instalar dependencias DENTRO del venv
echo Verificando dependencias...
python -m pip install --upgrade pip
pip install -r backend/requirements.txt

cd backend
echo Aplicando migraciones...
python manage.py makemigrations
python manage.py migrate
echo Iniciando servidor en http://127.0.0.1:8000/
python manage.py runserver
