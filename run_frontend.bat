@echo off
echo ==========================================
echo Iniciando Frontend (React + Vite)
echo ==========================================

cd frontend

:: Instalar dependencias si no existe node_modules
if not exist "node_modules\" (
    echo Instalando dependencias de frontend...
    npm install
)

echo Iniciando servidor de desarrollo...
npm run dev
