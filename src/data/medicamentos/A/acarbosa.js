export default {
  id: 'acarbosa',
  color: '#f59e0b',
  meta_data: {
    nombre_generico: 'Acarbosa',
    nombres_comerciales: ['Precose', 'Glucobay'],
    grupo_farmacologico: 'Agente antidiabético, inhibidor de la alfa-glucosidasa',
    status_regulatorio: 'Uso extra-label en perros y gatos; Aprobado por la FDA para humanos.'
  },
  resumen_clinico: {
    puntos_clave: [
      'Agente antihiperglucémico que reduce la tasa y cantidad de glucosa absorbida en el intestino después de una comida.',
      'Útil en perros y gatos con hiperglucemia leve.',
      'Poco probable que sea eficaz como terapia única para la diabetes mellitus.',
      'Debe administrarse con las comidas (preferiblemente justo antes de alimentar).'
    ],
    usos_principales: 'Reducción de concentraciones de glucosa en sangre en casos de hiperglucemia leve a moderada (rango 250-350 mg/dL) en perros y gatos.'
  },
  informacion_cliente: [
    'Dar el medicamento justo antes de alimentar al animal para mejores resultados.',
    'Las tabletas pueden dividirse o triturarse y mezclarse con la comida.',
    'Los efectos secundarios más probables son diarrea y/o gases.'
  ],
  monitoreo_paciente: ['Glucosa sérica.', 'Efectos adversos gastrointestinales (diarrea, flatulencia).'],
  interferencia_laboratorio: ['ALT (Aminotransferasa): Aumento en niveles séricos en humanos con dosis altas a largo plazo.'],
  parametros_dosificacion: {
    perro: [
      {
        indicacion: 'Tratamiento adyuvante para diabetes mellitus',
        vias: ['PO'],
        math: {
          tipo_calculo: 'fija',
          dosis_recomendada: 18.75,
          dosis_min: 12.5,
          dosis_max: 100,
          unidad_calculo: 'mg/perro'
        },
        frecuencia: { texto_ui: 'Con cada comida', intervalo_horas: 12 },
        notas_tecnicas: 'Dosis inicial de 12.5-25 mg por perro.'
      }
    ],
    gato: [
      {
        indicacion: 'Tratamiento adyuvante para diabetes',
        vias: ['PO'],
        math: {
          tipo_calculo: 'fija',
          dosis_recomendada: 12.5,
          dosis_min: 12.5,
          dosis_max: 12.5,
          unidad_calculo: 'mg/gato'
        },
        frecuencia: { texto_ui: 'Dos veces al día con la comida', intervalo_horas: 12 }
      }
    ]
  },
  seguridad_y_alertas: {
    contraindicaciones: ['Cetoacidosis diabética.', 'Enfermedad inflamatoria intestinal (IBD).'],
    precauciones: ['Disfunción renal severa.'],
    efectos_adversos: ['Flatulencia.', 'Diarrea.'],
    sobredosis: { signos: ['Diarrea', 'Flatulencia'], tratamiento: 'No suele ser necesario.' }
  },
  farmacologia_clinica: {
    mecanismo_accion: 'Inhibe competitivamente la alfa-amilasa pancreática.',
    farmacocinetica: 'En perros, solo se absorbe el ~4%.'
  },
  presentaciones_comerciales: [
    { tipo: 'Tableta oral', concentracion_texto: '25 mg', valor_concentracion: 25, unidad_concentracion: 'mg', es_divisible: true },
    { tipo: 'Tableta oral', concentracion_texto: '50 mg', valor_concentracion: 50, unidad_concentracion: 'mg', es_divisible: true }
  ]
}
