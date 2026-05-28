# Medicamentos manuales

Esta carpeta está estructurada por letra del abecedario (`A` a `Z`).

## Cómo añadir un medicamento

1. Abre la carpeta que corresponde a la primera letra del nombre genérico del medicamento.
2. Crea un archivo `.js` nuevo, por ejemplo `dolo.js`.
3. Pega dentro un objeto con la definición del medicamento:

```js
export default {
  id: 'dolo',
  color: '#f97316',
  meta_data: {
    nombre_generico: 'Dolo',
    nombres_comerciales: ['Dolo-Vet'],
    grupo_farmacologico: 'Analgesico / Antiinflamatorio',
    status_regulatorio: 'Uso veterinario extra-label.',
    notas_generales: 'Uso en perros y gatos según protocolo especializado.'
  },
  resumen_clinico: {
    usos_principales: 'Analgésico para dolor moderado en perros y gatos.',
    mecanismo_accion: 'Inhibición de ciclooxigenasas.'
  },
  parametros_dosificacion: {
    perros_gatos: [
      {
        indicacion: 'Dolor agudo',
        vias: ['PO'],
        frecuencia: { texto_ui: 'Cada 12-24h' },
        math: { tipo_calculo: 'mg/kg', dosis_recomendada: 2, dosis_min: 1, dosis_max: 4, unidad_calculo: 'mg/kg' }
      }
    ]
  },
  presentaciones_comerciales: [
    { tipo: 'Tabletas', concentracion_texto: '50 mg', valor_concentracion: 50, unidad_concentracion: 'mg' }
  ]
}
```

## Validación

- El archivo debe exportar un objeto como `default`.
- El campo `id` debe ser único.
- El campo `parametros_dosificacion` puede usar claves compuestas como `perros_gatos` o `gatos_hurones`.
- El sistema detectará automáticamente esa clave y mostrará el medicamento al seleccionar especie `perro` o `gato`.

## Notas

- Cualquier medicamento nuevo se cargará en cuanto guardes el archivo y el servidor Vite se recargue.
- Si se crea un medicamento con el mismo `id` que uno existente, el archivo nuevo sobrescribirá el medicamento de respaldo.
