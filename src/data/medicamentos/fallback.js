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
    id: 'acarbosa',
    color: '#f59e0b',
    meta_data: {
      nombre_generico: 'Acarbosa',
      nombres_comerciales: ['Bay-g-5421', 'Asucrose', 'Glicobase', 'Glucobay', 'Glucor', 'Glumida', 'Prandase', 'Precose'],
      grupo_farmacologico: 'Inhibidor de la alfa-glucosidasa (Agente antidiabético)',
      status_regulatorio: 'Uso extra-label (Uso no aprobado formalmente por FDA para animales).',
      notas_generales: 'Agente antihiperglucemiante. Reduce la tasa y cantidad de glucosa absorbida tras la ingesta. No es eficaz como monoterapia.'
    },
    resumen_clinico: {
      mecanismo_accion: 'Inhibidor competitivo de la alfa-amilasa pancreática y alfa-glucosidasas intestinales. Retrasa la digestión de carbohidratos complejos.',
      usos_principales: 'Adyuvante en diabetes mellitus, hiperglucemia leve a moderada y cuando la insulina alcanza su pico demasiado pronto.'
    },
    seguridad_y_alertas: {
      contraindicaciones: [
        'Hipersensibilidad al fármaco',
        'Cetoacidosis diabética',
        'Enfermedad inflamatoria intestinal (IBD)',
        'Ulceración colónica',
        'Obstrucción intestinal o predisposición a la misma',
        'Enfermedad intestinal crónica severa',
        'Pacientes con bajo peso corporal',
        'Casos donde la formación excesiva de gas sea perjudicial'
      ],
      precauciones: [
        'Disfunción renal severa (los niveles séricos pueden aumentar hasta 5 veces)',
        'Enfermedad hepática severa'
      ],
      efectos_adversos: [
        'Flatulencia (muy común)',
        'Heces blandas a diarrea (dosis-dependiente)',
        'Pérdida de peso (en perros)',
        'Aumento de transaminasas hepáticas (raro)'
      ],
      sobredosis: {
        efectos: 'Principalmente diarrea y flatulencia.',
        tratamiento: 'No requiere tratamiento específico. Si hay hipoglucemia secundaria por otros fármacos, usar glucosa/dextrosa oral (no sacarosa, pues la acarbosa inhibe su absorción).'
      },
      seguridad_reproductiva: 'No hay evidencia de daño fetal o infertilidad en estudios de laboratorio. Usar balanceando riesgo-beneficio. Se desconoce excreción en leche, pero se considera seguro debido a su mínima absorción.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibidor competitivo de la alfa-amilasa pancreática y alfa-glucosidasas intestinales.',
      farmacocinetica: 'Muy baja absorción sistémica (~4% en perros, ~2% en humanos).',
      efectos_adversos: 'Flatulencia, heces blandas/diarrea, pérdida de peso, aumento de transaminasas hepáticas.'
    },
    interacciones_medicamentosas: [
      'Carbón activado: Reduce eficacia',
      'Digoxina: Puede reducir concentraciones plasmáticas',
      'Agentes hiperglucemiantes: Reducen/anulan efecto de acarbosa',
      'Agentes hipoglucemiantes (insulina): Aumenta riesgo de hipoglucemia',
      'Enzimas exógenas (pancreatina/amilasa): Reducen eficacia de acarbosa'
    ],
    consideraciones_laboratorio: {
      hallazgos: 'Posible aumento de ALT y bilirrubina con uso crónico a dosis altas.',
      notas: 'La acarbosa no interfiere con pruebas urinarias de proteína si se usa la metodología correcta, pero es importante monitorear química sanguínea periódica.'
    },
    parametros_dosificacion: {
      perro: [
        {
          indicacion: 'Diabetes mellitus (Terapia adyuvante)',
          vias: ['PO'],
          frecuencia: { texto_ui: 'BID (Cada 12h, con comida)', intervalo_horas: 12 },
          math: { tipo_calculo: 'fija', dosis_recomendada: 12.5, dosis_min: 12.5, dosis_max: 100, unidad_calculo: 'mg/perro' },
          notas_tecnicas: 'DOSIS POR PERRO, NO POR KG',
          notas: 'Dosis inicial: 12.5–25 mg/perro. Titular según respuesta tras 2 semanas. En perros de 10-25kg, considerar hasta 100mg/perro BID.'
        }
      ],
      gato: [
        {
          indicacion: 'Diabetes mellitus (Terapia adyuvante)',
          vias: ['PO'],
          frecuencia: { texto_ui: 'BID (Cada 12h, con comida)', intervalo_horas: 12 },
          math: { tipo_calculo: 'fija', dosis_recomendada: 12.5, dosis_min: 12.5, dosis_max: 12.5, unidad_calculo: 'mg/gato' },
          notas_tecnicas: 'DOSIS POR GATO, NO POR KG',
          notas: 'Ineficaz en dietas bajas en carbohidratos. El gato debe consumir el alimento justo después de la dosis.'
        }
      ]
    },
    informacion_cliente: [
      'Administrar justo antes de alimentar al animal.',
      'Las tabletas pueden triturarse o dividirse.',
      'La diarrea y los gases son efectos esperados. Contactar si persisten.',
      'Monitorear signos de hipoglucemia: convulsiones, colapso, debilidad en miembros traseros o temblores (especialmente si usa insulina).',
      'El control total puede tardar hasta 2 semanas.'
    ],
    monitoreo_paciente: [
      'Perfil hepático',
      'Signos de hipoglucemia',
      'Evaluación clínica de flatulencia/diarrea'
    ],
    interferencia_laboratorio: [
      'Puede causar aumento de ALT y bilirrubina en uso crónico.',
      'No interfiere con pruebas urinarias de proteína cuando se usa metodología correcta.'
    ],
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '25 mg', valor_concentracion: 25, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '50 mg', valor_concentracion: 50, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '100 mg', valor_concentracion: 100, unidad_concentracion: 'mg' }
    ],
    almacenamiento: 'Temperatura ambiente < 25°C. Proteger de la humedad.'
  },
  {
    id: 'acepromazina',
    color: '#0ea5e9',
    meta_data: {
      nombre_generico: 'Acepromacina (Acetylpromacina)',
      nombres_comerciales: ['PromAce®', 'Acecare', 'ACP', 'Vetranquil', 'Sedalin'],
      grupo_farmacologico: 'Fenotiazina (Sedante/Tranquilizante)',
      status_regulatorio: 'FDA aprobado en perros, gatos y caballos. Extra-label en otras especies.',
      notas_generales: 'No posee efecto analgésico. Su uso clínico requiere ajuste de dosis significativamente menor a la de etiqueta. No tiene agente de reversión.'
    },
    resumen_clinico: {
      usos_principales: 'Sedación/tranquilización, preanestesia, manejo de obstrucción uretral en gatos, laminitis en caballos y control de fracticidad.',
      mecanismo_efecto: 'Bloqueo postsináptico de receptores dopaminérgicos en el SNC y bloqueo alfa-1 adrenérgico periférico.',
      consideraciones: 'Efectos dosis-dependientes. La sedación es variable y puede ser anulada por excitación del paciente. Produce vasodilatación marcada (hipotensión).'
    },
    informacion_cliente: [
      'Administrar 45-60 minutos antes del evento estresante o viaje.',
      'Efecto sedante prolongado (hasta 24h).',
      'El animal puede sobresaltarse fácilmente ante ruidos o estímulos repentinos; precaución al manipular.',
      'Posible decoloración benigna de la orina (rosada/rojiza).',
      'Mantener al animal en ambiente tranquilo y térmicamente neutro.'
    ],
    monitoreo_paciente: [
      'Presión arterial (crítico por riesgo de hipotensión).',
      'Frecuencia cardíaca y ritmo (posible taquicardia refleja).',
      'Temperatura corporal (riesgo de hipotermia).',
      'En caballos: verificar retracción del pene para prevenir disfunción permanente.',
      'PCV/PT en pacientes anémicos (posible secuestro esplénico transitorio).'
    ],
    interferencia_laboratorio: [
      'Disminución de respuesta en pruebas intradérmicas de alergia (antihistamínico).',
      'Disminución transitoria del hematocrito (secuestro esplénico).'
    ],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Premedicación',
          vias: ['IM', 'SC', 'IV'],
          frecuencia: { texto_ui: 'Una sola vez según protocolo' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.02, dosis_min: 0.02, dosis_max: 0.05, unidad_calculo: 'mg/kg' },
          notas: 'Reducir dosis de inducción anestésica en ~30%.'
        },
        {
          indicacion: 'Tranquilización/Sedación',
          vias: ['IM', 'SC', 'IV'],
          frecuencia: { texto_ui: 'Una sola vez según necesidad' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.03, dosis_min: 0.03, dosis_max: 0.125, unidad_calculo: 'mg/kg' },
          notas: 'Dosis máxima total recomendada frecuentemente 3-4 mg/perro, NO mg/kg.'
        }
      ],
      gatos: [
        {
          indicacion: 'Sedación preanestesia',
          vias: ['IV', 'IM', 'SC'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.01, dosis_min: 0.01, dosis_max: 0.1, unidad_calculo: 'mg/kg' },
          notas: 'Uso extra-label.'
        },
        {
          indicacion: 'Obstrucción uretral',
          vias: ['IM', 'PO'],
          frecuencia: { texto_ui: 'Cada 8h' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0.25, dosis_min: 0.25, dosis_max: 2.5, unidad_calculo: 'mg/gato' },
          notas: '0.25 mg/gato IM o 2.5 mg/gato PO cada 8h.'
        }
      ],
      caballos: [
        {
          indicacion: 'Sedación / restricción',
          vias: ['IM', 'IV'],
          frecuencia: { texto_ui: 'Una sola vez según procedimiento' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.05, dosis_min: 0.05, dosis_max: 0.1, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Laminitis',
          vias: ['IM', 'IV', 'SC'],
          frecuencia: { texto_ui: 'Según protocolo' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.05, dosis_min: 0.04, dosis_max: 0.066, unidad_calculo: 'mg/kg' }
        }
      ],
      exoticos: [
        {
          indicacion: 'Ferrets',
          vias: ['IM', 'SC'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.25, dosis_min: 0.25, dosis_max: 0.75, unidad_calculo: 'mg/kg' },
          notas: 'Tranquilización.'
        },
        {
          indicacion: 'Conejos',
          vias: ['IM', 'SC'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.75, dosis_min: 0.75, dosis_max: 1, unidad_calculo: 'mg/kg' },
          notas: 'Sedación o premedicación según indicación.'
        },
        {
          indicacion: 'Reptiles',
          vias: ['IM'],
          frecuencia: { texto_ui: 'Según protocolo' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.5, dosis_min: 0.5, dosis_max: 0.5, unidad_calculo: 'mg/kg' },
          notas: 'Uso preanestésico frecuente.'
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: [
        'Pacientes en tratamiento con organofosforados.',
        'Hipotensión, shock, hipovolemia, deshidratación grave.',
        'Cardiopatías severas.'
      ],
      advertencias_criticas: [
        'MUTACIÓN MDR1 (ABCB1-1delta): Evitar o reducir dosis un 30-50% en homocigotos.',
        'Reversión de epinefrina: Contraindicada en hipotensión inducida por acepromacina (empeora el cuadro).',
        'Administración intraarterial: Riesgo severo de muerte, convulsiones y excitación extrema.'
      ],
      precauciones: ['Cuidado en razas braquicefálicas (riesgo de síncope vagal en Boxers).', 'Disfunción hepática (metabolismo alterado).'],
      manejo_sobredosis: 'Soporte cardiovascular (fluidos). Agentes presores alfa-adrenérgicos (norepinefrina/fenilefrina). NO epinefrina.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Bloqueo de receptores dopaminérgicos, alfa-1 adrenérgicos, anticolinérgicos y antihistamínicos.',
      farmacocinetica: 'Metabolismo hepático. Inicio 15-30 min. Duración 3-8 horas. No tiene agente de reversión.',
      efectos_adversos: 'Hipotensión, hipotermia, protrusión nictitante, protrusión peneana (equinos).'
    },
    presentaciones_comerciales: [
      { tipo: 'Inyectable', concentracion_texto: '10 mg/mL', valor_concentracion: 10, unidad_concentracion: 'mg/ml' },
      { tipo: 'Tabletas', concentracion_texto: '10 mg', valor_concentracion: 10, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '25 mg', valor_concentracion: 25, unidad_concentracion: 'mg' }
    ]
  },
  {
    id: 'acetaminofen',
    color: '#f97316',
    meta_data: {
      nombre_generico: 'Acetaminofén (Paracetamol)',
      nombres_comerciales: ['Tylenol®', 'Genéricos varios'],
      grupo_farmacologico: 'Analgésico, Antipirético (No opioide, no AINE)',
      status_regulatorio: 'Uso humano; sin productos de etiqueta veterinaria aprobados (Extra-label en medicina veterinaria).',
      notas_generales: 'Uso altamente restrictivo debido a toxicidad severa en felinos y mustélidos.'
    },
    resumen_clinico: {
      usos_principales: 'Analgesia crónica en perros donde NSAIDs/opioides están contraindicados; antipirético.',
      mecanismo_efecto: 'Inhibición de enzimas ciclooxigenasa y peroxidasa; posible actividad serotoninérgica central.',
      consideraciones: 'Falta de actividad antiinflamatoria significativa comparado con AINEs. No inhibe la agregación plaquetaria.'
    },
    informacion_cliente: [
      '**CONTRAINDICACIÓN ABSOLUTA:** Nunca usar en gatos ni hurones. Riesgo mortal.',
      'Administrar bajo estricta supervisión veterinaria.',
      'No combinar con otros medicamentos para el dolor o fiebre sin autorización expresa del veterinario.',
      'Si nota signos de toxicidad (vómitos persistentes, ictericia, anorexia, heces con sangre), contacte al veterinario de inmediato.',
      'Mantener fuera del alcance de niños.'
    ],
    monitoreo_paciente: [
      'Monitoreo periódico de enzimas hepáticas (ALT, ALP), función renal y perfil hematológico completo en terapia crónica.',
      'Evaluación de signos de ictericia y mucosas.',
      'Monitoreo de deshidratación en pacientes con dolor crónico.'
    ],
    interferencia_laboratorio: ['Puede causar resultados falsos positivos en la medición urinaria de ácido 5-hidroxiindolacético (5-HIAA).'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Analgésico/Antipirético',
          vias: ['PO', 'Rectal'],
          frecuencia: { texto_ui: 'Cada 8h o cada 12h si excede 5 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 15, unidad_calculo: 'mg/kg' },
          notas: 'Si el tratamiento excede 5 días, considerar ajuste a cada 12h en el rango bajo.'
        }
      ],
      caballos: [
        {
          indicacion: 'Analgésico/Antipirético',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Una vez al día o cada 12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 20, dosis_min: 20, dosis_max: 20, unidad_calculo: 'mg/kg' }
        }
      ],
      pequenos_mamiferos: [
        {
          indicacion: 'Analgésico',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Si se administra en agua de bebida' },
          math: { tipo_calculo: 'mg/ml', dosis_recomendada: 1, dosis_min: 1, dosis_max: 2, unidad_calculo: 'mg/mL' },
          notas: 'Referencia a Children’s Tylenol.'
        }
      ],
      gatos_hurones: [
        {
          indicacion: 'Uso',
          vias: ['N/A'],
          frecuencia: { texto_ui: 'Contraindicado' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg' },
          notas: '**CONTRAINDICADO.** Toxicidad severa a cualquier dosis.'
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Gatos (deficiencia de glucuronil transferasa).', 'Hurones (sensibilidad similar a felinos).', 'Sugar gliders y erizos (seguridad no determinada).'],
      advertencias_criticas: ['Methemoglobinemia: Riesgo severo en gatos y perros a dosis altas.', 'Hepatotoxicidad: Riesgo por uso crónico en perros incluso a dosis terapéuticas.', 'Keratoconjunctivitis sicca: Posible a dosis >30 mg/kg.'],
      precauciones: ['Sensibilidad idiosincrática en algunos individuos.', 'Pacientes con enfermedad hepática preexistente.'],
      manejo_sobredosis: 'Descontaminación GI (si es reciente). Tratamiento específico: N-acetilcisteína (preferiblemente IV), S-adenosilmetionina (SAMe), soporte con oxígeno y fluidoterapia. No usar epinefrina en caso de shock por hipotensión.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibición central y periférica de la síntesis de prostaglandinas (vía COX/peroxidasa).',
      farmacocinetica: 'Perros: Biodisponibilidad ~45%. Vida media 1-4h. Caballos: Biodisponibilidad 91%, vida media 2-4h. Metabolismo hepático extenso.',
      efectos_adversos: 'Potencialmente tóxico a dosis elevadas.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '80 mg (masticable)', valor_concentracion: 80, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '160 mg', valor_concentracion: 160, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '325 mg', valor_concentracion: 325, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '500 mg', valor_concentracion: 500, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '650 mg (ER)', valor_concentracion: 650, unidad_concentracion: 'mg' },
      { tipo: 'Líquidos', concentracion_texto: '32 mg/mL', valor_concentracion: 32, unidad_concentracion: 'mg/ml' },
      { tipo: 'Supositorios', concentracion_texto: '60-650 mg' }
    ]
  },
  {
    id: 'acetazolamida',
    color: '#60a5fa',
    meta_data: {
      nombre_generico: 'Acetazolamida',
      nombres_comerciales: ['Diamox®'],
      grupo_farmacologico: 'Inhibidor de la anhidrasa carbónica; Diurético',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'A pesar de ser una sulfonamida, no presenta reactividad cruzada clínica relevante con las sulfonamidas antibacterianas.'
    },
    resumen_clinico: {
      usos_principales: 'Tratamiento de glaucoma, alcalosis metabólica, HYPP en caballos y presión de LCR aumentada.',
      mecanismo_efecto: 'Inhibición no competitiva y reversible de la enzima anhidrasa carbónica, reduciendo la formación de iones hidrógeno y bicarbonato.',
      consideraciones: 'Requiere monitoreo electrolítico crónico. La alcalinización de la orina afecta la excreción de otros fármacos.'
    },
    informacion_cliente: [
      'Administrar con comida si se presenta malestar gastrointestinal.',
      'Los caballos bajo tratamiento deben tener acceso libre a agua fresca y alimento.',
      'Informar inmediatamente al veterinario si el animal presenta debilidad, temblores, convulsiones, cambios de comportamiento o respiración rápida.',
      'No omitir las visitas de control de laboratorio.'
    ],
    monitoreo_paciente: [
      'Electrolitos séricos (especialmente potasio, riesgo de hipopotasemia).',
      'Estado ácido-base (venoso).',
      'Tonometría (si se usa para glaucoma).',
      'CBC y química sérica basal y periódica en uso crónico.',
      'Estado de hidratación.'
    ],
    interferencia_laboratorio: [
      'Falsos positivos para proteína en orina (métodos bromofenol azul, ácido sulfosalicílico, etc.).',
      'Puede reducir la captación de yodo tiroideo (disminución aparente de hormonas tiroideas).',
      'Interferencia con HPLC para teofilina.'
    ],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Glaucoma / Alcalosis',
          vias: ['PO', 'IV'],
          frecuencia: { texto_ui: 'Cada 8-12 horas' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 4, dosis_min: 4, dosis_max: 10, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Disquinesia paroxística',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8 horas' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 4, dosis_min: 4, dosis_max: 4, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Glaucoma',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8-12 horas' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 6, dosis_min: 6, dosis_max: 8, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'HYPP',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 12 horas' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.2, dosis_min: 2.2, dosis_max: 4.4, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: [
        'Insuficiencia hepática severa (riesgo de coma hepático).',
        'Insuficiencia renal o adrenocortical.',
        'Desequilibrios electrolíticos preexistentes (hiponatremia, hipopotasemia, acidosis hiperclorémica).',
        'Obstrucción pulmonar severa.'
      ],
      advertencias_criticas: [
        'No confundir con acetazolamida, acetohexamida o acetaminofén.',
        'Administrar IV solo por vía intravenosa (pH alcalino).',
        'La alcalinización de la orina puede comprometer la eficacia de otros fármacos (ej. fenobarbital) o aumentar la toxicidad de otros (ej. quinidina, procainamida).'
      ],
      precauciones: ['Uso cauteloso en acidosis respiratoria severa o hematologías anormales.'],
      manejo_sobredosis: 'Soporte sintomático, control de electrolitos y equilibrio ácido-base. La acetazolamida es dializable.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Reduce la formación de humor acuoso y aumenta la excreción renal de Na+, K+ y HCO3-.',
      farmacocinetica: 'Absorción oral rápida (pico 1-3h). Distribución amplia, alta afinidad por riñones, plasma y eritrocitos. Excreción urinaria casi total como fármaco inalterado.',
      efectos_adversos: 'Gastrointestinales, sedación, depresión, hipopotasemia, hipercloremia, hiperglucemia, reacciones dermatológicas.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '125 mg', valor_concentracion: 125, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '250 mg', valor_concentracion: 250, unidad_concentracion: 'mg' },
      { tipo: 'Cápsulas liberación extendida', concentracion_texto: '500 mg', valor_concentracion: 500, unidad_concentracion: 'mg' },
      { tipo: 'Polvo para inyección', concentracion_texto: '500 mg', valor_concentracion: 500, unidad_concentracion: 'mg' }
    ]
  },
  {
    id: 'acido_acetico',
    color: '#f97316',
    meta_data: {
      nombre_generico: 'Ácido Acético (Vinagre)',
      nombres_comerciales: ['Vinagre blanco destilado'],
      grupo_farmacologico: 'Acidificante gastrointestinal',
      status_regulatorio: 'Uso humano/grado alimenticio; uso extra-label en veterinaria.',
      notas_generales: 'Diferenciar entre Ácido Acético Glacial (36-37%) y Vinagre comercial (3-5%). NUNCA usar formas concentradas.'
    },
    resumen_clinico: {
      usos_principales: 'Tratamiento de toxicosis por amoníaco en rumiantes y prevención de enterolitos en caballos.',
      mecanismo_efecto: 'Acidificación luminal para convertir amoníaco libre en amonio, reduciendo su absorción sistémica.',
      consideraciones: 'Administración exclusiva mediante sonda gástrica debido a su sabor desagradable y potencial irritante de mucosas.'
    },
    informacion_cliente: [
      '**ADVERTENCIA:** Solo utilizar vinagre estándar (3-5% de ácido acético). No utilizar formas concentradas o ácidas industriales.',
      'El vinagre es corrosivo; debe administrarse con precaución mediante sonda gástrica por personal capacitado.',
      'Mantener el producto en contenedores cerrados herméticamente.',
      'En caso de uso en rumiantes, seguir las indicaciones estrictas sobre el volumen de agua fría complementaria.'
    ],
    monitoreo_paciente: [
      'Estatus ácido-base (venoso).',
      'Monitorización clínica de signos de toxicosis por amoníaco o acidosis ruminal.',
      'Verificación de temperatura ruminal en rumiantes post-toxicosis.'
    ],
    interferencia_laboratorio: ['La acidificación de la orina puede alterar la excreción renal de fármacos, afectando potencialmente los niveles plasmáticos de salicilatos y fenobarbital.'],
    parametros_dosificacion: {
      rumiantes: [
        {
          indicacion: 'Toxicosis por urea',
          vias: ['Intraruminal'],
          frecuencia: { texto_ui: 'Una sola vez según protocolo' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 4000, dosis_min: 4000, dosis_max: 10000, unidad_calculo: 'mL' },
          notas: 'Usar vinagre 5%. Seguir con agua fría.'
        }
      ],
      caballos: [
        {
          indicacion: 'Prevención de enterolitos',
          vias: ['Oral / alimento'],
          frecuencia: { texto_ui: 'Una vez al día' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 250, dosis_min: 250, dosis_max: 250, unidad_calculo: 'mL' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Pacientes con acidosis láctica activa.', 'Uso de concentraciones >5% (peligro de quemaduras químicas graves).'],
      advertencias_criticas: ['El vinagre es potencialmente corrosivo si se usa la concentración incorrecta.', 'Descartar acidosis láctica antes de tratar la toxicosis por urea.'],
      precauciones: ['No existen interacciones directas documentadas, pero puede aumentar la absorción de azoles e hierro debido a su efecto acidificante.'],
      manejo_sobredosis: 'Apoyo sintomático según la corrosividad. Consultar centro de toxicología veterinaria ante sospecha de ingesta de ácido acético glacial o concentrado.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Acidificante local que reduce el pH luminal e inhibe la absorción de amoníaco libre.',
      farmacocinetica: 'No hay información farmacocinética sistémica relevante.',
      efectos_adversos: 'Irritación de mucosas, sabor altamente aversivo.'
    },
    presentaciones_comerciales: [
      { tipo: 'Vinagre destilado (blanco)', concentracion_texto: '3-5% ácido acético', valor_concentracion: 5 }
    ]
  },
  {
    id: 'acetilcisteina',
    color: '#10b981',
    meta_data: {
      nombre_generico: 'Acetilcisteína (N-Acetilcisteína)',
      nombres_comerciales: ['Mucomyst®', 'Acetadote®', 'ACC®'],
      grupo_farmacologico: 'Antídoto (hepatotoxinas), mucolítico',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Diferenciar el uso como antídoto sistémico del uso mucolítico inhalado. Requiere dilución estricta para vía IV.'
    },
    resumen_clinico: {
      usos_principales: 'Antídoto para toxicidad por acetaminofén, xilitol o fenol; mucolítico pulmonar; uso tópico oftálmico.',
      mecanismo_efecto: 'Donador de grupos tiol que repone glutatión y actúa como barredor de radicales libres; rompe puentes disulfuro en mucoproteínas.',
      consideraciones: 'La administración IV requiere filtros de 0.2 micras. La nebulización puede inducir broncoespasmo.'
    },
    informacion_cliente: [
      '**ADVERTENCIA:** El uso en nebulización puede causar irritación, tos o dificultad respiratoria; monitorear estrechamente.',
      'El producto tiene un olor y sabor desagradables; se prefieren sondas gástricas para la administración oral.',
      'Si se administra por vía intravenosa, se requiere dilución adecuada y el uso de filtros especializados.',
      'En casos de ingestión de tóxicos, el tratamiento debe ser supervisado profesionalmente de inmediato.'
    ],
    monitoreo_paciente: [
      'Función respiratoria: evaluar presencia de tos, sibilancias o disnea.',
      'Estatus ácido-base y electrolitos en pacientes con toxicosis sistémica.',
      'Enzimas hepáticas (ALT, ALP) y bilirrubina en pacientes con hepatotoxicidad.',
      'Estado de hidratación.'
    ],
    interferencia_laboratorio: ['Puede interferir con la interpretación de pruebas de función hepática si se administra en dosis masivas.'],
    parametros_dosificacion: {
      perros_gatos: [
        {
          indicacion: 'Antídoto hepatotoxicidad',
          vias: ['IV', 'PO'],
          frecuencia: { texto_ui: 'Carga seguido de mantenimiento cada 6h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 140, dosis_min: 140, dosis_max: 180, unidad_calculo: 'mg/kg' },
          notas: 'Mantenimiento: 70 mg/kg PO o IV cada 6 horas (mínimo 7 tratamientos).'
        },
        {
          indicacion: 'Lipidosis hepática felina',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Primera dosis seguida de cada 12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 140, dosis_min: 140, dosis_max: 140, unidad_calculo: 'mg/kg' },
          notas: 'Seguido de 70 mg/kg IV cada 12h (diluir 1:4 con salina).'
        },
        {
          indicacion: 'Mielopatía degenerativa en perros',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 25, dosis_min: 25, dosis_max: 25, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Bolsa gutural',
          vias: ['Instilación'],
          frecuencia: { texto_ui: 'Según protocolo' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 20, dosis_min: 20, dosis_max: 20, unidad_calculo: 'g' },
          notas: 'Instilar solución al 20% en bolsa gutural.'
        },
        {
          indicacion: 'Impactación meconio',
          vias: ['Enema'],
          frecuencia: { texto_ui: 'Una sola vez' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 8, dosis_min: 8, dosis_max: 8, unidad_calculo: 'g' },
          notas: '4% solución retención 30-45 min o 8 g en 20 g bicarbonato en 200 mL agua.'
        }
      ],
      exoticos: [
        {
          indicacion: 'Nebulización en tortugas',
          vias: ['Nebulización'],
          frecuencia: { texto_ui: 'Según protocolo' },
          math: { tipo_calculo: 'mg/mL', dosis_recomendada: 22, dosis_min: 22, dosis_max: 22, unidad_calculo: 'mg/mL' }
        },
        {
          indicacion: 'Úlceras de roedores',
          vias: ['Tópico'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 5, dosis_min: 5, dosis_max: 10, unidad_calculo: '%' },
          notas: 'Instilación tópica junto con EDTA.'
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad conocida al fármaco.', 'Broncoespasmo activo o asma severa.'],
      advertencias_criticas: ['No mezclar IV con agentes oxidantes (caucho, cobre, hierro).', 'La nebulización puede causar broncoconstricción inmediata; tener broncodilatadores listos.', 'La absorción oral puede ser reducida por carbón activado.'],
      precauciones: ['Uso cauteloso en neonatos y pacientes con compromiso respiratorio severo.', 'Estabilidad del vial abierto: 96 horas refrigerado.'],
      manejo_sobredosis: 'Dosis de LD50 reportada en perros: 1 g/kg PO y 700 mg/kg IV. Soporte sintomático.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Mucolítico directo sobre enlaces disulfuro de mucinas. Como antídoto, estimula la síntesis de glutatión hepático.',
      farmacocinetica: 'Biodisponibilidad oral baja (~20% en gatos). Vida media en gatos: 0.8h (IV) a 1.3h (PO).',
      efectos_adversos: 'Vómitos, urticaria, broncoespasmo, hipotensión.'
    },
    presentaciones_comerciales: [
      { tipo: 'Inyectable (20%)', concentracion_texto: '200 mg/mL', valor_concentracion: 200, unidad_concentracion: 'mg/ml' },
      { tipo: 'Solución para inhalación/oral', concentracion_texto: '10%', valor_concentracion: 10, unidad_concentracion: '%' },
      { tipo: 'Solución para inhalación/oral', concentracion_texto: '20%', valor_concentracion: 20, unidad_concentracion: '%' }
    ]
  },
  {
    id: 'aciclovir',
    color: '#34d399',
    meta_data: {
      nombre_generico: 'Aciclovir (Acicloguanosina)',
      nombres_comerciales: ['Zovirax®', 'Genéricos varios'],
      grupo_farmacologico: 'Antiviral (Análogo de nucleósido)',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Se debe usar con extrema precaución. En gatos, el uso está formalmente desaconsejado debido a toxicidad severa.'
    },
    resumen_clinico: {
      usos_principales: 'Tratamiento de virus del herpes en aves, adjunto en herpesvirus canino neonatal y parvovirosis canina.',
      mecanismo_efecto: 'Análogo de la guanina que inhibe la replicación de ADN viral tras ser activado por la timidina quinasa viral.',
      consideraciones: 'Absorción oral deficiente en muchas especies. Requiere ajuste de dosis en insuficiencia renal.'
    },
    informacion_cliente: [
      '**ADVERTENCIA:** NO utilizar en gatos (riesgo de supresión de médula ósea y fallo renal/hepático).',
      'En aves, la administración IM puede causar necrosis tisular; prefiera otras vías.',
      'Los efectos secundarios frecuentes son gastrointestinales (vómitos, diarrea, anorexia).',
      'El paciente requiere monitoreo constante de la función renal durante el tratamiento.'
    ],
    monitoreo_paciente: [
      'Función renal (BUN, creatinina) especialmente en terapia IV o prolongada.',
      'Estado de hidratación.',
      'Monitorización de signos neurológicos o de médula ósea en pacientes sensibles.'
    ],
    interferencia_laboratorio: ['Puede elevar las concentraciones séricas de teofilina.'],
    parametros_dosificacion: {
      aves: [
        {
          indicacion: 'Herpesvirus de Pacheco',
          vias: ['PO', 'IM'],
          frecuencia: { texto_ui: 'Cada 8h por 7-14 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 80, dosis_min: 80, dosis_max: 80, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Profilaxis aviar',
          vias: ['IM', 'Oral'],
          frecuencia: { texto_ui: 'Según protocolo' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 25, dosis_min: 25, dosis_max: 25, unidad_calculo: 'mg' }
        }
      ],
      perros: [
        {
          indicacion: 'Herpesvirus neonatal',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 6h por 5 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Parvovirus profilaxis',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Cada 8h por 5 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 20, dosis_min: 20, dosis_max: 20, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Herpesvirus',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Cada 12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        }
      ],
      reptiles: [
        {
          indicacion: 'Herpesvirus en tortugas',
          vias: ['PO', 'Tópico'],
          frecuencia: { texto_ui: 'Según protocolo' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 80, dosis_min: 80, dosis_max: 80, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Uso',
          vias: ['N/A'],
          frecuencia: { texto_ui: 'Contraindicado' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg' },
          notas: '**CONTRAINDICADO.** Riesgo alto de toxicidad sistémica.'
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Gatos (toxicidad fatal).', 'Hipersensibilidad conocida al fármaco.', 'Deshidratación severa sin soporte de fluidos.'],
      advertencias_criticas: ['Nefrotoxicidad: Cristalización en túbulos renales; riesgo aumentado con administración IV rápida o en pacientes deshidratados.', 'Solución IV alcalina requiere dilución estricta (≤ 7 mg/mL) y administración lenta.'],
      precauciones: ['Uso cauteloso en pacientes con insuficiencia hepática, déficits neurológicos o hipoxia.'],
      manejo_sobredosis: 'Descontaminación GI si la ingesta es reciente (>150 mg/kg). Soporte de fluidos IV para forzar diuresis. Hemodiálisis es efectiva.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibición de la ADN polimerasa viral.',
      farmacocinetica: 'Biodisponibilidad oral variable; vida media corta (2-3 horas en mamíferos).',
      efectos_adversos: 'Tromboflebitis, insuficiencia renal aguda, temblores, supresión de médula ósea (felinos).' 
    },
    presentaciones_comerciales: [
      { tipo: 'Oral', concentracion_texto: 'Tabletas 400 mg', valor_concentracion: 400, unidad_concentracion: 'mg' },
      { tipo: 'Oral', concentracion_texto: 'Tabletas 800 mg', valor_concentracion: 800, unidad_concentracion: 'mg' },
      { tipo: 'Oral', concentracion_texto: 'Cápsulas 200 mg', valor_concentracion: 200, unidad_concentracion: 'mg' },
      { tipo: 'Oral', concentracion_texto: 'Suspensión 40 mg/mL', valor_concentracion: 40, unidad_concentracion: 'mg/ml' },
      { tipo: 'Inyectable', concentracion_texto: '50 mg/mL', valor_concentracion: 50, unidad_concentracion: 'mg/ml' },
      { tipo: 'Tópico', concentracion_texto: 'Crema/Ungüento 5%' }
    ]
  },
  {
    id: 'afoxolaner',
    color: '#0ea5e9',
    meta_data: {
      nombre_generico: 'Afoxolaner',
      nombres_comerciales: ['NexGard®'],
      grupo_farmacologico: 'Isoxazolinas (Ectoparasiticida)',
      status_regulatorio: 'Veterinario (FDA-aprobado para perros); uso extra-label en otras especies.',
      notas_generales: 'Potencial para efectos adversos neurológicos. Usar con extrema precaución en pacientes con historial de epilepsia o trastornos neurológicos.'
    },
    resumen_clinico: {
      usos_principales: 'Tratamiento y prevención de pulgas, control de garrapatas y otras ectoparasitosis; uso extra-label en demodicosis y ácaros del oído.',
      mecanismo_efecto: 'Antagonista de los canales de cloruro mediados por GABA en parásitos, provocando hiperexcitación neuronal y parálisis tras la ingestión del fármaco.',
      consideraciones: 'Requiere que el parásito se alimente para absorber el fármaco.'
    },
    informacion_cliente: [
      'Puede administrarse con o sin alimentos.',
      'Si el animal vomita dentro de las 2 horas posteriores a la administración, repetir la dosis completa.',
      'Si olvida una dosis, administre inmediatamente y establezca un nuevo calendario mensual.',
      'Tratar a todos los animales del hogar para minimizar la reinfestación.',
      'Mantener fuera del alcance de los niños y otras mascotas.',
      'Contactar al veterinario ante cualquier signo neurológico.'
    ],
    monitoreo_paciente: [
      'Monitorear la eficacia clínica.',
      'Observar la aparición de signos neurológicos.'
    ],
    interacciones_medicamentosas: ['No se han reportado interacciones significativas.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Dosis estándar',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Una vez al mes' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Demodicosis extra-label',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Días 0, 14, 28 y 56' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 7, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Sarna sarcóptica',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Días 0 y 28' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Ácaros del oído',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Única o mensual por 2 meses' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Ácaros del oído / pulgas',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' }
        }
      ],
      cerdos: [
        {
          indicacion: 'Sarna sarcóptica',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' }
        }
      ],
      aves: [
        {
          indicacion: 'Piojos de aves',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['No existen contraindicaciones específicas en etiqueta, pero usar con precaución extrema en animales con historial de convulsiones.'],
      advertencias_criticas: ['Potencial neurológico: riesgo de temblores, ataxia y convulsiones.', 'No se ha evaluado la seguridad en animales en reproducción, gestación o lactancia.'],
      efectos_adversos: ['Vómitos, piel seca/escamosa, diarrea, letargia, anorexia.', 'Reacciones neurológicas, dérmicas e hipersensibilidad.']
    },
    farmacologia_clinica: {
      farmacocinetica: 'Biodisponibilidad ~75%. Pico de concentración en 2 a 6 horas. Unión a proteínas >99%. Vida media terminal ~15 días. Excreción biliar y renal.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas masticables', concentracion_texto: '11.3 mg', valor_concentracion: 11.3, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas masticables', concentracion_texto: '28.3 mg', valor_concentracion: 28.3, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas masticables', concentracion_texto: '68 mg', valor_concentracion: 68, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas masticables', concentracion_texto: '136 mg', valor_concentracion: 136, unidad_concentracion: 'mg' }
    ]
  },
  {
    id: 'aglepristona',
    color: '#f43f5e',
    meta_data: {
      nombre_generico: 'Aglepristona',
      nombres_comerciales: ['Alizin®', 'Alizine®'],
      grupo_farmacologico: 'Antagonista de receptores de progesterona (esteroide sintético)',
      status_regulatorio: 'Veterinario; comercializado en varios países.',
      notas_generales: 'Extremadamente peligroso para mujeres embarazadas. No manipular ni administrar si se está gestando.'
    },
    resumen_clinico: {
      usos_principales: 'Terminación de gestación, inducción al parto, tratamiento médico de piometra y manejo de hiperplasia mamaria felina.',
      mecanismo_efecto: 'Antagonista competitivo de la progesterona en receptores uterinos y glucocorticoides.',
      consideraciones: 'La terminación de la gestación ocurre en 4-7 días post-administración. Induce apertura cervical y contractilidad miometrial.'
    },
    informacion_cliente: [
      '**ADVERTENCIA DE SEGURIDAD:** Las mujeres embarazadas no deben manipular ni administrar este medicamento bajo ninguna circunstancia.',
      'Puede causar dolor, inflamación o ulceración en el sitio de inyección.',
      'En interrupción de gestación, puede verse descarga vaginal mucoide parduzca antes de la expulsión fetal.',
      'Si se utiliza para piometra, el seguimiento veterinario estricto es obligatorio.'
    ],
    monitoreo_paciente: [
      'Ecografía abdominal post-tratamiento.',
      'Monitoreo de glucosa en sangre en casos de diabetes.',
      'Perfil hematológico y bioquímico.',
      'Vigilancia de signos de parto en inducciones.'
    ],
    interacciones_medicamentosas: ['No se han reportado interacciones significativas.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Terminación de gestación',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Repetir una vez tras 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Inducción al parto',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Una dosis, repetir a las 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 15, dosis_min: 15, dosis_max: 15, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Piometra',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Protocolo múltiple' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Terminación de gestación',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Cada 24h por 2 dosis' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Hiperplasia mamaria',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Días 1, 2 y 7' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 12.5, dosis_min: 10, dosis_max: 15, unidad_calculo: 'mg/kg' }
        }
      ],
      conejos: [
        {
          indicacion: 'Prevención de implantación',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Dos dosis con 24h de diferencia' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        }
      ],
      ovejas: [
        {
          indicacion: 'Inducción de parto',
          vias: ['SC'],
          frecuencia: { texto_ui: 'Una vez al día por 2 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 7.5, dosis_min: 5, dosis_max: 10, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Gestación salvo para terminación o inducción.', 'Pacientes con salud precaria, diabetes, insuficiencia hepática o renal.', 'Hipoadrenocorticismo o predisposición genética.'],
      advertencias_criticas: ['Manipulación humana: Riesgo de aborto accidental en mujeres gestantes.', 'Reacciones locales: Evitar inyectar más de 5 mL por sitio.'],
      precauciones: ['Cuidado en enfermedades respiratorias crónicas y cardiovasculares.'],
      manejo_sobredosis: 'Soporte sintomático. Dosis de hasta 3x no han mostrado efectos sistémicos graves en perras.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Bloqueo competitivo del receptor de progesterona.',
      farmacocinetica: 'Vida media lenta (~6 días). Eliminación principal por heces (~90%).',
      efectos_adversos: 'Anorexia, excitación, depresión, dolor, diarrea, infecciones uterinas.'
    },
    presentaciones_comerciales: [
      { tipo: 'Inyectable', concentracion_texto: '30 mg/mL', valor_concentracion: 30, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'albendazol',
    color: '#22c55e',
    meta_data: {
      nombre_generico: 'Albendazol',
      nombres_comerciales: ['Valbazen®', 'Albenza®'],
      grupo_farmacologico: 'Antihelmíntico benzimidazol',
      status_regulatorio: 'Aprobado por FDA para ganado; uso extra-label en otras especies.',
      notas_generales: 'Actividad amplia contra nematodos, trematodos, cestodos y protozoos. Uso en pequeños animales no recomendado por toxicidad medular grave.'
    },
    resumen_clinico: {
      usos_principales: 'Control de helmintos en bovinos/ovinos/caprinos y uso extra-label en pequeños mamíferos.',
      mecanismo_efecto: 'Inhibición de la polimerización de tubulina en los microtúbulos del parásito.',
      consideraciones: 'Evitar en hembras gestantes debido a efectos teratogénicos.'
    },
    informacion_cliente: [
      'Agitar bien antes de usar.',
      'Se puede administrar con o sin comida.',
      'Contactar al veterinario ante signos de toxicidad.',
      'NO usar en hembras lactantes o de ganado lechero en edad reproductiva.'
    ],
    monitoreo_paciente: [
      'Pruebas de recuento de huevos fecales pre y post-tratamiento.',
      'CBC y enzimas hepáticas cada 4-6 semanas en uso prolongado.',
      'Vigilancia estricta de efectos adversos en especies no aprobadas.'
    ],
    interacciones_medicamentosas: ['No se han reportado interferencias significativas.'],
    parametros_dosificacion: {
      bovinos: [
        {
          indicacion: 'Parásitos internos',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        }
      ],
      ovinos: [
        {
          indicacion: 'Parásitos internos',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 7.5, dosis_min: 7.5, dosis_max: 7.5, unidad_calculo: 'mg/kg' }
        }
      ],
      caprinos_no_lactantes: [
        {
          indicacion: 'Fasciola hepatica',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        }
      ],
      camelidos: [
        {
          indicacion: 'Helmintos gastrointestinales',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Dosis única' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 15, dosis_min: 15, dosis_max: 15, unidad_calculo: 'mg/kg' }
        }
      ],
      conejos: [
        {
          indicacion: 'Encephalitozoon cuniculi',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h por 30 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 30, dosis_min: 30, dosis_max: 30, unidad_calculo: 'mg/kg' }
        }
      ],
      chinchillas: [
        {
          indicacion: 'Giardia',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h por 3 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 75, dosis_min: 50, dosis_max: 100, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Primer trimestre de gestación.', 'Lactancia sin tiempos de retiro establecidos.', 'Especies sensibles como palomas o tórtolas.'],
      advertencias_criticas: ['Toxicidad medular grave en perros/gatos; preferir fenbendazol si es eficaz.', 'Toxicidad en palomas/tórtolas: necrosis epitelial intestinal y aplasia medular.'],
      precauciones: ['Cálculo preciso de peso es vital para evitar toxicidad.'],
      manejo_sobredosis: 'Dosis altas causan fallo multiorgánico, neutropenia y muerte. Consultar toxicología inmediatamente.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Disrupción de microtúbulos del parásito y enzimas metabólicas.',
      farmacocinetica: 'Metabolismo rápido a albendazol sulfóxido y sulfona. Biodisponibilidad influenciada por la alimentación.',
      efectos_adversos: 'Anorexia, depresión, neutropenia, anemia aplásica.'
    },
    presentaciones_comerciales: [
      { tipo: 'Suspensión oral', concentracion_texto: '113.6 mg/mL', valor_concentracion: 113.6, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'albumina',
    color: '#8b5cf6',
    meta_data: {
      nombre_generico: 'Albúmina (Humana y Canina)',
      nombres_comerciales: ['Albuked®', 'Albutein®', 'Plasbumin®', 'Canine Albumin (Liofilizada)'],
      grupo_farmacologico: 'Coloide proteico natural',
      status_regulatorio: 'Uso humano (HSA); uso veterinario (CSA - no aprobado por FDA).',
      notas_generales: 'Se utiliza para aumentar la presión oncótica intravascular. El uso de albúmina humana en perros/gatos conlleva riesgo de reacciones de hipersensibilidad.'
    },
    resumen_clinico: {
      usos_principales: 'Pacientes críticos con hipoalbuminemia severa, edema refractario a cristaloides o hipotensión refractaria.',
      mecanismo_efecto: 'Aumenta la presión oncótica plasmática, movilizando fluidos del intersticio al intravascular y mantiene integridad endotelial.',
      consideraciones: 'Albúmina canina es teóricamente más segura que humana, pero la disponibilidad es limitada.'
    },
    informacion_cliente: [
      'Medicamento de uso estrictamente hospitalario.',
      'Riesgo de reacciones alérgicas severas al usar albúmina humana en perros/gatos.',
      'El cliente debe aceptar los riesgos y la necesidad de monitoreo intensivo.',
      'Se requiere evaluación veterinaria posterior para asegurar eficacia.'
    ],
    monitoreo_paciente: [
      'Albúmina sérica pre y post-tratamiento.',
      'Presión oncótica coloidal (COP).',
      'Signos de sobrecarga de volumen.',
      'Temperatura, frecuencia cardíaca y presión arterial durante la infusión.',
      'Vigilancia de reacciones retardadas.'
    ],
    interferencia_laboratorio: ['Puede causar descensos temporales en las concentraciones séricas de calcio.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Prueba de dosis',
          vias: ['IV'],
          frecuencia: { texto_ui: '15 min' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.25, dosis_min: 0.25, dosis_max: 0.25, unidad_calculo: 'mL/kg' },
          notas: '0.25 mL/kg/hora durante 15 min.'
        },
        {
          indicacion: 'Cálculo de déficit',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Según cálculo' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mL' },
          notas: '10 x (Alb. deseada - Alb. actual) x Peso (kg) x 0.3.'
        },
        {
          indicacion: 'CRI',
          vias: ['IV'],
          frecuencia: { texto_ui: '4-72h' },
          math: { tipo_calculo: 'mg/kg/h', dosis_recomendada: 0.1, dosis_min: 0.1, dosis_max: 1.7, unidad_calculo: 'mL/kg/h' }
        }
      ],
      gatos: [
        {
          indicacion: 'Uso de HSA',
          vias: ['IV'],
          frecuencia: { texto_ui: '5-10 horas' },
          math: { tipo_calculo: 'mL/kg/h', dosis_recomendada: 2, dosis_min: 2, dosis_max: 20, unidad_calculo: 'mL/kg/día' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad conocida a productos de albúmina.', 'Pacientes con sobrecarga de volumen preexistente.'],
      advertencias_criticas: ['Riesgo de anafilaxia o enfermedad del suero con HSA en perros/gatos.', 'Filtros obligatorios para HSA y CSA.'],
      precauciones: ['Cuidado extremo en pacientes con enfermedad cardiovascular o respiratoria.'],
      manejo_sobredosis: 'Evitar exceder 2.5 g/dL de albúmina sérica.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Expansión oncótica y transporte de fármacos/hormonas.',
      farmacocinetica: 'Eliminación lenta; vida media de 10-12 días con albúmina canina.',
      efectos_adversos: 'Edema, vómitos, urticaria, shock, lameness, vasculitis, fallo renal, coagulopatías.'
    },
    presentaciones_comerciales: [
      { tipo: 'Líquido (HSA)', concentracion_texto: '5%', valor_concentracion: 5, unidad_concentracion: '%' },
      { tipo: 'Líquido (HSA)', concentracion_texto: '20%', valor_concentracion: 20, unidad_concentracion: '%' },
      { tipo: 'Líquido (HSA)', concentracion_texto: '25%', valor_concentracion: 25, unidad_concentracion: '%' },
      { tipo: 'Liofilizado (CSA)', concentracion_texto: '5 g' }
    ]
  },
  {
    id: 'albuterol',
    color: '#38bdf8',
    meta_data: {
      nombre_generico: 'Albuterol (Salbutamol)',
      nombres_comerciales: ['Proventil®', 'Ventolin®'],
      grupo_farmacologico: 'Agonista beta-2 adrenérgico (simpaticomimético)',
      status_regulatorio: 'Uso humano; uso extra-label en medicina veterinaria.',
      notas_generales: 'Principalmente broncodilatador. Uso crónico en gatos controversial; limitar a rescate agudo.'
    },
    resumen_clinico: {
      usos_principales: 'Alivio del broncoespasmo agudo en gatos, asma equina y distrés respiratorio en terneros.',
      mecanismo_efecto: 'Estimula receptores beta-2 provocando relajación del músculo liso bronquial y vascular.',
      consideraciones: 'A dosis altas pierde selectividad y aumenta riesgo de taquicardia y arritmias.'
    },
    informacion_cliente: [
      'Agitar bien antes de usar; utilizar espaciador y máscara facial.',
      'No perforar inhaladores ni exponerlos a altas temperaturas (>48°C).',
      'El sonido del inhalador puede asustar a gatos; desensibilizar antes.',
      'Si el animal muestra taquicardia o debilidad, contactar al veterinario.'
    ],
    monitoreo_paciente: [
      'Respuesta clínica y esfuerzo respiratorio.',
      'Frecuencia cardíaca y ritmo.',
      'Potasio sérico.',
      'Presión arterial.'
    ],
    interferencia_laboratorio: ['Hipopotasemia inducida puede afectar la evaluación de electrolitos.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Broncodilatador',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8-12 horas' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.02, dosis_min: 0.02, dosis_max: 0.05, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Asma aguda',
          vias: ['Inhalación'],
          frecuencia: { texto_ui: 'Hasta 3 veces cada 5-15 min' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0.09, dosis_min: 0.09, dosis_max: 0.27, unidad_calculo: 'mg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Asma severa de rescate',
          vias: ['Inhalación'],
          frecuencia: { texto_ui: '3 veces cada 5-15 min' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0.54, dosis_min: 0.54, dosis_max: 0.81, unidad_calculo: 'mg' }
        },
        {
          indicacion: 'Hipoxemia en anestesia',
          vias: ['Respiratoria'],
          frecuencia: { texto_ui: 'Previo a ciclo respiratorio' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2, dosis_min: 2, dosis_max: 2, unidad_calculo: 'μg/kg' }
        }
      ],
      terneros: [
        {
          indicacion: 'Distrés respiratorio',
          vias: ['Nebulización'],
          frecuencia: { texto_ui: 'Cada 6 horas' },
          math: { tipo_calculo: 'μg/kg', dosis_recomendada: 25, dosis_min: 25, dosis_max: 25, unidad_calculo: 'μg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad a simpatomiméticos.', 'Arritmias cardíacas preexistentes.', 'Hipertiroidismo, hipertensión, diabetes, glaucoma, convulsiones.'],
      advertencias_criticas: ['Inhaladores accidentales pueden causar arritmias y muerte.', 'Uso crónico en gatos puede empeorar inflamación aérea.', 'Evitar en gestantes salvo beneficio crítico.'],
      precauciones: ['Cuidado con anestésicos inhalados por riesgo sinérgico de arritmias.'],
      manejo_sobredosis: 'Beta-bloqueadores, diazepam y potasio con cautela.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Agonista beta-2 selectivo que relaja músculo liso y promueve captación celular de potasio.',
      farmacocinetica: 'Absorción rápida tras inhalación/oral, metabolismo hepático extenso.',
      efectos_adversos: 'Taquicardia, temblores, excitación, hipopotasemia transitoria.'
    },
    presentaciones_comerciales: [
      { tipo: 'Inhalador (MDI)', concentracion_texto: '90 μg/puff', valor_concentracion: 0.09, unidad_concentracion: 'mg' },
      { tipo: 'Solución nebulización', concentracion_texto: '0.083%', valor_concentracion: 0.083, unidad_concentracion: '%' },
      { tipo: 'Solución nebulización', concentracion_texto: '0.5% (requiere dilución)', valor_concentracion: 0.5, unidad_concentracion: '%' }
    ]
  },
  {
    id: 'alendronato',
    color: '#0f766e',
    meta_data: {
      nombre_generico: 'Alendronato',
      nombres_comerciales: ['Fosamax®'],
      grupo_farmacologico: 'Bisfosfonato (Inhibidor de la resorción ósea)',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Uso clínico limitado e investigacional. Riesgo de irritación esofágica y ulceración.'
    },
    resumen_clinico: {
      usos_principales: 'Tratamiento de hipercalcemia refractaria y manejo de dolor óseo asociado a neoplasias.',
      mecanismo_efecto: 'Se une a la hidroxiapatita ósea e inhibe la función de los osteoclastos.',
      consideraciones: 'Corregir la hipocalcemia antes de iniciar el tratamiento.'
    },
    informacion_cliente: [
      'Administrar estrictamente en ayunas con agua.',
      'Mantener al animal erguido o activo por 30 minutos tras la dosis.',
      'No triturar ni dividir las tabletas a menos que se indique.',
      'Contactar al veterinario ante vómitos, anorexia o dolor al tragar.'
    ],
    monitoreo_paciente: [
      'Calcio iónico sérico mensual.',
      'Vigilancia de signos gastrointestinales.',
      'Función renal con uso crónico.'
    ],
    interferencia_laboratorio: ['Puede interferir con gammagrafías óseas.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Hipercalcemia/dolor óseo',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h en ayunas' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/perro' },
          notas: '2 mg/kg PO cada 24h en ayunas es alternativa.'
        }
      ],
      gatos: [
        {
          indicacion: 'Hipercalcemia idiopática',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Una vez por semana' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 5, dosis_min: 5, dosis_max: 10, unidad_calculo: 'mg/gato' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad conocida.', 'Anormalidades esofágicas.', 'Hipocalcemia no corregida.'],
      advertencias_criticas: ['Riesgo de esofagitis severa y ulceración.', 'Osteonecrosis mandibular posible.', 'No recomendado en insuficiencia renal severa.'],
      precauciones: ['Uso investigacional y costo elevado.'],
      manejo_sobredosis: 'No inducir vómito. Administrar antiácidos o leche. Monitorear calcio y fósforo sérico.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibición de osteoclastos y apoptosis de células óseas.',
      farmacocinetica: 'Biodisponibilidad oral bajísima (<2%). No se metaboliza; se excreta en orina.',
      efectos_adversos: 'Irritación GI, vómitos, anorexia, osteonecrosis mandibular.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '5 mg', valor_concentracion: 5, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '10 mg', valor_concentracion: 10, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '35 mg', valor_concentracion: 35, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '40 mg', valor_concentracion: 40, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '70 mg', valor_concentracion: 70, unidad_concentracion: 'mg' },
      { tipo: 'Solución oral', concentracion_texto: '70 mg/75 mL' }
    ]
  },
  {
    id: 'alfaxolona',
    color: '#a855f7',
    meta_data: {
      nombre_generico: 'Alfaxolona',
      nombres_comerciales: ['Alfaxan®', 'Alfaxan® Multidose IDX'],
      grupo_farmacologico: 'Anestésico general neuroactivo (esteroide)',
      status_regulatorio: 'Sustancia controlada; FDA aprobado para perros y gatos. Indexed para especies menores.',
      notas_generales: 'Anestésico de acción rápida sin propiedades analgésicas. Debe administrarse IV lenta para minimizar apnea.'
    },
    resumen_clinico: {
      usos_principales: 'Inducción y mantenimiento de anestesia en perros/gatos; uso extra-label en exóticos.',
      mecanismo_efecto: 'Modulación de receptores GABA-A neuronales, facilitando transporte de cloruro.',
      consideraciones: 'Administración rápida IV aumenta riesgo de apnea. Recuperación puede asociarse a excitación.'
    },
    informacion_cliente: [
      'Medicamento de uso hospitalario supervisado.',
      'El paciente debe permanecer en ambiente tranquilo durante la recuperación.',
      'Se requiere monitorización constante de la respiración.',
      'Informar al veterinario si hay hipersensibilidad o problemas respiratorios previos.'
    ],
    monitoreo_paciente: [
      'Ventilación y saturación de oxígeno.',
      'Frecuencia cardíaca y presión arterial.',
      'Temperatura.',
      'Grado de excitación o temblores en recuperación.'
    ],
    interferencia_laboratorio: ['No se han reportado interferencias significativas.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Inducción IV',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Seguir al efecto' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 1.5, dosis_min: 1.5, dosis_max: 4.5, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Mantenimiento IV',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 1.2, dosis_min: 1.2, dosis_max: 2.2, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Inducción IV',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Ajustar según premedicación' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.2, dosis_min: 2.2, dosis_max: 9.7, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Mantenimiento IV',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 1.1, dosis_min: 1.1, dosis_max: 1.5, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Inducción IV',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Tras premedicación' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 1.5, dosis_min: 1, dosis_max: 2, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'TIVA/CRI',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Hora' },
          math: { tipo_calculo: 'mg/kg/h', dosis_recomendada: 1.5, dosis_min: 1.5, dosis_max: 5, unidad_calculo: 'mg/kg/h' }
        }
      ],
      conejos: [
        {
          indicacion: 'Sedación profunda IM',
          vias: ['IM'],
          frecuencia: { texto_ui: 'Una vez' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 5, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Inducción IM',
          vias: ['IM'],
          frecuencia: { texto_ui: 'Una vez' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 6, dosis_min: 6, dosis_max: 6, unidad_calculo: 'mg/kg' }
        }
      ],
      ferrets: [
        {
          indicacion: 'Inducción',
          vias: ['IV', 'IM'],
          frecuencia: { texto_ui: 'Una vez' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2.5, dosis_min: 2.5, dosis_max: 2.5, unidad_calculo: 'mg/kg' },
          notas: 'Dosis ≥10-20 mg/kg pueden ser fatales.'
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad al fármaco.', 'Situaciones donde la anestesia general esté contraindicada.'],
      advertencias_criticas: ['Apnea post-inducción frecuente.', 'Administración IV debe ser lenta (~60 segundos).', 'Excitación en recuperación.'],
      precauciones: ['Pacientes hepáticos, geriátricos o debilitados requieren reducción de dosis.'],
      manejo_sobredosis: 'Soporte respiratorio y cardiovascular. No existe agente de reversión.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Agonista del receptor GABA-A (neuroesteroide).',
      farmacocinetica: 'Metabolismo hepático. Excreción fecal y renal. Vida media corta.',
      efectos_adversos: 'Apnea, hipotensión, hipoxemia, temblores, excitación en recuperación.'
    },
    presentaciones_comerciales: [
      { tipo: 'Inyectable', concentracion_texto: '10 mg/mL', valor_concentracion: 10, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'alfentanilo',
    color: '#e11d48',
    meta_data: {
      nombre_generico: 'Alfentanilo',
      nombres_comerciales: ['Alfenta®'],
      grupo_farmacologico: 'Agonista opioide potente (mu)',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria. Sustancia controlada DEA C-II.',
      notas_generales: 'Opioide de alta potencia y vida media corta. Requiere manejo con equipo de precisión y verificación doble.'
    },
    resumen_clinico: {
      usos_principales: 'Analgesia y sedación en anestesia general para perros y gatos.',
      mecanismo_efecto: 'Agonista de receptores mu opioides, proporcionando sedación y analgesia.',
      consideraciones: 'Requiere manejo cuidadoso por su alta potencia y alto riesgo de hipoxemia.'
    },
    informacion_cliente: [
      'Debe ser manejado exclusivamente por personal veterinario bajo monitorización estricta.',
      'Su potencia exige máxima precaución en la medición de dosis.',
      'El paciente debe permanecer bajo vigilancia hospitalaria con capacidad de ventilación asistida.'
    ],
    monitoreo_paciente: [
      'Frecuencia y ritmo cardíaco.',
      'Presión arterial.',
      'Función respiratoria (SpO2/ETCO2).',
      'Nivel de sedación y analgesia.'
    ],
    interferencia_laboratorio: ['Puede aumentar niveles de amilasa y lipasa por aumento de presión del esfínter de Oddi.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Premedicación',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Una vez' },
          math: { tipo_calculo: 'μg/kg', dosis_recomendada: 5, dosis_min: 5, dosis_max: 10, unidad_calculo: 'μg/kg' }
        },
        {
          indicacion: 'CRI para analgesia',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Carga y mantenimiento' },
          math: { tipo_calculo: 'μg/kg/min', dosis_recomendada: 0.5, dosis_min: 0.5, dosis_max: 1, unidad_calculo: 'μg/kg/min' }
        }
      ],
      gatos: [
        {
          indicacion: 'Analgesia adjunta',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Carga y mantenimiento' },
          math: { tipo_calculo: 'μg/kg/min', dosis_recomendada: 0.8, dosis_min: 0.8, dosis_max: 1, unidad_calculo: 'μg/kg/min' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad a opioides.', 'Pacientes sin capacidad de soporte ventilatorio/intubación.'],
      advertencias_criticas: ['Potencia extremadamente alta.', 'Confusión con fentanilo, remifentanilo o sufentanilo.', 'Depresión respiratoria severa con depresores del SNC.'],
      precauciones: ['Geriatría, obesidad, disfunción hepática/renal y trauma craneoencefálico.'],
      manejo_sobredosis: 'Naloxona. Dosis múltiples pueden ser necesarias.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Agonista mu-opioide potente.',
      farmacocinetica: 'Inicio muy rápido (<2 min). Vida media corta (20-60 min). Metabolismo hepático extenso.',
      efectos_adversos: 'Bradicardia, taquicardia, depresión respiratoria, rigidez muscular.'
    },
    presentaciones_comerciales: [
      { tipo: 'Inyectable', concentracion_texto: '500 μg/mL', valor_concentracion: 0.5, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'alopurinol',
    color: '#facc15',
    meta_data: {
      nombre_generico: 'Alopurinol',
      nombres_comerciales: ['Zyloprim®'],
      grupo_farmacologico: 'Inhibidor de xantina oxidasa / Análogo de purinas',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Reduce la formación de ácido úrico. Requiere dieta baja en purinas en tratamientos crónicos.'
    },
    resumen_clinico: {
      usos_principales: 'Tratamiento de urolitos de urato, gota y leishmaniasis adjunta.',
      mecanismo_efecto: 'Inhibe xantina oxidasa, reduciendo ácido úrico.',
      consideraciones: 'No aumenta excreción renal de ácido úrico. Ajustar dosis en insuficiencia renal.'
    },
    informacion_cliente: [
      'Administrar preferiblemente con comida si aparecen molestias gastrointestinales.',
      'Acceso constante a agua fresca.',
      'Recomendado dieta baja en purinas en tratamientos crónicos.',
      'Contactar al veterinario ante erupciones, fatiga o ictericia.'
    ],
    monitoreo_paciente: [
      'Monitoreo de orina y pH urinario.',
      'CBC y perfil bioquímico en terapia prolongada.',
      'Monitoreo de respuesta clínica en leishmaniasis.'
    ],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Urolitos de urato',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 15, dosis_min: 15, dosis_max: 15, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Prevención de urolitos',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 12-24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 5, dosis_min: 5, dosis_max: 7, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Leishmaniasis',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 12 o 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 15, dosis_min: 10, dosis_max: 20, unidad_calculo: 'mg/kg' }
        }
      ],
      aves: [
        {
          indicacion: 'Gota',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Según especie' },
          math: { tipo_calculo: 'mg/mL', dosis_recomendada: 1, dosis_min: 1, dosis_max: 1, unidad_calculo: 'mg/mL' }
        }
      ],
      reptiles: [
        {
          indicacion: 'Gota',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 20, dosis_min: 20, dosis_max: 25, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad conocida.', 'No usar en halcones de cola roja.', 'Urolitos de urato con anomalías portovasculares.'],
      advertencias_criticas: ['Riesgo de xantinuria y formación de urolitos de xantina.', 'Interacción con azatioprina: potencia toxicidad medular.'],
      precauciones: ['Uso con extrema cautela en insuficiencia renal/hepática.'],
      manejo_sobredosis: 'Soporte sintomático. El fármaco es dializable.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibición de xantina oxidasa.',
      farmacocinetica: 'Alta bioasimilación. Metabolizado a oxipurinol. Vida media corto en perros y más larga para el metabolito activo.',
      efectos_adversos: 'Gastrointestinales, hepáticos, renales, hipersensibilidad.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '100 mg', valor_concentracion: 100, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '300 mg', valor_concentracion: 300, unidad_concentracion: 'mg' }
    ]
  },
  {
    id: 'alprazolam',
    color: '#c084fc',
    meta_data: {
      nombre_generico: 'Alprazolam',
      nombres_comerciales: ['Xanax®'],
      grupo_farmacologico: 'Benzodiacepina (Ansiolítico)',
      status_regulatorio: 'Uso humano; uso extra-label en medicina veterinaria. Sustancia controlada DEA C-IV.',
      notas_generales: 'Terapia adjunta para ansiedad y fobias. Menor riesgo de fallo hepático en gatos comparado con diazepam oral.'
    },
    resumen_clinico: {
      usos_principales: 'Ansiedad y reacciones de pánico en perros y gatos, manejo de fobias y eliminación inapropiada en gatos.',
      mecanismo_efecto: 'Potenciación de la actividad del GABA en el SNC.',
      consideraciones: 'Administrar 30-60 min antes del evento estresante. Evitar suspensión abrupta tras uso crónico.'
    },
    informacion_cliente: [
      'La sedación es el efecto secundario más común.',
      'Puede causar excitación paradojal en raras ocasiones.',
      'No recomendado para animales de trabajo.',
      'No retirar bruscamente tras uso prolongado.'
    ],
    monitoreo_paciente: [
      'Eficacia clínica en reducción de ansiedad.',
      'Enzimas hepáticas en pacientes con terapia crónica.',
      'Vigilancia de sedación excesiva y cambios de comportamiento.'
    ],
    interferencia_laboratorio: ['Puede disminuir la captación tiroidea de I-123 o I-131.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Ansiedad/fobias',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 6-12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.02, dosis_min: 0.02, dosis_max: 0.1, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Ansiedad de eliminación',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8-24h' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0.25, dosis_min: 0.125, dosis_max: 0.25, unidad_calculo: 'mg/gato' }
        },
        {
          indicacion: 'Viaje/visita al vet',
          vias: ['PO'],
          frecuencia: { texto_ui: '1 hora antes' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0.75, dosis_min: 0.5, dosis_max: 1, unidad_calculo: 'mg/gato' }
        }
      ],
      caballos: [
        {
          indicacion: 'Manejo de agresividad',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8-12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.035, dosis_min: 0.035, dosis_max: 0.035, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad a benzodiacepinas.', 'Uso en animales agresivos controvertido.', 'Glaucoma de ángulo cerrado.'],
      advertencias_criticas: ['Reacción paradojal posible.', 'Dependencia física con uso crónico.', 'Uso en gatos con precaución.'],
      precauciones: ['Cuidado en geriátricos, debilitados o con enfermedad hepática/renal.'],
      manejo_sobredosis: 'Soporte sintomático. Flumazenil puede ser necesario.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Modulador positivo del receptor GABA-A.',
      farmacocinetica: 'Metabolismo hepático vía CYP3A4 con metabolitos activos.',
      efectos_adversos: 'Sedación, ataxia transitoria, aumento de apetito, excitación paradojal.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '0.25 mg', valor_concentracion: 0.25, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '0.5 mg', valor_concentracion: 0.5, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '1 mg', valor_concentracion: 1, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '2 mg', valor_concentracion: 2, unidad_concentracion: 'mg' },
      { tipo: 'Solución oral', concentracion_texto: '1 mg/mL', valor_concentracion: 1, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'altrenogest',
    color: '#fb7185',
    meta_data: {
      nombre_generico: 'Altrenogest',
      nombres_comerciales: ['Regu-Mate®', 'Matrix®'],
      grupo_farmacologico: 'Progestágeno oral sintético',
      status_regulatorio: 'Aprobado por FDA para yeguas y cerdas; uso extra-label en otras especies.',
      notas_generales: 'Peligro ocupacional por absorción dérmica. Mujeres embarazadas deben evitar el contacto.'
    },
    resumen_clinico: {
      usos_principales: 'Supresión/sincronización del celo, mantenimiento de gestación y manejo de insuficiencia lútea en perros.',
      mecanismo_efecto: 'Retroalimentación negativa sobre LH y FSH, inhibiendo desarrollo folicular y ovulación.',
      consideraciones: 'Descartar inflamación uterina antes de su uso.'
    },
    informacion_cliente: [
      '**ADVERTENCIA DE SEGURIDAD:** Uso obligatorio de guantes impermeables.',
      'Si hay contacto con la piel, lavar inmediatamente con agua y jabón.',
      'Si se ingiere, NO inducir el vómito.',
      'Mantener fuera del alcance de niños y no desechar en agua.'
    ],
    monitoreo_paciente: [
      'Monitoreo ultrasonográfico y niveles de progesterona.',
      'Vigilancia de secreciones vaginales o signos de piometra/endometritis.',
      'Evaluación de cambios en comportamiento uterino.'
    ],
    interferencia_medicamentosas: ['No interfiere con ensayos de progesterona endógena.'],
    parametros_dosificacion: {
      yeguas: [
        {
          indicacion: 'Sincronización de celo',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h por 15 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.044, dosis_min: 0.044, dosis_max: 0.044, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Mantenimiento de gestación',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.044, dosis_min: 0.044, dosis_max: 0.088, unidad_calculo: 'mg/kg' }
        }
      ],
      cerdas: [
        {
          indicacion: 'Sincronización',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h por 14-18 días' },
          math: { tipo_calculo: 'mg/cerda', dosis_recomendada: 15, dosis_min: 15, dosis_max: 15, unidad_calculo: 'mg/cerda' }
        }
      ],
      perros: [
        {
          indicacion: 'Insuficiencia lútea',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.05, dosis_min: 0.05, dosis_max: 0.1, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Sementales y machos castrados.', 'Yeguas/cerdas con inflamación uterina.', 'Primer trimestre de gestación en perras.'],
      advertencias_criticas: ['Puede exacerbar infecciones uterinas latentes.', 'Riesgo reproductivo grave para humanos.'],
      precauciones: ['Yeguas con enfermedad gastrointestinal pueden absorber mal el fármaco.'],
      manejo_sobredosis: 'No hay antídoto. Soporte según signos clínicos.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Progestágeno sintético con alta afinidad por receptores de progesterona.',
      farmacocinetica: 'Absorción oral rápida; eliminación urinaria detectable hasta 12 días.',
      efectos_adversos: 'Hiperplasia endometrial quística, piometra en perras.'
    },
    presentaciones_comerciales: [
      { tipo: 'Solución oral (oleosa)', concentracion_texto: '2.2 mg/mL (0.22%)', valor_concentracion: 2.2, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'hidroxido_de_aluminio',
    color: '#fbbf24',
    meta_data: {
      nombre_generico: 'Hidróxido de Aluminio',
      nombres_comerciales: ['Amphojel®', 'Genéricos'],
      grupo_farmacologico: 'Quelante de fosfato / Antiácido oral',
      status_regulatorio: 'Uso humano (OTC); uso extra-label en veterinaria.',
      notas_generales: 'Usado en hiperfosfatemia renal crónica. El uso crónico requiere precaución por toxicidad por aluminio y estreñimiento.'
    },
    resumen_clinico: {
      usos_principales: 'Control de hiperfosfatemia en enfermedad renal crónica y antiácido limitado.',
      mecanismo_efecto: 'Quelación del fósforo en el tracto gastrointestinal y neutralización del ácido gástrico.',
      consideraciones: 'Debe administrarse junto con alimentos para ser eficaz.'
    },
    informacion_cliente: [
      'Administrar siempre junto con la comida o mezclado en ella.',
      'Evitar productos saborizados para humanos.',
      'Vigilar estreñimiento severo.',
      'Contactar al veterinario ante debilidad o dificultad para caminar.'
    ],
    monitoreo_paciente: [
      'Fósforo sérico cada 4-6 semanas.',
      'Evaluación de signos neurológicos y hematológicos para toxicidad por aluminio.'
    ],
    interferencia_laboratorio: ['No se han reportado interferencias significativas con pruebas bioquímicas estándar.'],
    parametros_dosificacion: {
      perros_gatos: [
        {
          indicacion: 'Hiperfosfatemia',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada comida' },
          math: { tipo_calculo: 'mg/kg/día', dosis_recomendada: 30, dosis_min: 30, dosis_max: 100, unidad_calculo: 'mg/kg/día' }
        }
      ],
      reptiles: [
        {
          indicacion: 'Hiperfosfatemia',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 12-24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 100, dosis_min: 100, dosis_max: 100, unidad_calculo: 'mg/kg' }
        }
      ],
      chinchillas: [
        {
          indicacion: 'Hiperfosfatemia',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 1, dosis_min: 1, dosis_max: 1, unidad_calculo: 'mL' }
        }
      ],
      cobayas: [
        {
          indicacion: 'Hiperfosfatemia',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Según necesidad' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 0.5, dosis_min: 0.5, dosis_max: 0.5, unidad_calculo: 'mL' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Obstrucción de la salida gástrica.', 'Pacientes propensos al estreñimiento crónico.'],
      advertencias_criticas: ['Toxicidad por aluminio en uso crónico.', 'Hipofosfatemia si se sobredosifica.', 'Separar de otros fármacos por al menos 2 horas.'],
      precauciones: ['Uso con cautela en insuficiencia renal.'],
      manejo_sobredosis: 'Tratar estreñimiento y desequilibrios electrolíticos según presentación clínica.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Formación de complejos insolubles de fosfato de aluminio en el lumen intestinal.',
      farmacocinetica: 'Absorción oral pobre; excreción fecal.',
      efectos_adversos: 'Estreñimiento, hipofosfatemia, toxicidad sistémica por aluminio a largo plazo.'
    },
    presentaciones_comerciales: [
      { tipo: 'Gel USP / Polvo seco', concentracion_texto: '300 mg / 1/4 cucharadita' },
      { tipo: 'Suspensión oral', concentracion_texto: '320 mg/5 mL' }
    ]
  },
  {
    id: 'amantadina',
    color: '#f97316',
    meta_data: {
      nombre_generico: 'Amantadina',
      nombres_comerciales: ['Symmetrel®'],
      grupo_farmacologico: 'Antagonista de receptores NMDA / Antiviral',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Valorado en veterinaria como coadyuvante en dolor crónico y neuropático. Uso antiviral histórico limitado.'
    },
    resumen_clinico: {
      usos_principales: 'Adjunto en dolor crónico y neuropático en perros y gatos.',
      mecanismo_efecto: 'Antagonista no competitivo de receptores NMDA en el SNC.',
      consideraciones: 'Carece de efecto analgésico por sí solo; debe combinarse con otros agentes.'
    },
    informacion_cliente: [
      'Los beneficios pueden tardar una semana o más en hacerse evidentes.',
      'Puede administrarse con o sin comida.',
      'Los efectos gastrointestinales son comunes al inicio del tratamiento.',
      'Reportar agitación, inquietud o cambios de comportamiento.'
    ],
    monitoreo_paciente: [
      'Evaluar reducción de signos de dolor crónico.',
      'Vigilar signos gastrointestinales y cambios mentales.'
    ],
    interacciones_medicamentosas: ['No se han reportado interacciones significativas en el texto proporcionado.'],
    parametros_dosificacion: {
      perros_gatos: [
        {
          indicacion: 'Dolor neuropático',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 12-24 horas' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 3, dosis_min: 3, dosis_max: 5, unidad_calculo: 'mg/kg' },
          notas: 'Iniciar en rango bajo y aumentar según tolerancia.'
        }
      ],
      amazonas: [
        {
          indicacion: 'Uso experimental',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Ajustar según respuesta' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad al fármaco.', 'Insuficiencia renal terminal.'],
      advertencias_criticas: ['Prohibido en aves de corral por FDA.', 'Umbral convulsivo más bajo en pacientes predispuestos.'],
      precauciones: ['Ajustar dosis en insuficiencia renal o hepática.'],
      manejo_sobredosis: 'Soporte sintomático. Descontaminación GI prioritaria.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Antagonismo NMDA y potenciación dopaminérgica.',
      farmacocinetica: 'Biodisponibilidad alta. Vida media ~5h en perros, ~6h en gatos. Eliminación renal.',
      efectos_adversos: 'Agitación, flatulencia, heces blandas/diarrea.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas/Cápsulas', concentracion_texto: '100 mg', valor_concentracion: 100, unidad_concentracion: 'mg' },
      { tipo: 'Solución oral', concentracion_texto: '50 mg/5 mL', valor_concentracion: 10, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'amikacina',
    color: '#14b8a6',
    meta_data: {
      nombre_generico: 'Amikacina (Sistémica)',
      nombres_comerciales: ['Amikin®', 'Amiglyde-V®'],
      grupo_farmacologico: 'Antibiótico aminoglucósido',
      status_regulatorio: 'Uso humano; FDA aprobado para perros y yeguas; uso extra-label en otras especies.',
      notas_generales: 'Antibiótico potente contra bacilos gramnegativos y estafilococos. Toxicidad intrínseca debe controlarse con monitoreo renal.'
    },
    resumen_clinico: {
      usos_principales: 'Infecciones graves por gramnegativos, estafilocócicas y uso regional en yeguas.',
      mecanismo_efecto: 'Bactericida dependiente de concentración que inhibe síntesis proteica en ribosoma 30S.',
      consideraciones: 'Dosis una vez al día para maximizar efecto bactericida y reducir nefrotoxicidad.'
    },
    informacion_cliente: [
      'Requiere supervisión veterinaria constante.',
      'Si se administra en casa, seguir el entrenamiento de inyección.',
      'Signos de toxicidad: pérdida de equilibrio, sordera, inapetencia, vómitos o letargo.',
      'Cumplir con visitas de seguimiento para controles renales.'
    ],
    monitoreo_paciente: [
      'Función renal cada 3-5 días.',
      'Eficacia clínica con cultivos y resolución de signos.',
      'Niveles pico y valle si están disponibles.'
    ],
    interferencia_laboratorio: ['Muestras de sangre pueden dar falsos resultados bajos al recibir betalactámicos simultáneamente.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Infecciones susceptibles',
          vias: ['IV', 'IM', 'SC'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 15, dosis_min: 15, dosis_max: 30, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Infecciones susceptibles',
          vias: ['IV', 'IM', 'SC'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 15, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Sistémico adultos',
          vias: ['IV', 'IM'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 10, dosis_min: 10, dosis_max: 10, unidad_calculo: 'mg/kg' }
        },
        {
          indicacion: 'Potros',
          vias: ['IV', 'IM'],
          frecuencia: { texto_ui: 'Cada 24h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 20, dosis_min: 20, dosis_max: 25, unidad_calculo: 'mg/kg' }
        }
      ],
      exoticos: [
        {
          indicacion: 'Reptiles',
          vias: ['IM', 'SC'],
          frecuencia: { texto_ui: 'Cada 3-10 días' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 3.5, dosis_min: 3.5, dosis_max: 3.5, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad a aminoglucósidos.', 'Integridad del tímpano no confirmada en otitis externa.'],
      advertencias_criticas: ['Nefrotoxicidad reversible si se detecta a tiempo.', 'Ototoxicidad potencialmente irreversible.', 'Bloqueo neuromuscular en pacientes con miastenia gravis.'],
      precauciones: ['Riesgo aumentado en pacientes febriles, sépticos o deshidratados.', 'Reducir dosis en lebreles.'],
      manejo_sobredosis: 'Hidratación agresiva. Hemodiálisis efectiva.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibición de síntesis proteica bacteriana (30S).',
      farmacocinetica: 'Eliminación glomerular, baja unión a proteínas plasmáticas.',
      efectos_adversos: 'Nefrotoxicidad, ototoxicidad, edema facial.'
    },
    presentaciones_comerciales: [
      { tipo: 'Solución inyectable', concentracion_texto: '50 mg/mL', valor_concentracion: 50, unidad_concentracion: 'mg/ml' },
      { tipo: 'Solución inyectable', concentracion_texto: '250 mg/mL', valor_concentracion: 250, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'acido_aminocaproico',
    color: '#f97316',
    meta_data: {
      nombre_generico: 'Ácido Aminocaproico',
      nombres_comerciales: ['Amicar®'],
      grupo_farmacologico: 'Hemostático / Antifibrinolítico',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Tratamiento de hiperfibrinólisis. No confundir con Amikacina.'
    },
    resumen_clinico: {
      usos_principales: 'Hiperfibrinólisis, hemorragia de bolsa gutural en caballos y hemorragias postoperatorias.',
      mecanismo_efecto: 'Inhibe la fibrinólisis bloqueando activadores del plasminógeno.',
      consideraciones: 'Eficacia en mielopatía degenerativa canina es cuestionable.'
    },
    informacion_cliente: [
      'Uso hospitalario o bajo supervisión veterinaria cercana.',
      'No administrar sin confirmación de laboratorio.',
      'Reportar signos de sangrado anormal o debilidad muscular.',
      'Las dosis son altamente variables entre especies.'
    ],
    monitoreo_paciente: [
      'Tromboelastografía (TEG).',
      'Signos vitales durante infusión.',
      'Creatina quinasa en terapia prolongada.'
    ],
    interacciones_medicamentosas: ['El potasio sérico puede elevarse en pacientes con ERC preexistente.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Antifibrinolítico postoperatorio',
          vias: ['PO'],
          frecuencia: { texto_ui: 'Cada 8h por 5 días' },
          math: { tipo_calculo: 'fija', dosis_recomendada: 500, dosis_min: 500, dosis_max: 500, unidad_calculo: 'mg/perro' }
        },
        {
          indicacion: 'Hiperfibrinolisis activa',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Cada 6h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 33, dosis_min: 33, dosis_max: 33, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Hemorragia bolsa gutural',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Bolo seguido de cada 6h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 40, dosis_min: 40, dosis_max: 40, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Coagulación intravascular diseminada activa.', 'Ausencia de evidencia de hiperfibrinólisis.'],
      advertencias_criticas: ['Administración IV rápida induce hipotensión y bradicardia.', 'Uso en hemorragias urinarias lleva riesgo de trombosis renal.', 'Toxicidad cardíaca posible en sobredosis.'],
      precauciones: ['Usar con cautela en enfermedad cardíaca, renal o hepática.'],
      manejo_sobredosis: 'No hay antídoto específico. Soporte y control de convulsiones.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibidor de la fibrinólisis.',
      farmacocinetica: 'Absorción oral rápida. Excreción renal.',
      efectos_adversos: 'Irritación gastrointestinal, hiperpotasemia, debilidad muscular.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas/Solución oral', concentracion_texto: '500 mg', valor_concentracion: 500, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas/Solución oral', concentracion_texto: '1000 mg', valor_concentracion: 1000, unidad_concentracion: 'mg' },
      { tipo: 'Solución oral', concentracion_texto: '250 mg/mL', valor_concentracion: 250, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'aminofilina',
    color: '#38bdf8',
    meta_data: {
      nombre_generico: 'Aminofilina',
      nombres_comerciales: ['Amikin® (confusión común: no confundir con Amikacina)'],
      grupo_farmacologico: 'Inhibidor de la fosfodiesterasa (Broncodilatador / Metilxantina)',
      status_regulatorio: 'Uso humano (parenteral); uso extra-label en medicina veterinaria.',
      notas_generales: 'Forma parenteral de teofilina con índice terapéutico estrecho. Requiere extrema precaución en dosificación.'
    },
    resumen_clinico: {
      usos_principales: 'Tos crónica, bradiarritmias y posible hipertensión pulmonar secundaria.',
      mecanismo_efecto: 'Inhibición de PDE III/IV y antagonismo de adenosina.',
      consideraciones: 'No administrar en bolo rápido IV. Monitorizar niveles séricos si hay sospecha de toxicidad.'
    },
    informacion_cliente: [
      'Uso hospitalario estrictamente supervisado.',
      'Reportar excitación, nerviosismo, vómitos o diarrea.',
      'Mantener fuera del alcance de otros animales.',
      'Administrar siempre según indicaciones del veterinario.'
    ],
    monitoreo_paciente: [
      'Frecuencia cardíaca.',
      'Estado neurológico.',
      'Eficacia respiratoria.',
      'Niveles séricos de teofilina cuando sea necesario.'
    ],
    interacciones_medicamentosas: ['Puede elevar ácido úrico sérico dependiendo del método de ensayo.'],
    parametros_dosificacion: {
      perros: [
        {
          indicacion: 'Broncodilatador',
          vias: ['IV', 'IM'],
          frecuencia: { texto_ui: 'Cada 6-8h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 3, dosis_min: 3, dosis_max: 11, unidad_calculo: 'mg/kg' }
        }
      ],
      gatos: [
        {
          indicacion: 'Broncodilatador',
          vias: ['IV', 'IM'],
          frecuencia: { texto_ui: 'Cada 12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 3, dosis_min: 3, dosis_max: 11, unidad_calculo: 'mg/kg' }
        }
      ],
      caballos: [
        {
          indicacion: 'Asma equina severa',
          vias: ['IV'],
          frecuencia: { texto_ui: 'Cada 8-12h' },
          math: { tipo_calculo: 'mg/kg', dosis_recomendada: 5, dosis_min: 5, dosis_max: 14, unidad_calculo: 'mg/kg' }
        }
      ]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad a xantinas.', 'Epilepsia / trastornos convulsivos.'],
      advertencias_criticas: ['Riesgo de arritmias, hipotensión y fallo respiratorio con IV rápido.', 'Interacción fatal con fluoroquinolonas.'],
      precauciones: ['Reducir dosis en pacientes hepáticos o con insuficiencia cardíaca congestiva.'],
      manejo_sobredosis: 'Carbón activado. Control de convulsiones y monitorización ECG continua.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Inhibición de PDE III/IV y antagonismo de adenosina.',
      farmacocinetica: 'Distribución en fluidos extracelulares, metabolismo hepático y eliminación renal.',
      efectos_adversos: 'Taquicardia, vómitos, diarrea, polidipsia, agitación, temblores.'
    },
    presentaciones_comerciales: [
      { tipo: 'Inyectable', concentracion_texto: '25 mg/mL', valor_concentracion: 25, unidad_concentracion: 'mg/ml' }
    ]
  },
  {
    id: 'amiodarona',
    color: '#6366f1',
    meta_data: {
      nombre_generico: 'Amiodarona',
      nombres_comerciales: ['Cordarone®', 'Nexterone®', 'Pacerone®'],
      grupo_farmacologico: 'Antiarrítmico Clase III',
      status_regulatorio: 'Uso humano; uso extra-label en veterinaria.',
      notas_generales: 'Antiarrítmico complejo que bloquea canales de potasio, sodio y calcio. Perfil de toxicidad alto. Uso experimental en veterinaria de especies no caninas/felinas.'
    },
    resumen_clinico: {
      puntos_clave: [
        'Tratamiento de arritmias refractarias en casos seleccionados.',
        'Uso bajo supervisión intensiva debido a toxicidad hepática y pulmonar.',
        'Dosis en veterinaria no está validada para todas las especies.'
      ],
      usos_principales: 'Tratamiento de arritmias graves o refractarias en animales. Uso hospitalario y experimental.',
      mecanismo_efecto: 'Prolonga el potencial de acción miocárdico y el periodo refractario.',
      consideraciones: 'Evitar formulaciones con polisorbato 80 cuando sea posible; monitorizar ECG y función hepática.'
    },
    informacion_cliente: [
      'Medicamento de uso estrictamente hospitalario o supervisado.',
      'La eficacia y seguridad en especies exóticas no están establecidas.',
      'Se requiere un monitoreo muy cercano de los niveles hepáticos si se intenta su uso en tratamientos crónicos.'
    ],
    monitoreo_paciente: [
      'ECG continuo',
      'Perfil hepático y bilirrubina',
      'Signos de toxicidad neurológica o gastrointestinal'
    ],
    interferencia_laboratorio: ['Puede elevar falsamente niveles de algunas hormonas tiroideas.'],
    parametros_dosificacion: {
      reptiles: [
        { indicacion: 'Estado actual', vias: ['IV'], frecuencia: { texto_ui: 'Sin información registrada' }, math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg/kg' } }]
      ,
      anfibios: [
        { indicacion: 'Estado actual', vias: ['IV'], frecuencia: { texto_ui: 'Sin información registrada' }, math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg/kg' } }]
      ,
      aves: [
        { indicacion: 'Estado actual', vias: ['IV'], frecuencia: { texto_ui: 'Sin información registrada' }, math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg/kg' } }]
      ,
      peces: [
        { indicacion: 'Estado actual', vias: ['IV'], frecuencia: { texto_ui: 'Sin información registrada' }, math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg/kg' } }]
      ,
      mamiferos_pequenos: [
        { indicacion: 'Estado actual', vias: ['IV'], frecuencia: { texto_ui: 'Sin información registrada' }, math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0, dosis_min: 0, dosis_max: 0, unidad_calculo: 'mg/kg' } }]
    },
    seguridad_y_alertas: {
      contraindicaciones: ['Hipersensibilidad al yodo', 'Disfunción del nodo sinusal o bloqueos AV de alto grado', 'Shock cardiogénico'],
      advertencias_criticas: ['Reacciones histaminérgicas: Evitar formulaciones con polisorbato 80.', 'Toxicidad hepática obligatoria de monitorear.', 'Interacciones con múltiples fármacos cardiacos.'],
      precauciones: ['Uso extremadamente riesgoso en especies exóticas por falta de datos de seguridad.'],
      manejo_sobredosis: 'Tratamiento de soporte. No es dializable.'
    },
    farmacologia_clinica: {
      mecanismo_accion: 'Antagonista multicanal (K+, Na+, Ca2+, beta-bloqueo).',
      farmacocinetica: 'Muy liposoluble, se acumula en tejido graso y miocardio. Metabolismo hepático a desmetilamiodarona activa.',
      efectos_adversos: 'Anorexia, vómitos, bradicardia, hepatotoxicidad, neutropenia.'
    },
    presentaciones_comerciales: [
      { tipo: 'Tabletas', concentracion_texto: '100 mg', valor_concentracion: 100, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '200 mg', valor_concentracion: 200, unidad_concentracion: 'mg' },
      { tipo: 'Tabletas', concentracion_texto: '400 mg', valor_concentracion: 400, unidad_concentracion: 'mg' },
      { tipo: 'Inyectable', concentracion_texto: '50 mg/mL', valor_concentracion: 50, unidad_concentracion: 'mg/ml' }
    ]
  }
];
