const SPECIES_NORMALIZATION = {
  perros: 'perro',
  perros_gatos: 'perro_gato',
  gatos_hurones: 'gato_hurones',
  yeguas: 'yegua',
  cerdas: 'cerda',
  caballos: 'caballo',
  bovinos: 'bovino',
  ovinos: 'ovino',
  caprinos: 'caprino',
  roedores: 'roedor',
  cobayas: 'cobaya',
  erizos: 'erizo',
  aves: 'ave',
  reptiles: 'reptil',
  primates: 'primates',
  axolotes: 'axolote',
  mustelidos: 'mustelidos',
  hurones: 'hurones'
}

export function normalizeSpeciesKey(key) {
  return SPECIES_NORMALIZATION[key] || key
}

export function expandSpeciesKey(key) {
  const normalized = normalizeSpeciesKey(key)
  const parts = normalized.split('_')
  return parts.flatMap(part => {
    const singular = part.endsWith('s') && part.length > 3 ? part.slice(0, -1) : part
    return singular === part ? [part] : [part, singular]
  }).map(value => value.trim()).filter(Boolean)
}

export function speciesMatchesKey(speciesId, key) {
  if (!key || !speciesId) return false
  if (key === speciesId) return true
  const expanded = expandSpeciesKey(key)
  return expanded.includes(speciesId)
}

export function getSpeciesProtocols(drug, speciesId) {
  if (!drug || !drug.parametros_dosificacion) return []
  if (drug.parametros_dosificacion[speciesId]) return drug.parametros_dosificacion[speciesId]
  const matchingKey = Object.keys(drug.parametros_dosificacion || {}).find(key => speciesMatchesKey(speciesId, key))
  return matchingKey ? drug.parametros_dosificacion[matchingKey] : []
}

export function formatSpeciesLabel(id, speciesList = []) {
  if (!id) return ''
  const exact = speciesList.find(species => species.id === id)
  if (exact) return exact.label.replace('_', '/')
  const expanded = expandSpeciesKey(id).map(part => {
    const exactPart = speciesList.find(species => species.id === part)
    return exactPart ? exactPart.label.replace('_', '/') : part.replace(/_/g, ' ')
  })
  return expanded.length > 1 ? expanded.join(' / ') : expanded[0] || id.replace(/_/g, ' ')
}

export function getSpeciesIcon(id, speciesList = []) {
  const exact = speciesList.find(species => species.id === id)
  if (exact) return exact.icon
  const expanded = expandSpeciesKey(id)
  const icons = expanded.map(part => {
    const exactPart = speciesList.find(species => species.id === part)
    return exactPart ? exactPart.icon : '🐾'
  })
  return icons.join('') || '🐾'
}
