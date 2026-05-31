export default {
  id: 'acepromazina',
  color: '#a855f7',
  meta_data: {
    nombre_generico: 'Acepromazina',
    nombres_comerciales: ['Calmivet', 'PromAce'],
    grupo_farmacologico: 'Sedante / Tranquilizante',
    status_regulatorio: 'Aprobado uso veterinario'
  },
  resumen_clinico: {
    puntos_clave: ['Sedante fenotiazínico'],
    usos_principales: 'Fenotiazina con efecto depresor sobre el SNC, causando sedación y reducción de la actividad espontánea.'
  },
  parametros_dosificacion: {
    perro: [
      {
        indicacion: 'Sedación ligera',
        vias: ['IM'],
        math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.05, dosis_min: 0.01, dosis_max: 0.1, unidad_calculo: 'mg/kg' },
        frecuencia: { texto_ui: 'Dosis única' }
      }
    ],
    gato: [
      {
        indicacion: 'Sedación ligera',
        vias: ['IM'],
        math: { tipo_calculo: 'mg/kg', dosis_recomendada: 0.05, dosis_min: 0.01, dosis_max: 0.1, unidad_calculo: 'mg/kg' },
        frecuencia: { texto_ui: 'Dosis única' }
      }
    ]
  },
  presentaciones_comerciales: [
    { tipo: 'Vial Inyectable', concentracion_texto: '10 mg/ml', valor_concentracion: 10, unidad_concentracion: 'mg/ml' }
  ]
}
