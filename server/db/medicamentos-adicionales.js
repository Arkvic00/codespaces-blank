/**
 * MEDICAMENTOS ADICIONALES PARA EXPANDIR LA BASE DE DATOS
 * 
 * Instrucciones de uso:
 * 1. Estos medicamentos están listos para ser agregados a medicamentos-data.js
 * 2. Agregar al final del array DB_MEDICAMENTOS
 * 3. Mantener la estructura JSON consistente
 * 4. Validar con: POST /api/medicamentos/validar
 */

export const MEDICAMENTOS_ADICIONALES = [
  {
    "id": "dexametasona",
    "color": "#f97316",
    "meta_data": {
      "nombre_generico": "Dexametasona",
      "nombres_comerciales": ["Dexavet", "Vefadex", "Dexason"],
      "grupo_farmacologico": "Corticosteroide, glucocorticoide de acción prolongada",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Corticosteroide sintetizado con acción prolongada (30-48 horas). Amplio uso en emergencias y terapias inflamatorias.",
      "bibliografia": "Farmacología Veterinaria Clínica"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Efecto antiinflamatorio potente",
        "Acción inmunosupresora",
        "Efectos hemáticos y vasoactivos",
        "Dosis altas en shock y edema cerebral"
      ],
      "usos_principales": "Shock, edema cerebral, reacciones alérgicas severas, inflamación, inmunosupresión selectiva."
    },
    "informacion_cliente": [
      "Medicamento de uso puntual, no crónico sin supervisión",
      "Puede aumentar el apetito y la sed",
      "Vigilar cambios conductuales",
      "No interrumpir abruptamente tratamientos prolongados"
    ],
    "monitoreo_paciente": [
      "Glucosa sérica",
      "Función renal",
      "Presión arterial",
      "Signos de infección (inmunosupresión)"
    ],
    "interferencia_laboratorio": [
      "Aumenta glucosa sérica",
      "Leucocitosis",
      "Linfopenia"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Clínica", "autor": "Dra. S. Morales", "edicion": "6ª", "pagina": "540-560", "nota": "Corticosteroides en veterinaria." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Shock / Emergencia",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 20, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        },
        {
          "indicacion": "Antiinflamatorio",
          "vias": ["IV", "IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.5, "dosis_min": 0.25, "dosis_max": 1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12-24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        }
      ],
      "gato": [
        {
          "indicacion": "Antiinflamatorio",
          "vias": ["IV", "IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.5, "dosis_min": 0.25, "dosis_max": 1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12-24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        }
      ],
      "caballo": [
        {
          "indicacion": "Shock / Trauma",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 4, "dosis_min": 2, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        }
      ],
      "bovino": [
        {
          "indicacion": "Cetosis, shock",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.5, "dosis_min": 0.1, "dosis_max": 1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12-24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Infecciones bacterianas no tratadas", "Diabetes mal controlada"],
      "precauciones": ["Osteoporosis", "Úlcera gastrointestinal", "Insuficiencia renal"],
      "efectos_adversos": ["Poliuria", "Polidipsia", "Inmunosupresión", "Hiperglucemia"],
      "sobredosis": { "signos": ["Signos de shock inverso", "Hiperglucemia severa"], "tratamiento": "Soporte sintomático." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista de receptores glucocorticoides, inhibición de mediadores inflamatorios.",
      "farmacocinetica": "Vida media: 24-48 horas; unión proteica alta (>90%); metabolismo hepático."
    },
    "presentaciones_comerciales": [
      { "tipo": "Vial inyectable IV/IM", "concentracion_texto": "2 mg/ml", "valor_concentracion": 2, "unidad_concentracion": "mg/ml" },
      { "tipo": "Vial inyectable IV/IM", "concentracion_texto": "4 mg/ml", "valor_concentracion": 4, "unidad_concentracion": "mg/ml" }
    ]
  },
  {
    "id": "propofol",
    "color": "#a78bfa",
    "meta_data": {
      "nombre_generico": "Propofol",
      "nombres_comerciales": ["Diprivan", "Propovet", "Propoven"],
      "grupo_farmacologico": "Anestésico IV, hipnótico",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Anestésico IV de acción rápida e inducción suave. Recuperación rápida y sin efectos residuales.",
      "bibliografia": "Manual de Anestesia Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inducción anestésica rápida (30-60 segundos)",
        "Recuperación rápida y limpia",
        "Depresión respiratoria y cardiovascular moderada",
        "Permite entubación endotraqueal suave"
      ],
      "usos_principales": "Inducción anestésica, sedación profunda, mantenimiento de anestesia general."
    },
    "informacion_cliente": [
      "Medicamento de uso EXCLUSIVO en clínica veterinaria",
      "Requiere monitoreo constante",
      "Apnea frecuente, tener reanimación disponible",
      "Contraindicado en animales con problemas cardiacos previos"
    ],
    "monitoreo_paciente": [
      "Frecuencia cardíaca",
      "Frecuencia respiratoria",
      "Presión arterial",
      "Saturación de oxígeno",
      "Reflejos anestésicos"
    ],
    "referencias": [
      { "titulo": "Manual de Anestesia Veterinaria", "autor": "Dr. L. Estrada", "edicion": "5ª", "pagina": "125-145", "nota": "Técnicas de inducción segura." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Inducción anestésica",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 6, "dosis_min": 4, "dosis_max": 8, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única lenta", "intervalo_horas": 0 },
          "notas_tecnicas": "Inyectar lentamente hasta pérdida del reflejo corneal.",
          "referencias": ["Manual de Anestesia Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Inducción anestésica",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 5, "dosis_min": 3, "dosis_max": 7, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única lenta", "intervalo_horas": 0 },
          "referencias": ["Manual de Anestesia Veterinaria"]
        }
      ],
      "ave": [
        {
          "indicacion": "Inducción anestésica",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 7, "dosis_max": 15, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única lenta", "intervalo_horas": 0 },
          "referencias": ["Manual de Anestesia Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Alergia a huevo (emulsión con lecitina de huevo)", "Cardiopatía severa", "Choque"],
      "precauciones": ["Problemas respiratorios", "Anemia severa", "Deshidratación"],
      "efectos_adversos": ["Apnea", "Hipotensión", "Bradicardia", "Flebitis"],
      "sobredosis": { "signos": ["Depresión respiratoria severa", "Apnea prolongada", "Colapso cardiovascular"], "tratamiento": "Ventilación manual, oxígeno, soporte cardiovascular." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista de receptores GABAa, depresor del SNC.",
      "farmacocinetica": "Vida media: 30-45 minutos; distribución rápida; metabolismo hepático rápido."
    },
    "presentaciones_comerciales": [
      { "tipo": "Emulsión IV 1%", "concentracion_texto": "10 mg/ml", "valor_concentracion": 10, "unidad_concentracion": "mg/ml" },
      { "tipo": "Emulsión IV 2%", "concentracion_texto": "20 mg/ml", "valor_concentracion": 20, "unidad_concentracion": "mg/ml" }
    ]
  },
  {
    "id": "midazolam",
    "color": "#60a5fa",
    "meta_data": {
      "nombre_generico": "Midazolam",
      "nombres_comerciales": ["Dormicum", "Sedavet", "Midvet"],
      "grupo_farmacologico": "Benzodiacepina, sedante, ansiolítico",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Sedante benzodiazepínico de acción rápida con antagonista disponible (flumazenil).",
      "bibliografia": "Manual de Farmacología Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Sedación rápida (2-3 minutos IV)",
        "Efecto reversible con flumazenil",
        "Depresión respiratoria leve-moderada",
        "Amnesia anterógrada"
      ],
      "usos_principales": "Sedación, premedicación anestésica, ansiolisis, convulsiones."
    },
    "informacion_cliente": [
      "Medicamento de uso EXCLUSIVO en clínica",
      "Puede revertirse si es necesario",
      "Monitoreo de respiración"
    ],
    "monitoreo_paciente": [
      "Nivel de sedación",
      "Frecuencia respiratoria",
      "Oxigenación"
    ],
    "referencias": [
      { "titulo": "Manual de Farmacología Veterinaria", "autor": "Dr. J. García", "edicion": "5ª", "pagina": "280-300", "nota": "Benzodiacepinas." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Sedación leve",
          "vias": ["IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.2, "dosis_min": 0.1, "dosis_max": 0.3, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 24 },
          "referencias": ["Manual de Farmacología Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Sedación leve",
          "vias": ["IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.2, "dosis_min": 0.1, "dosis_max": 0.3, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 24 },
          "referencias": ["Manual de Farmacología Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Glaucoma de ángulo cerrado", "Miastenia gravis"],
      "precauciones": ["Insuficiencia renal", "Insuficiencia hepática"],
      "efectos_adversos": ["Depresión respiratoria", "Hipotensión", "Confusión", "Amnesia"],
      "sobredosis": { "signos": ["Sedación profunda", "Apnea"], "tratamiento": "Flumazenil (antagonista benzodiacepínico), ventilación." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista de receptores GABAa.",
      "farmacocinetica": "Vida media: 90-150 minutos; metabolismo hepático."
    },
    "presentaciones_comerciales": [
      { "tipo": "Solución inyectable", "concentracion_texto": "5 mg/ml", "valor_concentracion": 5, "unidad_concentracion": "mg/ml" }
    ]
  }
];

console.log("📦 MEDICAMENTOS_ADICIONALES.length:", MEDICAMENTOS_ADICIONALES.length);
export default MEDICAMENTOS_ADICIONALES;
