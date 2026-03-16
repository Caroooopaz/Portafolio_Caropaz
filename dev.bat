@echo off
echo ==========================================
echo Lanzador Global de Desarrollo - Portafolio
echo ==========================================

:: Abrir Backend en una nueva ventana
start cmd /k "run_backend.bat"

:: Abrir Frontend en una nueva ventana
start cmd /k "run_frontend.bat"

echo.
echo ==========================================
echo Backend y Frontend se estan iniciando...
echo Puedes cerrar esta ventana.
echo ==========================================
pause
