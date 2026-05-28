import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Star, Pill } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import { getSpeciesProtocols } from '../utils/species'

export default function Vademecum() {
  const { searchTerm, setSearchTerm, sortedAndFilteredDrugs, favorites, toggleFavorite, drugImages, triggerImageUpload, patient, setPatient, availableSpecies, searchSuggestions, filterGroup, setFilterGroup, showFavoritesOnly, setShowFavoritesOnly, drugGroups } = useAppContext()
  const navigate = useNavigate()

  return (
    <div className="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-20">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-7xl md:text-[6rem] font-black tracking-tighter uppercase leading-none">VADEMÉCUM</h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">Herramienta Clínica Avanzada</p>
        <div className="w-full max-w-lg h-[1px] bg-white/10 mx-auto mt-8" />
      </div>

      <div className="mb-6 px-4 sm:px-0">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {availableSpecies.map(species => (
            <button key={species.id} onClick={() => setPatient({ ...patient, especie: species.id })} className={`min-w-[120px] rounded-3xl border px-4 py-3 text-sm font-bold transition-all ${patient.especie === species.id ? 'border-blue-500 bg-blue-500/15 text-white shadow-md' : 'border-white/10 bg-white/5 text-slate-300 hover:border-blue-500 hover:bg-blue-500/10'}`}>
              <span className="block text-2xl mb-1">{species.icon}</span>
              <span className="uppercase tracking-[0.25em] text-xs">{species.label.replace('_', '/')}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 px-4 sm:px-0 text-center">
        <p className="text-sm text-slate-400">
          Mostrando <span className="font-bold text-white">{sortedAndFilteredDrugs.length}</span> medicamentos disponibles para <span className="font-bold text-white">{(availableSpecies.find(species => species.id === patient.especie) || { label: patient.especie }).label.replace('_', '/')}</span>.
        </p>
        <p className="text-xs uppercase tracking-[0.35em] text-slate-500 mt-2">Especies presentes en la base de datos: {availableSpecies.length}</p>
      </div>

      <div className="mb-8 px-4 sm:px-0">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <button onClick={() => setShowFavoritesOnly(!showFavoritesOnly)} className={`rounded-full border px-4 py-3 text-sm font-semibold transition ${showFavoritesOnly ? 'border-yellow-400 bg-yellow-400/10 text-yellow-300' : 'border-white/10 bg-white/5 text-slate-300 hover:border-yellow-400 hover:bg-yellow-400/10'}`}>
            {showFavoritesOnly ? 'Mostrando favoritos' : 'Filtrar favoritos'}
          </button>
          {filterGroup && (
            <button onClick={() => setFilterGroup('')} className="rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-300 hover:bg-white/10 transition">
              Limpiar filtro: {filterGroup}
            </button>
          )}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {drugGroups.map(group => (
            <button key={group} onClick={() => setFilterGroup(group)} className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition ${filterGroup === group ? 'bg-blue-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}>
              {group}
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mb-12">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        <input type="text" placeholder="Buscar fármaco, grupo o marca..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-[#111111] border border-[#222] rounded-[2rem] py-6 pl-16 pr-8 text-xl font-bold outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-600 shadow-2xl" />
        {searchSuggestions.length > 0 && searchTerm.trim().length > 0 && (
          <div className="absolute left-0 right-0 top-full z-20 mt-3 overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1220] shadow-2xl">
            {searchSuggestions.map(drug => (
              <button key={drug.id} onClick={() => navigate(`/vade/${drug.id}`)} className="w-full text-left px-5 py-4 border-b border-white/5 hover:bg-white/5 transition">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold text-white">{drug.meta_data.nombre_generico}</p>
                    <p className="text-slate-400 text-sm">{drug.meta_data.grupo_farmacologico}</p>
                  </div>
                    <span className="text-slate-500 text-xs">{drug.parametros_dosificacion?.[patient.especie]?.length ? 'Disponible' : 'Sin dosis'}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedAndFilteredDrugs.map(m => (
          <div key={m.id} onClick={() => navigate(`/vade/${m.id}`)} className="cursor-pointer bg-[#111111] border border-[#222] rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row gap-6 relative group transition-all hover:border-[#444] shadow-xl">
            <button onClick={(e) => { e.stopPropagation(); toggleFavorite(m.id) }} className={`absolute top-6 right-6 transition-all z-10 p-2 rounded-full hover:bg-white/5 ${favorites.includes(m.id) ? 'text-yellow-400' : 'text-slate-600'}`}>
              <Star size={24} fill={favorites.includes(m.id) ? 'currentColor' : 'none'} strokeWidth={favorites.includes(m.id) ? 1 : 2} />
            </button>

            <div onClick={(e) => { e.stopPropagation(); triggerImageUpload(m.id) }} className="w-full sm:w-32 h-32 flex-shrink-0 bg-[#1a1a1a] rounded-3xl flex items-center justify-center cursor-pointer overflow-hidden border border-[#333] group-hover:border-blue-500/50 transition-all relative group/img shadow-inner">
              {drugImages[m.id] ? (
                <img src={drugImages[m.id]} alt={m.meta_data.nombre_generico} className="w-full h-full object-cover" />
              ) : (
                <div className="text-center text-slate-700 group-hover/img:text-blue-400 transition-colors flex flex-col items-center justify-center gap-2 px-3">
                  <Pill size={36} />
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover/img:opacity-100 transition-opacity">Subir foto</span>
                </div>
              )}
            </div>

            <div className="flex-1 pr-10">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full flex items-center shadow-sm border" style={{ color: m.color || '#94a3b8', backgroundColor: `${m.color || '#94a3b8'}1a`, borderColor: `${m.color || '#94a3b8'}33` }}>{m.meta_data.grupo_farmacologico}</div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-[1.1] tracking-tight">{m.meta_data.nombre_generico}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{m.resumen_clinico.usos_principales}</p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                <span className="rounded-full bg-white/5 px-3 py-2">{getSpeciesProtocols(m, patient.especie)?.length ? `${getSpeciesProtocols(m, patient.especie).length} protocolo(s)` : 'Sin protocolo'}</span>
                <span className="rounded-full bg-white/5 px-3 py-2">{m.meta_data.nombres_comerciales?.slice(0, 2).join(' · ') || 'Sin marcas registradas'}</span>
                <span className="rounded-full bg-white/5 px-3 py-2">Presentaciones: {m.presentaciones_comerciales?.length ?? 0}</span>
              </div>
            </div>
          </div>
        ))}

        {sortedAndFilteredDrugs.length === 0 && (
          <div className="col-span-1 lg:col-span-2 text-center py-20 text-slate-500">
            <Search size={48} className="mx-auto mb-4 opacity-50" />
            <p className="text-xl font-black uppercase">No se encontraron fármacos</p>
          </div>
        )}
      </div>
    </div>
  )
}
