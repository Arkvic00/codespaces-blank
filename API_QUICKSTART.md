# 🚀 API Quick Start - Dosis Perronas

## URLs
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3001
- **Health**: http://localhost:3001/health

---

## ⚡ Endpoints Rápidos

### 1. Listar Medicamentos
```bash
curl "http://localhost:3001/api/medicamentos?limit=5&offset=0"
```

### 2. Buscar Medicamento
```bash
# Buscar "amoxicilina" o "Precose"
curl "http://localhost:3001/api/medicamentos/buscar?q=amoxicilina"
```

### 3. Obtener Medicamento por ID
```bash
curl "http://localhost:3001/api/medicamentos/amoxicilina"
```

### 4. Resumen Clínico
```bash
curl "http://localhost:3001/api/medicamentos/acarbosa/resumen"
```

### 5. Medicamentos para Especie
```bash
# Perros
curl "http://localhost:3001/api/medicamentos/especie/perro?limit=10"

# Gatos
curl "http://localhost:3001/api/medicamentos/especie/gato?limit=10"

# Pájaros
curl "http://localhost:3001/api/medicamentos/especie/ave?limit=10"
```

### 6. Listar Especies
```bash
curl "http://localhost:3001/api/medicamentos/especies/listar"
```

### 7. Buscar por Grupo Farmacológico
```bash
curl "http://localhost:3001/api/medicamentos/grupo?grupo=Antibiótico"
```

### 8. Validar Medicamento
```bash
curl -X POST "http://localhost:3001/api/medicamentos/validar" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "test",
    "color": "#fff",
    "meta_data": {
      "nombre_generico": "Test",
      "nombres_comerciales": [],
      "grupo_farmacologico": "Test",
      "status_regulatorio": "Test"
    },
    "parametros_dosificacion": {
      "perro": []
    },
    "seguridad_y_alertas": {}
  }'
```

---

## 📊 Response Patterns

### Success
```json
{
  "success": true,
  "data": {
    ...
  }
}
```

### Error
```json
{
  "success": false,
  "error": {
    "status": 404,
    "message": "Not found"
  }
}
```

---

## 🔍 Especies Disponibles

```
perro, gato, caballo, bovino, cerdo, ovino_caprino, roedores,
conejo, mustelidos, cobaya, erizo, ave, reptil, primates, axolote
```

---

## 💻 Ejemplos JavaScript

### En Node.js
```javascript
const response = await fetch('http://localhost:3001/api/medicamentos/amoxicilina');
const data = await response.json();
console.log(data.data.meta_data.nombre_generico);
```

### En React (Ya integrado)
```javascript
import apiClient from '../services/apiClient';

// Buscar medicamentos
const result = await apiClient.buscarMedicamentos('amoxicilina', 20);
console.log(result.data.results);

// Obtener por especie
const perroMeds = await apiClient.getMedicamentosPorEspecie('perro');
console.log(perroMeds.data.medicamentos);
```

---

## 🧪 Test Rápido
```bash
# Verificar que API está UP
curl http://localhost:3001/health && echo "\n✅ API está running"

# Verificar que tiene datos
curl -s "http://localhost:3001/api/medicamentos?limit=1" | \
  jq '.data.data[0].meta_data.nombre_generico'
```

---

## 📈 Próximas Endpoints (Planeadas)

- `POST /api/medicamentos` - Crear medicamento (con auth)
- `PUT /api/medicamentos/:id` - Actualizar (con auth)
- `DELETE /api/medicamentos/:id` - Eliminar (con auth)
- `GET /api/pacientes` - Listar pacientes
- `POST /api/calculos` - Guardar cálculos

---

**Última actualización**: 2026-05-24
