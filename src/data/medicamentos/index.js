import { SPECIES_LIST } from './fallback'

const modules = import.meta.globEager('./**/*.js')
const DB_MEDICAMENTOS = Object.entries(modules)
  .filter(([path]) => path !== './index.js' && path !== './fallback.js')
  .map(([, module]) => module.default)
  .filter(Boolean)
  .sort((a, b) => a.meta_data.nombre_generico.localeCompare(b.meta_data.nombre_generico))

export { DB_MEDICAMENTOS, SPECIES_LIST }
export default DB_MEDICAMENTOS
