#!/bin/bash

# --- BYPASS DE UNICODE PARA WINDOWS ---
# Redirigimos las carpetas de usuario a la raiz del proyecto para evitar la 'ó' de 'Muñoz'
export PYTHONUTF8=1
export PYTHONIOENCODING=utf-8
export PGCLIENTENCODING=UTF8

# Engañamos a Postgres para que no busque carpetas de usuario con tildes
export PGPASSFILE="NUL"
export PGSERVICEFILE="NUL"
export HOME="/c/caropaz/python-django/Portafolio_Caropaz"
export USERPROFILE="C:\\caropaz\\python-django\\Portafolio_Caropaz"
export APPDATA="C:\\caropaz\\python-django\\Portafolio_Caropaz\\venv"

# Forzar codificacion en la terminal
chcp.com 65001 > /dev/null 2>&1

echo "------------------------------------------"
echo "Iniciando Backend (Bypass de Unicode activo)"
echo "------------------------------------------"
(
    source venv/Scripts/activate
    cd backend
    python manage.py runserver
) &

# Iniciar Frontend
echo "------------------------------------------"
echo "Iniciando Frontend (React)"
echo "------------------------------------------"
(
    cd frontend
    npm run dev
) &

wait
