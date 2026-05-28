export const SPECIES_LIST = [
    { id: 'perro', label: 'PERRO', icon: '🐩' },
    { id: 'gato', label: 'GATO', icon: '🐱' },
    { id: 'caballo', label: 'CABALLO', icon: '🐴' },
    { id: 'bovino', label: 'BOVINO', icon: '🐮' },
    { id: 'cerdo', label: 'CERDO', icon: '🐷' },
    { id: 'ovino_caprino', label: 'OVINO_CAPRINO', icon: '🐐' },
    { id: 'roedores', label: 'ROEDORES', icon: '🐭' },
    { id: 'conejo', label: 'CONEJO', icon: '🐰' },
    { id: 'mustelidos', label: 'MUSTÉLIDOS', icon: '🦦' },
    { id: 'cobaya', label: 'COBAYA', icon: '🐹' },
    { id: 'erizo', label: 'ERIZO', icon: '🦔' },
    { id: 'ave', label: 'AVE', icon: '🦜' },
    { id: 'reptil', label: 'REPTIL', icon: '🦎' },
    { id: 'primates', label: 'PRIMATES', icon: '🐒' },
    { id: 'axolote', label: 'AXOLOTE', icon: '👾' }
];

export const DB_MEDICAMENTOS = [
  {
    "id": "acarbosa",
    "color": "#f59e0b",
    "meta_data": {
      "nombre_generico": "Acarbosa",
      "nombres_comerciales": ["Precose", "Glucobay"],
      "grupo_farmacologico": "Agente antidiabético, inhibidor de la alfa-glucosidasa",
      "status_regulatorio": "Uso extra-label en perros y gatos; Aprobado por la FDA para humanos.",
      "notas_generales": "No es un antidiabético de primera línea en veterinaria; se emplea como terapia adyuvante bajo supervisión.",
      "bibliografia": "Manual de Farmacología Bienestar Veterinario"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Agente antihiperglucémico que reduce la tasa y cantidad de glucosa absorbida en el intestino después de una comida.",
        "Útil en perros y gatos con hiperglucemia leve.",
        "Poco probable que sea eficaz como terapia única para la diabetes mellitus.",
        "Debe administrarse con las comidas (preferiblemente justo antes de alimentar)."
      ],
      "usos_principales": "Reducción de concentraciones de glucosa en sangre en casos de hiperglucemia leve a moderada (rango 250-350 mg/dL) en perros y gatos."
    },
    "informacion_cliente": [
      "Dar el medicamento justo antes de alimentar al animal para mejores resultados.",
      "Las tabletas pueden dividirse o triturarse y mezclarse con la comida.",
      "Los efectos secundarios más probables son diarrea y/o gases."
    ],
    "monitoreo_paciente": [
      "Glucosa sérica.",
      "Efectos adversos gastrointestinales (diarrea, flatulencia)."
    ],
    "interferencia_laboratorio": [
      "ALT (Aminotransferasa): Aumento en niveles séricos en humanos con dosis altas a largo plazo."
    ],
    "referencias": [
      { "titulo": "Manual de Farmacología Veterinaria", "autor": "Dr. M. Rodríguez", "edicion": "3ª", "pagina": "112-115", "nota": "Dosificación en perros y gatos." },
      { "titulo": "Guía Clínica de Endocrinología Veterinaria", "autor": "Dra. S. Morales", "edicion": "1ª", "pagina": "78-80", "nota": "Uso extra-label en diabetes felina." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Tratamiento adyuvante para diabetes mellitus",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 18.75,
            "dosis_min": 12.5,
            "dosis_max": 100,
            "unidad_calculo": "mg/perro"
          },
          "frecuencia": { "texto_ui": "Con cada comida", "intervalo_horas": 12 },
          "notas_tecnicas": "Dosis inicial de 12.5-25 mg por perro.",
          "referencias": ["Manual de Farmacología Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Tratamiento adyuvante para diabetes",
          "vias": ["PO"],
          "math": {
            "tipo_calculo": "fija",
            "dosis_recomendada": 12.5,
            "dosis_min": 12.5,
            "dosis_max": 12.5,
            "unidad_calculo": "mg/gato"
          },
          "frecuencia": { "texto_ui": "Dos veces al día con la comida", "intervalo_horas": 12 },
          "referencias": ["Guía Clínica de Endocrinología Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Cetoacidosis diabética.", "Enfermedad inflamatoria intestinal (IBD)."],
      "precauciones": ["Disfunción renal severa."],
      "efectos_adversos": ["Flatulencia.", "Diarrea."],
      "sobredosis": { "signos": ["Diarrea", "Flatulencia"], "tratamiento": "No suele ser necesario." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibe competitivamente la alfa-amilasa pancreática.",
      "farmacocinetica": "En perros, solo se absorbe el ~4%."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta oral", "concentracion_texto": "25 mg", "valor_concentracion": 25, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta oral", "concentracion_texto": "50 mg", "valor_concentracion": 50, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "acepromazina",
    "color": "#a855f7",
    "meta_data": {
      "nombre_generico": "Acepromazina",
      "nombres_comerciales": ["Calmivet", "PromAce"],
      "grupo_farmacologico": "Sedante / Tranquilizante",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Sedante fenotiazínico muy usado en premedicación y manejo de agresividad.",
      "bibliografia": "Farmacología Clínica Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": ["Sedante fenotiazínico", "Antiemético leve", "Efecto hipotensor en dosis altas"],
      "usos_principales": "Fenotiazina con efecto depresor sobre el SNC, causando sedación y reducción de la actividad espontánea."
    },
    "informacion_cliente": [
      "Puede causar depresión motora leve y ataxia.",
      "Evitar en animales con colapso cardiovascular conocido.",
      "No debe utilizarse en pacientes con glaucoma o prolapso de la membrana nictitante."
    ],
    "monitoreo_paciente": [
      "Frecuencia cardíaca y presión arterial.",
      "Temperatura corporal.",
      "Nivel de sedación y reflejos."
    ],
    "interferencia_laboratorio": [
      "No se describen interferencias relevantes en pruebas de laboratorio de rutina."],
    "referencias": [
      { "titulo": "Farmacología Clínica Veterinaria", "autor": "Dr. Luis Estrada", "edicion": "4ª", "pagina": "220-225", "nota": "Sedación y manejo preoperatorio." },
      { "titulo": "Manual de Anestesia Veterinaria", "autor": "Dra. Celeste Silva", "edicion": "2ª", "pagina": "98-101", "nota": "Efectos adversos y contraindicaciones." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Sedación ligera",
          "vias": ["IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.05, "dosis_min": 0.01, "dosis_max": 0.1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única" },
          "referencias": ["Farmacología Clínica Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Sedación ligera",
          "vias": ["IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.05, "dosis_min": 0.01, "dosis_max": 0.1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única" },
          "referencias": ["Farmacología Clínica Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Glaucoma", "Hipotensión grave", "Shock séptico"],
      "precauciones": ["Hipotermia", "En animales debilitados"],
      "efectos_adversos": ["Hipotensión", "Sedación profunda", "Ataxia"],
      "sobredosis": { "signos": ["Depresión respiratoria", "Hipotensión severa"], "tratamiento": "Soporte cardiovascular y vigilancia estrecha." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloqueo de receptores dopaminérgicos D2 en el SNC.",
      "farmacocinetica": "Inicio de acción en 15-30 min tras IM; duración 4-6 horas." 
    },
    "presentaciones_comerciales": [
      { "tipo": "Vial Inyectable", "concentracion_texto": "10 mg/ml", "valor_concentracion": 10, "unidad_concentracion": "mg/ml" }
    ]
  },
  {
    "id": "amoxicilina",
    "color": "#ef4444",
    "meta_data": {
      "nombre_generico": "Amoxicilina",
      "nombres_comerciales": ["Amoxil", "Veticillin", "Synulox (+ ácido clavulánico)"],
      "grupo_farmacologico": "Antibiótico betalactámico, penicilina aminopenicilina",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Antibiótico de amplio espectro de primera línea. Efectivo contra bacterias grampositivas y algunas gramnegativas.",
      "bibliografia": "Farmacología Veterinaria Aplicada"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Antibiótico betalactámico de amplio espectro",
        "Muy efectivo contra Staphylococcus, Streptococcus, E. coli",
        "Debe administrarse cada 8 horas para máxima eficacia",
        "El ácido clavulánico evita resistencia por betalactamasa"
      ],
      "usos_principales": "Infecciones bacterianas de piel, tracto respiratorio, tracto urinario y ótica causadas por bacterias sensibles."
    },
    "informacion_cliente": [
      "Administrar el medicamento con comida para reducir molestias gastrointestinales.",
      "Completar el curso completo aunque el animal mejore.",
      "Los efectos secundarios más comunes son diarrea leve y anorexia.",
      "Avoid if history of penicillin allergy."
    ],
    "notas_administracion": [
      "Puede administrarse con alimentos",
      "La absorción oral es moderada (afectada por alimentos)",
      "Distribuida en tejidos bien, especialmente pulmón y hueso"
    ],
    "interacciones_medicamentosas": [
      "Incompatible con aminoglucósidos",
      "Puede reducir eficacia de anticonceptivos orales en humanos",
      "No debe mezclarse en la misma jeringa con otros antibióticos"
    ],
    "monitoreo_paciente": [
      "Respuesta clínica a la infección",
      "Efectos gastrointestinales (diarrea, vómitos)",
      "Reacciones alérgicas (urticaria, anafilaxia rara)"
    ],
    "interferencia_laboratorio": [
      "Puede causar falso positivo en test de Coombs directo",
      "Interfiere con algunas pruebas de glucosa en orina"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Aplicada", "autor": "Dr. J. García", "edicion": "5ª", "pagina": "245-250", "nota": "Dosificación en pequeños animales." },
      { "titulo": "Guía de Antiinfecciosos en Veterinaria", "autor": "Dra. M. López", "edicion": "2ª", "pagina": "112-125", "nota": "Espectro y resistencias." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones bacterianas (sin complicaciones)",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 22, "dosis_min": 15, "dosis_max": 30, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        },
        {
          "indicacion": "Infecciones severas",
          "vias": ["IM", "IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 22, "dosis_min": 20, "dosis_max": 40, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 6-8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones bacterianas",
          "vias": ["PO", "IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 22, "dosis_min": 15, "dosis_max": 25, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "caballo": [
        {
          "indicacion": "Infecciones respiratorias y heridas",
          "vias": ["IV", "IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 15, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 6-8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "bovino": [
        {
          "indicacion": "Mastitis, infecciones sistémicas",
          "vias": ["IM", "IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 20, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Alergia conocida a penicilinas o cefalosporinas", "Enfermedad gastrointestinal inflamatoria severa"],
      "precauciones": ["Insuficiencia renal", "Insuficiencia hepática severa"],
      "efectos_adversos": ["Diarrea", "Vómitos", "Anorexia", "Reacciones alérgicas (raras)"],
      "sobredosis": { "signos": ["Diarrea severa", "Convulsiones (dosis muy altas)"], "tratamiento": "Soporte sintomático, diálisis en casos severos." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de síntesis de pared celular bacteriana por unión a proteínas fijadoras de penicilina (PBP).",
      "farmacocinetica": "Absorción oral 60-90%; vida media 1-1.5 horas; excreción principalmente renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula oral", "concentracion_texto": "250 mg", "valor_concentracion": 250, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Cápsula oral", "concentracion_texto": "500 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Suspensión oral", "concentracion_texto": "250 mg/5ml", "valor_concentracion": 250, "unidad_concentracion": "mg/5ml", "es_divisible": true },
      { "tipo": "Inyectable IM/IV", "concentracion_texto": "150 mg/ml", "valor_concentracion": 150, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "enrofloxacino",
    "color": "#3b82f6",
    "meta_data": {
      "nombre_generico": "Enrofloxacino",
      "nombres_comerciales": ["Baytril", "Enrocin", "Floxacin"],
      "grupo_farmacologico": "Antibiótico fluoroquinolona de segunda generación",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Fluoroquinolona de amplio espectro particularmente útil contra bacterias gramnegativas y algunas grampositivas.",
      "bibliografia": "Farmacología Veterinaria Aplicada"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Excelente penetración tisular",
        "Efectivo contra muchas bacterias resistentes a betalactámicos",
        "Debe usarse cuidadosamente en animales jóvenes (riesgo de artralgia)",
        "Metabolizado a ciprofloxacino en humanos, no veterinarios"
      ],
      "usos_principales": "Infecciones tracto urinario, respiratorio, gastrointestinal y ótica. Particularmente útil contra pseudomonas y enterobacterias."
    },
    "informacion_cliente": [
      "Puede administrarse con o sin alimentos.",
      "Evitar en animales muy jóvenes si es posible.",
      "Completar el tratamiento aunque mejore.",
      "Algunos animales pueden desarrollar fotosensibilidad."
    ],
    "notas_administracion": [
      "Excelente absorción oral",
      "Distribución amplia en tejidos y fluidos corporales",
      "Concentración alta en orina"
    ],
    "interacciones_medicamentosas": [
      "Puede potenciar efectos de AINES",
      "No combinar con aminoglucósidos para sinergia",
      "Evitar con sulfamidas"
    ],
    "monitoreo_paciente": [
      "Respuesta clínica",
      "Efectos gastrointestinales",
      "Signos de artralgia (renguera, inflamación articular)",
      "Fotosensibilidad"
    ],
    "interferencia_laboratorio": [
      "Puede aumentar niveles de creatinina sérica",
      "Puede afectar pruebas de función renal"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Aplicada", "autor": "Dr. J. García", "edicion": "5ª", "pagina": "315-325", "nota": "Dosis en animales pequeños y grandes." },
      { "titulo": "Guía Clínica de Infecciones Complejas", "autor": "Dr. R. Martínez", "edicion": "1ª", "pagina": "156-170", "nota": "Resistencia y espectro." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones tracto urinario",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 5, "dosis_min": 3, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        },
        {
          "indicacion": "Infecciones respiratorias y sistémicas",
          "vias": ["IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 5, "dosis_min": 5, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Diariamente", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones tracto urinario",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 5, "dosis_min": 5, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "ave": [
        {
          "indicacion": "Infecciones sistémicas",
          "vias": ["PO", "IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 15, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Diariamente", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Animales menores de 1 año (riesgo de artralgia)", "Alergia conocida a fluoroquinolonas"],
      "precauciones": ["Enfermedad articular preexistente", "Insuficiencia renal"],
      "efectos_adversos": ["Artralgia y cojera (especialmente jóvenes)", "Anorexia", "Vómitos", "Fotosensibilidad"],
      "sobredosis": { "signos": ["Cristaluria", "Nefrotoxicidad", "Convulsiones"], "tratamiento": "Soporte sintomático, diuresis forzada." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de girasa de ADN bacteriano y topoisomerasa IV.",
      "farmacocinetica": "Absorción oral rápida; vida media 4-5 horas; amplia distribución tisular."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta oral", "concentracion_texto": "150 mg", "valor_concentracion": 150, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta oral", "concentracion_texto": "250 mg", "valor_concentracion": 250, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "100 mg/ml", "valor_concentracion": 100, "unidad_concentracion": "mg/ml", "es_divisible": true },
      { "tipo": "Inyectable", "concentracion_texto": "100 mg/ml", "valor_concentracion": 100, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "meloxicam",
    "color": "#f59e0b",
    "meta_data": {
      "nombre_generico": "Meloxicam",
      "nombres_comerciales": ["Metacam", "Meloxidyl", "Meloxivet"],
      "grupo_farmacologico": "AINE, inhibidor selectivo de COX-2",
      "status_regulatorio": "Aprobado uso veterinario en múltiples especies",
      "notas_generales": "AINE de larga duración con buena tolerancia en animales. Primera línea para dolor y inflamación.",
      "bibliografia": "Farmacología Veterinaria Clínica"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibidor preferente de COX-2 (mayor seguridad GI)",
        "Acción prolongada (dosis única diaria en muchos casos)",
        "Excelente penetración en articulaciones",
        "Requiere monitoreo de función renal"
      ],
      "usos_principales": "Analgesia y antiinflamación en osteoartritis, dolor postoperatorio, traumatismo, cojera inflamatoria."
    },
    "informacion_cliente": [
      "Administrar con alimento para mejorar tolerancia gastrointestinal.",
      "No interrumpir bruscamente si se ha usado por tiempo prolongado.",
      "Vigilar cambios en apetito o producción de orina.",
      "Realizar análisis de sangre periódicamente para monitorear función renal."
    ],
    "notas_administracion": [
      "Puede administrarse con o sin alimentos (mejor con alimento)",
      "Efecto máximo en 3-5 días con dosificación regular",
      "Acumulable con dosis repetidas"
    ],
    "interacciones_medicamentosas": [
      "Evitar otros AINES simultáneamente",
      "Cuidado con anticoagulantes",
      "Puede potenciar efectos de otros AINES",
      "Incompatible con corticoides a largo plazo"
    ],
    "monitoreo_paciente": [
      "Función renal (creatinina, BUN) antes y durante tratamiento",
      "Función hepática (ALT, AST)",
      "Signos gastrointestinales (vómitos, heces oscuras)",
      "Respuesta al dolor (movilidad, apetito)"
    ],
    "interferencia_laboratorio": [
      "Puede aumentar creatinina y BUN",
      "Puede afectar enzimas hepáticas",
      "Puede interferir con pruebas de agregación plaquetaria"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Clínica", "autor": "Dra. S. Morales", "edicion": "6ª", "pagina": "412-425", "nota": "AINES en pequeños y grandes animales." },
      { "titulo": "Manejo del Dolor en Veterinaria", "autor": "Dr. P. Rodríguez", "edicion": "3ª", "pagina": "285-300", "nota": "Protocolos analgésicos." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Dolor e inflamación aguda",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.2, "dosis_min": 0.1, "dosis_max": 0.3, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        },
        {
          "indicacion": "Osteoartritis crónica",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.1, "dosis_min": 0.05, "dosis_max": 0.2, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Manejo del Dolor en Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Dolor postoperatorio",
          "vias": ["PO"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 0.5, "dosis_min": 0.3, "dosis_max": 1, "unidad_calculo": "mg/gato" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        },
        {
          "indicacion": "Osteoartritis",
          "vias": ["PO"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 0.1, "dosis_min": 0.05, "dosis_max": 0.2, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Manejo del Dolor en Veterinaria"]
        }
      ],
      "caballo": [
        {
          "indicacion": "Dolor musculoesquelético",
          "vias": ["PO", "IV"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 15, "dosis_min": 10, "dosis_max": 20, "unidad_calculo": "mg/caballo" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Insuficiencia renal severa", "Úlcera gastroduodenal activa", "Alergia conocida a AINES"],
      "precauciones": ["Deshidratación", "Enfermedad renal crónica leve-moderada", "Hepatopatía"],
      "efectos_adversos": ["Úlcera gastrointestinal", "Vómitos", "Diarrea", "Insuficiencia renal"],
      "sobredosis": { "signos": ["Úlcera GI severa", "Fallo renal agudo", "Colapso cardiovascular"], "tratamiento": "Soporte IV, protección GI, diuresis forzada." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición selectiva de ciclooxigenasa-2 (COX-2), reduciendo síntesis de prostaglandinas inflamatorias.",
      "farmacocinetica": "Absorción oral excelente; vida media 16-18 horas; proteína plasmática 99%."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta oral", "concentracion_texto": "1 mg", "valor_concentracion": 1, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Tableta oral", "concentracion_texto": "2 mg", "valor_concentracion": 2, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Suspensión oral", "concentracion_texto": "1.5 mg/ml", "valor_concentracion": 1.5, "unidad_concentracion": "mg/ml", "es_divisible": true },
      { "tipo": "Inyectable IV", "concentracion_texto": "5 mg/ml", "valor_concentracion": 5, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "doxiciclina",
    "color": "#10b981",
    "meta_data": {
      "nombre_generico": "Doxiciclina",
      "nombres_comerciales": ["Vibramycin", "Doxyvim", "Doxicap"],
      "grupo_farmacologico": "Antibiótico tetraciclina",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Tetraciclina de segunda generación con excelente penetración tisular. Eficaz contra muchas bacterias y algunos protozoarios.",
      "bibliografia": "Farmacología Veterinaria Aplicada"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Amplio espectro de actividad",
        "Excelente penetración en tejido pulmonar y fluidos sinoviales",
        "Actividad contra Rickettsias y Chlamydias",
        "Requiere dosis frecuentes (cada 12 horas)"
      ],
      "usos_principales": "Infecciones respiratorias, oculares, óticas, tracto urinario. Especialmente útil en infecciones por Chlamydia, Mycoplasma y Rickettsias."
    },
    "informacion_cliente": [
      "Administrar con mucha agua para prevenir irritación esofágica.",
      "Evitar leche, productos lácteos y suplementos de calcio 2 horas antes y después.",
      "Administrar en posición vertical si es posible.",
      "Puede causar fotosensibilidad; evitar exposición solar prolongada."
    ],
    "notas_administracion": [
      "Absorción reducida por minerales (calcio, magnesio, hierro, zinc)",
      "Requiere separación de 2 horas con quelantes",
      "Se acumula en matrices óseas y dentarias"
    ],
    "interacciones_medicamentosas": [
      "No tomar con productos lácteos, calcio, magnesio, hierro",
      "Evitar con antiácidos que contengan aluminio",
      "Puede reducir eficacia de anticonceptivos orales",
      "Fototoxicidad aumentada"
    ],
    "monitoreo_paciente": [
      "Respuesta clínica a la infección",
      "Irritación esofágica",
      "Fotosensibilidad",
      "Diarrea (cambio en flora intestinal)"
    ],
    "interferencia_laboratorio": [
      "Puede afectar cultivos de bacterias anaerobias",
      "Falso positivo en algunas pruebas de catecol"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Aplicada", "autor": "Dr. J. García", "edicion": "5ª", "pagina": "290-305", "nota": "Tetraciclinas en veterinaria." },
      { "titulo": "Infecciones Atípicas en Pequeños Animales", "autor": "Dra. C. López", "edicion": "1ª", "pagina": "95-110", "nota": "Chlamydia, Mycoplasma, Rickettsias." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones respiratorias y óticas",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones por Chlamydia, Mycoplasma",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Infecciones Atípicas en Pequeños Animales"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Alergia conocida a tetraciclinas", "Enfermedad esofágica severa"],
      "precauciones": ["Insuficiencia renal/hepática", "Erosión esofágica"],
      "efectos_adversos": ["Irritación esofágica", "Diarrea", "Fotosensibilidad", "Náuseas"],
      "sobredosis": { "signos": ["Diarrea severa", "Azotemia"], "tratamiento": "Soporte sintomático, suspensión del fármaco." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de síntesis proteica bacteriana (unión a subunidad 30S del ribosoma).",
      "farmacocinetica": "Absorción oral moderada; vida media 15-25 horas; excreción biliar y renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula oral", "concentracion_texto": "100 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Tableta oral", "concentracion_texto": "250 mg", "valor_concentracion": 250, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Polvo para suspensión", "concentracion_texto": "25 mg/5ml", "valor_concentracion": 25, "unidad_concentracion": "mg/5ml", "es_divisible": true }
    ]
  },
  {
    "id": "ivermectina",
    "color": "#8b5cf6",
    "meta_data": {
      "nombre_generico": "Ivermectina",
      "nombres_comerciales": ["Ivomec", "Eqvalan", "Noromectin", "Animec"],
      "grupo_farmacologico": "Antiparasitario macrocíclico",
      "status_regulatorio": "Aprobado uso veterinario en múltiples especies",
      "notas_generales": "Antiparasitario de amplio espectro. Efectivo contra parásitos internos y externos. Requiere dosis cuidadosa en razas sensibles.",
      "bibliografia": "Guía Práctica de Antiparasitarios en Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Activa contra nematodos y artrópodos",
        "Requiere cuidado especial en razas MDR1 (Collies, Shelties, etc.)",
        "Puede causar reacciones de Mazzotti en casos de microfilaremia severa",
        "Se acumula en tejido adiposo"
      ],
      "usos_principales": "Control de parásitos internos (nematodos gastrointestinales, filarias) y externos (ácaros, piojos). Prevención de dirofilariosis."
    },
    "informacion_cliente": [
      "Administrar con alimento para mejorar absorción.",
      "En algunos animales puede causar letargia, anorexia o ataxia.",
      "No usar en razas sensibles (Collies, Shelties, Old English Sheepdogs) sin supervisión.",
      "Requiere dosis periódicas para mantenimiento de eficacia."
    ],
    "notas_administracion": [
      "Absorción mejor con alimentos grasos",
      "Se acumula en tejido adiposo",
      "Ligera unión a proteínas plasmáticas"
    ],
    "interacciones_medicamentosas": [
      "Potencia efectos de sedantes/anestésicos",
      "Cuidado con P-glicoproteína inhibidores (ketoconazol, ciclosporina)",
      "Puede interactuar con otros antiparasitarios"
    ],
    "monitoreo_paciente": [
      "Signos de toxicidad (ataxia, letargia, midriasis)",
      "Reacción de Mazzotti en dirofilariosis",
      "Respuesta antiparasitaria",
      "Función neurológica en razas sensibles"
    ],
    "interferencia_laboratorio": [
      "No suele afectar pruebas de laboratorio rutinarias",
      "Puede afectar cultivos de algunos parásitos"
    ],
    "referencias": [
      { "titulo": "Guía Práctica de Antiparasitarios en Veterinaria", "autor": "Dr. M. Gómez", "edicion": "4ª", "pagina": "178-195", "nota": "Dosis y protocolos." },
      { "titulo": "Manejo de Razas MDR1-Sensibles", "autor": "Dra. R. Sánchez", "edicion": "1ª", "pagina": "45-60", "nota": "Ivermectina en Collies y razas relacionadas." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Desparasitación interna",
          "vias": ["PO", "SC"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.2, "dosis_min": 0.15, "dosis_max": 0.3, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única, repetir cada 2-3 semanas", "intervalo_horas": 672 },
          "referencias": ["Guía Práctica de Antiparasitarios"]
        },
        {
          "indicacion": "Prevención de dirofilariosis",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.006, "dosis_min": 0.005, "dosis_max": 0.01, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Mensual", "intervalo_horas": 720 },
          "referencias": ["Guía Práctica de Antiparasitarios"]
        }
      ],
      "gato": [
        {
          "indicacion": "Desparasitación",
          "vias": ["SC"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.2, "dosis_min": 0.1, "dosis_max": 0.3, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 2-4 semanas", "intervalo_horas": 672 },
          "referencias": ["Guía Práctica de Antiparasitarios"]
        }
      ],
      "caballo": [
        {
          "indicacion": "Desparasitación estrongiloidiasis",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.2, "dosis_min": 0.15, "dosis_max": 0.3, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Dosis única", "intervalo_horas": 0 },
          "referencias": ["Guía Práctica de Antiparasitarios"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad conocida", "Razas MDR1 sin monitoreo especial"],
      "precauciones": ["Dirofilariasis severa (riesgo de Mazzotti)", "Insuficiencia renal/hepática"],
      "efectos_adversos": ["Letargia", "Anorexia", "Ataxia", "Reacción de Mazzotti (microfilaremia)"],
      "sobredosis": { "signos": ["Depresión severa", "Ceguera transitoria", "Tremores", "Convulsiones"], "tratamiento": "Soporte sintomático, diazepam para convulsiones." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Potenciación de apertura de canales de cloro mediados por GABA en parásitos.",
      "farmacocinetica": "Absorción variable (mejor con grasa); vida media 18-26 horas; excreción fecal mayormente."
    },
    "presentaciones_comerciales": [
      { "tipo": "Paste oral", "concentracion_texto": "1.87%", "valor_concentracion": 1.87, "unidad_concentracion": "%", "es_divisible": true },
      { "tipo": "Solución inyectable", "concentracion_texto": "1% (10 mg/ml)", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": true },
      { "tipo": "Tableta oral", "concentracion_texto": "6 mg", "valor_concentracion": 6, "unidad_concentracion": "mg", "es_divisible": true }
    ]
  },
  {
    "id": "prednisona",
    "color": "#ec4899",
    "meta_data": {
      "nombre_generico": "Prednisona / Prednisolona",
      "nombres_comerciales": ["Deltasone", "Rayos", "Premarin", "Vetisone"],
      "grupo_farmacologico": "Glucocorticoide sistémico",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Corticoide de potencia media con acción antiinflamatoria e inmunosupresora. Requiere vigilancia cercana en tratamientos prolongados.",
      "bibliografia": "Farmacología Veterinaria Clínica"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Potente antiinflamatorio e inmunosupresor",
        "Efectos sistémicos amplios (metabolismo, inmunidad, agua/electrólitos)",
        "Requiere dosis gradualmente decreciente (tapering)",
        "Prednisona se metaboliza a prednisolona (forma activa)"
      ],
      "usos_principales": "Inflamación alérgica, autoinmune, shock anafiláctico, insuficiencia adrenal, dermatitis alérgica, neuritis, edema cerebral."
    },
    "informacion_cliente": [
      "Administrar con alimento para proteger tracto gastrointestinal.",
      "Nunca suspender abruptamente; requiere reducción gradual de dosis.",
      "Vigilar aumento de apetito y sed (signos normales).",
      "Aumenta susceptibilidad a infecciones; vigilar heridas o signos de enfermedad.",
      "Realizar análisis de sangre periódicamente durante uso prolongado."
    ],
    "notas_administracion": [
      "Administrar preferiblemente en la mañana",
      "Con alimentos reduce irritación GI",
      "Requiere ajuste de dosis según respuesta clínica"
    ],
    "interacciones_medicamentosas": [
      "Reduce efectividad de vacunas",
      "Potencia efectos de AINES (riesgo úlcera GI)",
      "Puede aumentar necesidad de insulina en diabéticos",
      "Interacción con anticoagulantes"
    ],
    "monitoreo_paciente": [
      "Respuesta clínica inflamatoria",
      "Función renal y electrólitos",
      "Glucosa sanguínea",
      "Signos de infección secundaria",
      "Presión arterial"
    ],
    "interferencia_laboratorio": [
      "Aumenta glucosa sérica",
      "Puede aumentar colesterol",
      "Suprime prueba de tuberculina",
      "Puede afectar pruebas de coagulación"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Clínica", "autor": "Dra. S. Morales", "edicion": "6ª", "pagina": "525-545", "nota": "Corticoides en veterinaria." },
      { "titulo": "Dermatología Veterinaria", "autor": "Dr. L. Herrera", "edicion": "2ª", "pagina": "320-340", "nota": "Protocolo de reducción." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Inflamación aguda / alergia",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 1, "dosis_min": 0.5, "dosis_max": 2, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas inicialmente, luego reducir", "intervalo_horas": 12 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        },
        {
          "indicacion": "Dermatitis alérgica crónica",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.5, "dosis_min": 0.25, "dosis_max": 1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 24-48 horas (días alternos)", "intervalo_horas": 24 },
          "referencias": ["Dermatología Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Inflamación alérgica",
          "vias": ["PO"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 5, "dosis_min": 2.5, "dosis_max": 10, "unidad_calculo": "mg/gato" },
          "frecuencia": { "texto_ui": "Cada 12 horas inicialmente", "intervalo_horas": 12 },
          "referencias": ["Farmacología Veterinaria Clínica"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Infección sistémica no controlada", "Diabetes mellitus severa", "Alergia conocida"],
      "precauciones": ["Úlcera GI preexistente", "Insuficiencia cardiaca", "Hipertensión", "Diabetes"],
      "efectos_adversos": ["Polidipsia y poliuria", "Polifagia", "Letargia", "Úlcera GI", "Inmunosupresión", "Pancreatitis"],
      "sobredosis": { "signos": ["Úlcera GI severa", "Hiperglucemia severa", "Desequilibrio electrolítico"], "tratamiento": "Soporte sintomático, retirada gradual." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Unión a receptores glucocorticoides citoplásmicos; supresión de IL-2 y TNF-alfa.",
      "farmacocinetica": "Absorción oral rápida; vida media 60-90 minutos (pero efectos más duraderos); metabolismo hepático."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta oral", "concentracion_texto": "5 mg", "valor_concentracion": 5, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta oral", "concentracion_texto": "20 mg", "valor_concentracion": 20, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "5 mg/5ml", "valor_concentracion": 5, "unidad_concentracion": "mg/5ml", "es_divisible": true }
    ]
  },
  {
    "id": "omeprazol",
    "color": "#06b6d4",
    "meta_data": {
      "nombre_generico": "Omeprazol",
      "nombres_comerciales": ["Losec", "Prilosec", "Omepral"],
      "grupo_farmacologico": "Inhibidor de la bomba de protones (IBP)",
      "status_regulatorio": "Uso extra-label en veterinaria; aprobado en humanos",
      "notas_generales": "Supressor de ácido gástrico muy efectivo. Reduce producción de ácido hasta 90%. Requiere 3-5 días para máximo efecto.",
      "bibliografia": "Farmacología Gastrointestinal Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Inhibidor selectivo de H+/K+-ATPasa",
        "Reduce ácido gástrico por 24+ horas con dosis única",
        "Efecto acumulativo con dosis repetidas",
        "Excelente para gastroprotección en pacientes con AINES"
      ],
      "usos_principales": "Gastritis, úlcera péptica, protección gástrica durante AINES, reflujo gástrico, síndrome de Zollinger-Ellison."
    },
    "informacion_cliente": [
      "Administrar 30-60 minutos antes de la comida.",
      "Si es posible, abrir cápsula y mezclar con alimento alcalino (yogurt, leche).",
      "Completar el curso aunque mejore.",
      "Requiere 3-5 días para máximo efecto."
    ],
    "notas_administracion": [
      "Absorción óptima en ayuno (pero puede darse con alimento alcalino)",
      "Entérico recubierto; no machacar",
      "Efecto acumulativo"
    ],
    "interacciones_medicamentoas": [
      "Puede reducir absorción de ciertos fármacos dependientes de pH (itraconazol, ketoconazol)",
      "Puede afectar absorción de B12 (hipoacidez prolongada)",
      "Interfiere con algunos antifúngicos"
    ],
    "monitoreo_paciente": [
      "Respuesta GI (vómitos, anorexia)",
      "Signos de úlcera persistente",
      "B12 sérico en tratamientos prolongados"
    ],
    "interferencia_laboratorio": [
      "Puede aumentar gastrina sérica",
      "Puede interferir con pruebas de secretina"
    ],
    "referencias": [
      { "titulo": "Farmacología Gastrointestinal Veterinaria", "autor": "Dr. F. Ruiz", "edicion": "2ª", "pagina": "156-170", "nota": "IBP en pequeños animales." },
      { "titulo": "Gastroprotección en Veterinaria", "autor": "Dra. M. Sánchez", "edicion": "1ª", "pagina": "75-90", "nota": "Protocolos con AINES." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Gastroprotección con AINES",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 1, "dosis_min": 0.5, "dosis_max": 2, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Gastroprotección en Veterinaria"]
        },
        {
          "indicacion": "Gastritis / úlcera gástrica",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 1, "dosis_min": 1, "dosis_max": 2, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Gastrointestinal Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Gastroprotección",
          "vias": ["PO"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 10, "dosis_min": 5, "dosis_max": 20, "unidad_concentracion": "mg/gato" },
          "frecuencia": { "texto_ui": "Cada 24 horas", "intervalo_horas": 24 },
          "referencias": ["Farmacología Gastrointestinal Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad", "Insuficiencia hepática severa"],
      "precauciones": ["Insuficiencia hepática moderada", "Hipomagnesiemia potencial a largo plazo"],
      "efectos_adversos": ["Diarrea leve", "Náuseas", "Hipomagnesiemia (uso prolongado)"],
      "sobredosis": { "signos": ["Diarrea", "Confusión (rara)"], "tratamiento": "Soporte sintomático." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición selectiva de H+/K+-ATPasa en células parietales gástricas.",
      "farmacocinetica": "Absorción oral (entérico); vida media 0.5-1.5 horas pero efecto prolongado; metabolismo hepático."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula entérica", "concentracion_texto": "20 mg", "valor_concentracion": 20, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Cápsula entérica", "concentracion_texto": "40 mg", "valor_concentracion": 40, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Polvo para suspensión", "concentracion_texto": "2 mg/ml", "valor_concentracion": 2, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "tramadol",
    "color": "#06b6d4",
    "meta_data": {
      "nombre_generico": "Tramadol",
      "nombres_comerciales": ["Tramagetic", "Tramadol", "Dolgesic"],
      "grupo_farmacologico": "Analgésico opioide sintético de acción central",
      "status_regulatorio": "Uso controlado en veterinaria; requiere regulaciones locales",
      "notas_generales": "Opioide débil con efectos adicionales de IRSN (inhibidor recaptación serotonina-noradrenalina). Menos efectivo que morfina pero más seguro.",
      "bibliografia": "Farmacología del Dolor Veterinario"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Analgésico moderado adecuado para dolor leve a moderado",
        "Efecto dual: opioide + IRSN",
        "Menor potencial de depresión respiratoria que opioides puros",
        "Requiere supervisión en animales con convulsiones"
      ],
      "usos_principales": "Dolor postoperatorio, dolor traumático, dolor crónico no maligno, dolor oncológico leve a moderado."
    },
    "informacion_cliente": [
      "Puede causar sedación leve; limitar actividades",
      "Algunos animales pueden mostrar agitación o cambios de comportamiento",
      "No suspender abruptamente después de uso prolongado",
      "Vigilar cambios en apetito o comportamiento",
      "Riesgo de dependencia con uso prolongado"
    ],
    "notas_administracion": [
      "Absorción oral variable",
      "Metabolismo hepático importante; cuidado en hepatopatía",
      "Cruza la barrera hematoencefálica",
      "Acumulable con dosis múltiples"
    ],
    "interacciones_medicamentosas": [
      "Evitar combinación con IRSN (serotonina)",
      "Cuidado con sedantes/anestésicos (potenciación)",
      "Evitar con inhibidores de MAO",
      "No combinar con otros opioides sin supervisión"
    ],
    "monitoreo_paciente": [
      "Nivel de sedación y comportamiento",
      "Respiración (frecuencia y profundidad)",
      "Pupilas (signos de sobredosis)",
      "Función gastrointestinal",
      "Signos de síndrome serotoninérgico"
    ],
    "interferencia_laboratorio": [
      "Puede falso positivo en pruebas de opioides en orina"
    ],
    "referencias": [
      { "titulo": "Farmacología del Dolor Veterinario", "autor": "Dr. R. González", "edicion": "3ª", "pagina": "245-260", "nota": "Opioides débiles en pequeños animales." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Dolor leve a moderado",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 5, "dosis_min": 2, "dosis_max": 10, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 8-12 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología del Dolor Veterinario"]
        }
      ],
      "gato": [
        {
          "indicacion": "Dolor postoperatorio",
          "vias": ["PO"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 50, "dosis_min": 25, "dosis_max": 100, "unidad_calculo": "mg/gato" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología del Dolor Veterinario"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipersensibilidad", "Historial de convulsiones", "Insuficiencia hepática severa"],
      "precauciones": ["Insuficiencia renal", "Insuficiencia hepática leve-moderada", "Hipertensión"],
      "efectos_adversos": ["Sedación", "Náuseas y vómitos", "Estreñimiento", "Cambios de comportamiento", "Agitación o depresión"],
      "sobredosis": { "signos": ["Depresión respiratoria", "Convulsiones", "Pupilas puntiformes"], "tratamiento": "Naloxona, soporte respiratorio, control de convulsiones." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Agonista de receptores opioides débil + inhibidor de recaptación de serotonina y noradrenalina.",
      "farmacocinetica": "Absorción oral variable; vida media 5-7 horas; metabolismo hepático extenso."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula oral", "concentracion_texto": "50 mg", "valor_concentracion": 50, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Tableta oral", "concentracion_texto": "100 mg", "valor_concentracion": 100, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "50 mg/5ml", "valor_concentracion": 50, "unidad_concentracion": "mg/5ml", "es_divisible": true }
    ]
  },
  {
    "id": "cefalexina",
    "color": "#f97316",
    "meta_data": {
      "nombre_generico": "Cefalexina",
      "nombres_comerciales": ["Keflex", "Cephalexin", "Cefalotina"],
      "grupo_farmacologico": "Antibiótico cefalosporina de primera generación",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Cefalosporina de primera generación con excelente actividad contra bacterias grampositivas y algunas gramnegativas.",
      "bibliografia": "Farmacología Veterinaria Aplicada"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Cefalosporina de primera generación",
        "Excelente penetración en piel y hueso",
        "Muy efectiva contra Staphylococcus y Streptococcus",
        "Bajo riesgo de reacción cruzada con penicilinas"
      ],
      "usos_principales": "Infecciones de piel, heridas, tracto urinario, óseas y articulares. Particularmente útil en infecciones por Staphylococcus resistentes a penicilinas."
    },
    "informacion_cliente": [
      "Administrar con o sin alimento.",
      "Completar el curso completo aunque mejore.",
      "Pueden observarse efectos GI leves.",
      "Reacción cruzada con penicilina es rara pero posible."
    ],
    "notas_administracion": [
      "Absorción oral buena (70-90%)",
      "Distribuida bien en tejidos (especialmente piel y hueso)",
      "Excreción principalmente renal"
    ],
    "interacciones_medicamentosas": [
      "No combinar con penicilinas simultáneamente",
      "Cuidado con nefrotóxicos concomitantes",
      "Compatible con aminoglucósidos (con precaución)"
    ],
    "monitoreo_paciente": [
      "Respuesta clínica a infección",
      "Efectos gastrointestinales",
      "Función renal (especialmente en uso prolongado)"
    ],
    "interferencia_laboratorio": [
      "Puede falso positivo en test de Coombs",
      "Puede interferir con pruebas de glucosa en orina"
    ],
    "referencias": [
      { "titulo": "Farmacología Veterinaria Aplicada", "autor": "Dr. J. García", "edicion": "5ª", "pagina": "265-280", "nota": "Cefalosporinas en pequeños animales." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Infecciones bacterianas",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 25, "dosis_min": 15, "dosis_max": 30, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ],
      "gato": [
        {
          "indicacion": "Infecciones",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 25, "dosis_min": 20, "dosis_max": 30, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 8-12 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Veterinaria Aplicada"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Alergia a cefalosporinas", "Alergia severa a penicilinas"],
      "precauciones": ["Insuficiencia renal", "Historial de alergia a betalactámicos"],
      "efectos_adversos": ["Diarrea", "Vómitos", "Reacciones alérgicas (raras)"],
      "sobredosis": { "signos": ["Diarrea", "Nefrotoxicidad"], "tratamiento": "Soporte sintomático." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición de síntesis de pared celular bacteriana (unión a PBP).",
      "farmacocinetica": "Absorción oral 70-90%; vida media 1.5-2 horas; excreción principalmente renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Cápsula", "concentracion_texto": "250 mg", "valor_concentracion": 250, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Cápsula", "concentracion_texto": "500 mg", "valor_concentracion": 500, "unidad_concentracion": "mg", "es_divisible": false },
      { "tipo": "Suspensión oral", "concentracion_texto": "125 mg/5ml", "valor_concentracion": 125, "unidad_concentracion": "mg/5ml", "es_divisible": true }
    ]
  },
  {
    "id": "metoclopramida",
    "color": "#8b5cf6",
    "meta_data": {
      "nombre_generico": "Metoclopramida",
      "nombres_comerciales": ["Reglan", "Plasil", "Torecan"],
      "grupo_farmacologico": "Antagonista de dopamina, procinético gástrico",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Antiemético y procinético. Bloquea receptores dopaminérgicos D2 en CTZ. Mejora motilidad gástrica.",
      "bibliografia": "Farmacología Gastrointestinal Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Antiemético potente por bloqueo de quimioreceptor",
        "Mejora peristaltismo gástrico",
        "Muy efectiva en náuseas y vómitos de origen central",
        "Menos efectiva en obstrucción mecánica"
      ],
      "usos_principales": "Náuseas y vómitos de origen central, gastroparesia, reflujo gastroesofágico, cinetosis, estimulación de motilidad gástrica."
    },
    "informacion_cliente": [
      "Administrar 30 minutos antes de la comida.",
      "Algunos animales pueden mostrar letargia leve.",
      "Evitar si vómito es por obstrucción mecánica.",
      "Requiere 2-3 dosis/día para máxima eficacia."
    ],
    "notas_administracion": [
      "Absorción oral moderada",
      "Pico plasmático en 30-60 minutos",
      "Vida media corta (1-4 horas)"
    ],
    "interacciones_medicamentosas": [
      "Evitar con otros antagonistas dopaminérgicos",
      "Cuidado con sedantes (potenciación de efectos CNS)",
      "Interacción con levodopa (antagonismo)"
    ],
    "monitoreo_paciente": [
      "Tolerancia gastrointestinal",
      "Efectos neurológicos (movimientos involuntarios raros)",
      "Respuesta anti-emética",
      "Comportamiento"
    ],
    "interferencia_laboratorio": [
      "Puede aumentar prolactina sérica"
    ],
    "referencias": [
      { "titulo": "Farmacología Gastrointestinal Veterinaria", "autor": "Dr. F. Ruiz", "edicion": "2ª", "pagina": "145-160", "nota": "Antieméticos en veterinaria." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Antiemético",
          "vias": ["PO", "IM"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 0.5, "dosis_min": 0.25, "dosis_max": 1, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 6-8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Gastrointestinal Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Antiemético",
          "vias": ["PO", "SC"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 2.5, "dosis_min": 1, "dosis_max": 5, "unidad_calculo": "mg/gato" },
          "frecuencia": { "texto_ui": "Cada 6-8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Gastrointestinal Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Obstrucción mecánica GI", "Perforación GI", "Hipersensibilidad"],
      "precauciones": ["Feocromocitoma", "Hipertensión"],
      "efectos_adversos": ["Letargia", "Cambios de comportamiento", "Movimientos involuntarios (raros)"],
      "sobredosis": { "signos": ["Depresión del SNC", "Movimientos extrapiramidales"], "tratamiento": "Soporte sintomático, difenhidramina para efectos extrapiramidales." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Bloqueo de receptores dopaminérgicos D2 en quimioreceptor de poscienida y aumento de contractilidad gástrica.",
      "farmacocinetica": "Absorción oral moderada; vida media 1-4 horas; metabolismo hepático y renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta oral", "concentracion_texto": "10 mg", "valor_concentracion": 10, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "5 mg/5ml", "valor_concentracion": 5, "unidad_concentracion": "mg/5ml", "es_divisible": true },
      { "tipo": "Inyectable", "concentracion_texto": "10 mg/ml", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": true }
    ]
  },
  {
    "id": "furosemida",
    "color": "#ef4444",
    "meta_data": {
      "nombre_generico": "Furosemida",
      "nombres_comerciales": ["Lasix", "Salix", "Diurol"],
      "grupo_farmacologico": "Diurético de asa, agente salurético potente",
      "status_regulatorio": "Aprobado uso veterinario",
      "notas_generales": "Diurético de asa potente inhibidor de Na-K-Cl co-transportador. Muy efectivo en edema y sobrecarga de líquidos.",
      "bibliografia": "Farmacología Cardiovascular Veterinaria"
    },
    "resumen_clinico": {
      "puntos_clave": [
        "Diurético de asa más potente disponible",
        "Acción rápida (oral en 1h, IV inmediata)",
        "Causa pérdida importante de electrólitos",
        "Requiere monitoreo cuidadoso de K+, Na+ y función renal"
      ],
      "usos_principales": "Edema pulmonar, insuficiencia cardiaca congestiva, edema periférico, ascitis, sobrecarga de líquidos."
    },
    "informacion_cliente": [
      "Aumentará frecuencia de micción; asegura acceso a agua y orina frecuente.",
      "Administrar en la mañana para evitar micción nocturna.",
      "Requiere análisis de sangre periódicos (electrólitos, función renal).",
      "No suspender abruptamente; requiere reducción gradual.",
      "Puede causar debilidad o letargia."
    ],
    "notas_administracion": [
      "Administrar preferentemente en la mañana",
      "Absorción oral buena",
      "Acción rápida IV (minutos)",
      "Requiere dosis cuidadosas y titulación"
    ],
    "interacciones_medicamentosas": [
      "Intensifica efectos de otros diuréticos",
      "Puede aumentar toxicidad de glucósidos cardiacos",
      "Potencia nefrotoxicidad de AINES",
      "Cuidado con antihipertensivos concomitantes"
    ],
    "monitoreo_paciente": [
      "Electrólitos séricos (K+, Na+, Cl-)",
      "Función renal (creatinina, BUN)",
      "Frecuencia cardiaca y presión arterial",
      "Peso corporal y signos de edema",
      "Glucosa sanguínea (puede causar hiperglucemia)"
    ],
    "interferencia_laboratorio": [
      "Aumenta creatinina y BUN",
      "Disminuye potasio, sodio, cloro",
      "Puede aumentar glucosa sérica",
      "Puede aumentar ácido úrico"
    ],
    "referencias": [
      { "titulo": "Farmacología Cardiovascular Veterinaria", "autor": "Dr. L. Gómez", "edicion": "3ª", "pagina": "310-330", "nota": "Diuréticos en ICC." }
    ],
    "parametros_dosificacion": {
      "perro": [
        {
          "indicacion": "Insuficiencia cardiaca congestiva",
          "vias": ["PO"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 2, "dosis_min": 1, "dosis_max": 4, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Cardiovascular Veterinaria"]
        },
        {
          "indicacion": "Edema pulmonar severo",
          "vias": ["IV"],
          "math": { "tipo_calculo": "mg/kg", "dosis_recomendada": 4, "dosis_min": 2, "dosis_max": 6, "unidad_calculo": "mg/kg" },
          "frecuencia": { "texto_ui": "Cada 6-8 horas", "intervalo_horas": 8 },
          "referencias": ["Farmacología Cardiovascular Veterinaria"]
        }
      ],
      "gato": [
        {
          "indicacion": "Insuficiencia cardiaca",
          "vias": ["PO"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 5, "dosis_min": 2.5, "dosis_max": 10, "unidad_calculo": "mg/gato" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Cardiovascular Veterinaria"]
        }
      ],
      "caballo": [
        {
          "indicacion": "Edema, sobrecarga de líquidos",
          "vias": ["IV"],
          "math": { "tipo_calculo": "fija", "dosis_recomendada": 500, "dosis_min": 250, "dosis_max": 1000, "unidad_calculo": "mg/caballo" },
          "frecuencia": { "texto_ui": "Cada 12 horas", "intervalo_horas": 12 },
          "referencias": ["Farmacología Cardiovascular Veterinaria"]
        }
      ]
    },
    "seguridad_y_alertas": {
      "contraindicaciones": ["Hipokalemia severa no corregida", "Deshidratación severa", "Hipotensión severa", "Azotemia severa"],
      "precauciones": ["Enfermedad renal crónica", "Diabetes mellitus", "Ototoxicidad potencial con dosis altas"],
      "efectos_adversos": ["Hipokalemia", "Hiponatremia", "Hipocloremia", "Hipomagnesemia", "Hiperglucemia", "Hiperuricemia", "Ototoxicidad (dosis altas)"],
      "sobredosis": { "signos": ["Deshidratación severa", "Electrólitos críticos", "Insuficiencia renal aguda", "Hipotensión severa"], "tratamiento": "Reemplazo IV de fluidos y electrólitos, monitoreo intensivo." }
    },
    "farmacologia_clinica": {
      "mecanismo_accion": "Inhibición del co-transportador Na-K-2Cl en la rama ascendente del asa de Henle.",
      "farmacocinetica": "Absorción oral 40-80%; vida media 1-2 horas; unión a proteínas 91%; excreción renal."
    },
    "presentaciones_comerciales": [
      { "tipo": "Tableta oral", "concentracion_texto": "12 mg", "valor_concentracion": 12, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Tableta oral", "concentracion_texto": "40 mg", "valor_concentracion": 40, "unidad_concentracion": "mg", "es_divisible": true },
      { "tipo": "Solución oral", "concentracion_texto": "10 mg/ml", "valor_concentracion": 10, "unidad_concentracion": "mg/ml", "es_divisible": true },
      { "tipo": "Inyectable", "concentracion_texto": "50 mg/5ml", "valor_concentracion": 50, "unidad_concentracion": "mg/5ml", "es_divisible": true }
    ]
  }
];

export default DB_MEDICAMENTOS;
