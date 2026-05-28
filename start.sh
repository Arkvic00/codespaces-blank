#!/bin/bash

# Script para levantar toda la aplicación (Backend + Frontend)

echo "🚀 Iniciando Dosis Perronas..."
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    exit 1
fi

echo -e "${BLUE}📦 Instalando dependencias del backend...${NC}"
cd server
npm install --silent
BACKEND_PID=$!

echo -e "${BLUE}📦 Instalando dependencias del frontend...${NC}"
cd ..
npm install --silent

echo ""
echo -e "${GREEN}✅ Dependencias instaladas${NC}"
echo ""

# Iniciar backend en background
echo -e "${BLUE}▶ Iniciando Backend API (puerto 3001)...${NC}"
cd server
npm start &
BACKEND_PID=$!
cd ..

sleep 2

# Iniciar frontend
echo -e "${BLUE}▶ Iniciando Frontend (puerto 5173)...${NC}"
npm run dev &
FRONTEND_PID=$!

echo ""
echo -e "${GREEN}✅ Aplicación iniciada!${NC}"
echo ""
echo "📍 URLs:"
echo "   Backend API:  http://localhost:3001"
echo "   Frontend:     http://localhost:5173"
echo ""
echo "Presiona Ctrl+C para detener..."
echo ""

# Mantener script activo
wait
