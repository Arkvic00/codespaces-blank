# 📋 Dosis Perronas — Calculadora Veterinaria

Aplicación web para cálculo de dosificación de medicamentos veterinarios con soporte para múltiples especies, fluidoterapia, CRI y diluciones.

**Stack**: React 18 + Vite + Express.js + Node.js

---

## 🚀 Inicio Rápido

### Opción 1: Script Automático
```bash
chmod +x start.sh
./start.sh
```

### Opción 2: Manual (Dos Terminales)

**Terminal 1 - Backend**:
```bash
cd server
npm install
npm start
```

**Terminal 2 - Frontend**:
```bash
npm install
npm run dev
```

### URLs
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001

---

## ✨ Funcionalidades

### 🧮 Calculator
Cálculo preciso de dosis de medicamentos:
- Selección de medicamento y especie
- Cálculo automático por peso
- Múltiples vías de administración
- Frecuencias personalizables
- Favoritos y historial

### 📚 Vademecum
Base de datos completa de medicamentos:
- 8+ medicamentos con información clínica completa
- Filtrado por especie
- Búsqueda global
- Contraindicaciones y efectos adversos
- Imágenes personalizadas

### 💧 Fluidoterapia
Cálculo avanzado de IV:
- Mantenimiento + Déficit + Pérdidas
- Velocidad de infusión
- Gotas por minuto
- Duración de bolsa IV

### 💉 CRI
Infusión continua de medicamentos:
- Cálculo en µg/kg/min
- Volumen de medicamento a agregar
- Soporte para múltiples parámetros

### ⚗️ Diluciones
Cálculo de diluciones simples:
- Aplicación de C1V1 = C2V2

---

## 🗄️ Base de Datos

### Medicamentos (8+)
- Acarbosa • Acepromazina • Amoxicilina • Enrofloxacino
- Meloxicam • Dexametasona • Propofol • Midazolam

### Especies (15)
🐩 🐱 🐴 🐮 🐷 🐐 🐭 🐰 🦦 🐹 🦔 🦜 🦎 🐒 👾

---

## 🔌 API Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/medicamentos` | Lista paginada |
| GET | `/api/medicamentos/:id` | Medicamento específico |
| GET | `/api/medicamentos/buscar?q=term` | Búsqueda global |
| GET | `/api/medicamentos/especie/:id` | Por especie |
| GET | `/api/medicamentos/especies/listar` | Todas las especies |

📖 Documentación completa en [BACKEND_API.md](BACKEND_API.md)

---

## 📁 Estructura

```
/workspaces/codespaces-blank/
├── server/                    # Backend Express
│   ├── index.js              # Servidor principal
│   ├── routes/               # API endpoints
│   ├── db/                   # Base de datos
│   └── middleware/           # Middlewares
├── src/                       # Frontend React
│   ├── pages/                # Vistas principales
│   ├── components/           # Componentes reutilizables
│   ├── context/              # AppContext + API
│   ├── services/             # API Client
│   └── hooks/                # Custom hooks
├── BACKEND_API.md            # Documentación API
├── start.sh                  # Script de inicio
└── package.json
```

---

## 🛠️ Tech Stack

**Frontend**: React 18 • Vite • React Router • Lucide Icons
**Backend**: Express.js • Node.js • CORS • Compression

---

## ➕ Agregar Medicamentos

Ver ejemplos en `server/db/medicamentos-adicionales.js`

1. Preparar medicamento con estructura completa
2. Validar: `POST /api/medicamentos/validar`
3. Agregar a `server/db/medicamentos-data.js`
4. Reiniciar servidor

---

## 📝 Variables de Entorno

```env
# Frontend .env
VITE_API_URL=http://localhost:3001

# Backend (automático)
PORT=3001
```

---

## 🚀 Mejoras Implementadas

✅ Backend API profesional con Express
✅ Búsqueda indexada y paginación
✅ Validación de estructura de medicamentos
✅ Integración con AppContext
✅ CORS y compresión habilitada
✅ Error handling centralizado
✅ 8+ medicamentos veterinarios reales

---

## 📚 Documentación

- [BACKEND_API.md](BACKEND_API.md) - API endpoints y mejoras
- `.agent.md` - Especialista en farmacología veterinaria

---

## 🔐 Checklist Seguridad

- [ ] Validación de entrada en API
- [ ] Rate limiting
- [ ] HTTPS en producción
- [ ] Autenticación JWT
- [ ] SQL injection prevention (cuando use DB)
- [ ] CORS restricción

---

## 📊 Próximos Pasos

**Corto Plazo**: Base de datos real • Autenticación • Más medicamentos
**Mediano Plazo**: Exportar PDF • Historiales • Medicamentos personalizados
**Largo Plazo**: App móvil • Sincronización offline • Recomendaciones IA

---

**Status**: ✅ En desarrollo activo
**Última actualización**: 24/05/2026
