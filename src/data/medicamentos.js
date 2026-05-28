export const SPECIES_LIST = [
    { id: 'perro', label: 'PERRO', icon: '🐩' },
    { id: 'gato', label: 'GATO', icon: '🐱' },
    { id: 'caballo', label: 'CABALLO', icon: '🐴' },
    { id: 'bovino', label: 'BOVINO', icon: '🐮' },
    { id: 'cerdo', label: 'CERDO', icon: '🐷' },
    { id: 'ovino_caprino', label: 'OVINO/CAPRINO', icon: '🐐' },
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

import { DB_MEDICAMENTOS as FALLBACK_MEDICAMENTOS } from './medicamentos/fallback.js'

function resolveModuleExports(mod) {
  if (!mod) return []
  const exported = mod.default ?? mod
  return Array.isArray(exported) ? exported : [exported]
}

const manualModules = import.meta.globEager('./medicamentos/[A-Z]/*.js')
const manualMedicamentos = Object.values(manualModules).flatMap(resolveModuleExports).filter(Boolean)

const merged = new Map()
FALLBACK_MEDICAMENTOS.forEach(drug => {
  if (drug?.id) merged.set(drug.id, drug)
})
manualMedicamentos.forEach(drug => {
  if (drug?.id) merged.set(drug.id, drug)
})

export const DB_MEDICAMENTOS = Array.from(merged.values())
