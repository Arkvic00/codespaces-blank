import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Star } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Vademecum() {
  const { searchTerm, setSearchTerm, sortedAndFilteredDrugs, favorites, toggleFavorite, drugImages, triggerImageUpload, patient, setPatient, SPECIES_LIST } = useAppContext()
  const navigate = useNavigate()

  return (
    <div className="max-w-[1400px] mx-auto animate-in fade-in duration-500 pb-20 px-4">
      <div className="text-center space-y-2 mb-10">
        <h1 className="text-6xl md:text-7xl font-black tracking-tighter uppercase leading-none">VADEMÉCUM</h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">Herramienta Clínica Avanzada</p>
        <div className="w-full max-w-lg h-[1px] bg-white/10 mx-auto mt-8" />
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {SPECIES_LIST.map(species => (
            <button key={species.id} onClick={() => setPatient({ ...patient, especie: species.id })} className={`min-w-[120px] rounded-3xl border px-4 py-3 text-sm font-bold transition-all ${patient.especie === species.id ? 'border-blue-500 bg-blue-500/15 text-white shadow-md' : 'border-white/10 bg-white/5 text-slate-300 hover:border-blue-500 hover:bg-blue-500/10'}`}>
              <span className="block text-2xl mb-1">{species.icon}</span>
              <span className="uppercase tracking-[0.25em] text-xs">{species.label.replace('_', '/')}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mb-12">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" size={24} />
        <input type="text" placeholder="Buscar fármaco, grupo o marca..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full bg-[#111111] border border-[#222] rounded-[2rem] py-6 pl-16 pr-8 text-xl font-bold outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-white placeholder:text-slate-600 shadow-2xl" />
      </div>

      {sortedAndFilteredDrugs.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <Search size={48} className="mx-auto mb-4 opacity-50" />
          <p className="text-xl font-black uppercase">No se encontraron fármacos</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAndFilteredDrugs.map(m => {
            const cardBg = m.color || '#2563eb'
            const bgLight = `${cardBg}20`
            const bgFaint = `${cardBg}12`
            const borderColor = `${cardBg}50`

            return (
              <div key={m.id} onClick={() => navigate(`/vade/${m.id}`)} className="cursor-pointer group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <div className="absolute inset-x-0 top-0 h-40" style={{ background: `radial-gradient(circle at top right, ${bgLight}, transparent 55%)` }} />
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `linear-gradient(135deg, ${bgFaint} 0%, transparent 80%)` }} />

                <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-slate-400">{m.meta_data.grupo_farmacologico}</p>
                        <h3 className="text-2xl font-black uppercase tracking-tighter text-white sm:text-3xl">{m.meta_data.nombre_generico}</h3>
                      </div>
                      <button onClick={(e) => { e.stopPropagation(); toggleFavorite(m.id) }} className="rounded-full border border-white/10 bg-slate-950/80 p-3 text-slate-300 transition duration-200 hover:bg-white/10">
                        <Star size={20} fill={favorites.includes(m.id) ? 'currentColor' : 'none'} strokeWidth={2} className={favorites.includes(m.id) ? 'text-amber-300' : 'text-slate-300'} />
                      </button>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-slate-300">{m.meta_data.nombre_generico.slice(0, 1).toUpperCase()}</span>
                      <span className="rounded-full bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-slate-300">{m.meta_data.nombres_comerciales?.[0] || 'Genérico'}</span>
                    </div>

                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-300">{m.resumen_clinico.usos_principales || 'Descripción clínica rápida no disponible.'}</p>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto] items-end">
                    <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-4 text-slate-300">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Principales marcas</p>
                      <p className="mt-3 text-sm font-semibold text-white">{m.meta_data.nombres_comerciales?.slice(0, 2).join(', ') || 'Sin marcas registradas'}</p>
                    </div>
                    <div className="flex items-center justify-center rounded-[2rem] bg-slate-950/95 px-4 py-3 text-center text-xs uppercase tracking-[0.3em] text-slate-300 shadow-sm" style={{ border: `1px solid ${borderColor}` }}>
                      Ver ficha
                    </div>
                  </div>
                </div>

                <div className="pointer-events-none absolute right-6 top-6 h-24 w-24 rounded-full" style={{ background: `radial-gradient(circle at center, ${cardBg}50, transparent 62%)` }} />
                <div className="pointer-events-none absolute left-6 bottom-6 h-20 w-20 rounded-full bg-white/5 blur-xl" />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
