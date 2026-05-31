import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, Shield, AlertTriangle, ClipboardList, Sparkles } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

const getSpeciesMeta = (id, list) => list.find(species => species.id === id) || { id, label: id, icon: '🐾' }

export default function DrugDetail() {
  const { drugId } = useParams()
  const navigate = useNavigate()
  const { DB_MEDICAMENTOS, SPECIES_LIST, drugImages } = useAppContext()
  const medication = DB_MEDICAMENTOS.find(item => item.id === drugId)

  if (!medication) {
    return (
      <div className="max-w-[1000px] mx-auto py-24 text-center text-slate-300">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all mb-8">
          <ArrowLeft size={18} /> Volver
        </button>
        <h2 className="text-4xl font-black mb-4">Medicamento no encontrado</h2>
        <p className="text-slate-500">Verifica el fármaco o regresa al vademécum.</p>
      </div>
    )
  }

  const {
    meta_data,
    resumen_clinico,
    informacion_cliente = [],
    monitoreo_paciente = [],
    interferencia_laboratorio = [],
    seguridad_y_alertas = {},
    farmacologia_clinica = {},
    parametros_dosificacion = {},
    presentaciones_comerciales = [],
     referencias = []
  } = medication

  const speciesEntries = Object.entries(parametros_dosificacion)
  const heroImage = drugImages?.[medication.id]
  const regulationLabel = meta_data.status_regulatorio || 'Aprobado uso veterinario'
  const commercialNames = meta_data.nombres_comerciales?.length > 0 ? meta_data.nombres_comerciales.join(' · ') : 'Sin marcas registradas'

  return (
    <div className="max-w-[1180px] mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all mb-8">
        <ArrowLeft size={18} /> Volver
      </button>

      <div className="grid gap-8 xl:grid-cols-[1.65fr_0.95fr] mb-10">
        <div className="rounded-[2.5rem] border border-white/10 bg-[#08101f]/95 p-8 shadow-[0_40px_90px_rgba(0,0,0,0.4)]">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-slate-300">{meta_data.grupo_farmacologico}</span>
            <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-[10px] uppercase tracking-[0.35em] text-sky-200">{regulationLabel}</span>
          </div>

          <h1 className="text-5xl font-black uppercase tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">{meta_data.nombre_generico}</h1>
          <p className="mt-4 max-w-3xl text-slate-400 text-sm leading-7 sm:text-base">{commercialNames}</p>

          <div className="grid gap-5 mt-10 sm:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.35)]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Usos</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{resumen_clinico.usos_principales || 'Sin información de uso disponible.'}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.35)]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Farmacología</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{farmacologia_clinica.mecanismo_accion || 'Mecanismo no disponible.'}</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_40px_rgba(15,23,42,0.35)]">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Seguridad</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{seguridad_y_alertas.contraindicaciones?.[0] || 'Precauciones no registradas.'}</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 mt-8">
            <div className="rounded-[2rem] bg-[#030717] p-5 border border-white/10 text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Especies</p>
              <p className="mt-3 text-3xl font-black text-white">{speciesEntries.length}</p>
            </div>
            <div className="rounded-[2rem] bg-[#030717] p-5 border border-white/10 text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Presentaciones</p>
              <p className="mt-3 text-3xl font-black text-white">{presentaciones_comerciales.length}</p>
            </div>
            <div className="rounded-[2rem] bg-[#030717] p-5 border border-white/10 text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Referencias</p>
              <p className="mt-3 text-3xl font-black text-white">{referencias.length}</p>
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Ficha rápida</p>
                <h2 className="mt-3 text-3xl font-black text-white">Perfil</h2>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-slate-300">{heroImage ? 'Con imagen' : 'Sin imagen'}</span>
            </div>

            <div className="mt-6 rounded-[2rem] bg-[#020614] p-4 border border-white/10">
              {heroImage ? (
                <img src={heroImage} alt={meta_data.nombre_generico} className="h-72 w-full rounded-[1.75rem] object-contain" />
              ) : (
                <div className="flex h-72 w-full flex-col items-center justify-center rounded-[1.75rem] border border-dashed border-white/10 bg-white/5 text-slate-400">
                  <div className="text-5xl">💊</div>
                  <p className="mt-4 text-sm text-slate-400 text-center px-4">Agrega una imagen en el vademécum para verla aquí.</p>
                </div>
              )}
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-[2rem] bg-[#020614] p-4 border border-white/10">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400 mb-3">Acciones</p>
                <div className="grid gap-3">
                  <button className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white">Agregar protocolo</button>
                  <button className="rounded-full bg-[#0b1635] px-4 py-3 text-sm font-semibold text-slate-200">Compartir</button>
                  <button className="rounded-full bg-[#0f223f] px-4 py-3 text-sm font-semibold text-slate-200">Favorito</button>
                </div>
              </div>

              <div className="rounded-[2rem] bg-[#020614] p-4 border border-white/10">
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400 mb-3">Datos resumen</p>
                <div className="space-y-3">
                  <div className="rounded-3xl bg-white/5 p-3 text-sm text-slate-200">Regulación: {regulationLabel}</div>
                  <div className="rounded-3xl bg-white/5 p-3 text-sm text-slate-200">Especies: {speciesEntries.length}</div>
                  <div className="rounded-3xl bg-white/5 p-3 text-sm text-slate-200">Presentaciones: {presentaciones_comerciales.length}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-5">
              <Shield size={20} className="text-emerald-300" />
              <h3 className="text-xl font-black text-white">Presentaciones</h3>
            </div>
            <div className="space-y-3">
              {presentaciones_comerciales.length > 0 ? presentaciones_comerciales.map((item, index) => (
                <div key={index} className="rounded-3xl border border-white/10 bg-[#020614] p-4 text-slate-300">
                  <p className="font-semibold text-white">{item.tipo}</p>
                  <p className="text-sm text-slate-400">{item.concentracion_texto}</p>
                </div>
              )) : <p className="text-slate-500">No hay presentaciones registradas.</p>}
            </div>
          </div>
        </aside>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.85fr]">
        <div className="space-y-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Dosis y Protocolos</p>
                <h2 className="mt-3 text-3xl font-black text-white">Por especie</h2>
              </div>
              <span className="rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300">{speciesEntries.length} especies</span>
            </div>

            <div className="space-y-5">
              {speciesEntries.length > 0 ? speciesEntries.map(([speciesId, protocols]) => {
                const species = getSpeciesMeta(speciesId, SPECIES_LIST)
                return (
                  <div key={speciesId} className="rounded-[2rem] border border-white/10 bg-[#020614] p-6 shadow-[0_12px_28px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">{species.label.replace('_', '/')}</p>
                        <h3 className="mt-2 text-2xl font-black text-white flex flex-wrap items-center gap-3">{species.icon} {species.label.replace('_', '/').toLowerCase().replace(/^(.)/, s => s.toUpperCase())}</h3>
                      </div>
                      <span className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-slate-300">{protocols.length} protocolo{protocols.length === 1 ? '' : 's'}</span>
                    </div>

                    <div className="space-y-4">
                      {protocols.map((protocol, index) => (
                        <div key={index} className="rounded-[1.75rem] border border-white/10 bg-[#08122d] p-5 transition hover:border-sky-500/40">
                          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">{protocol.indicacion || 'Indicaciones'}</p>
                              <p className="text-4xl font-black text-white">{protocol.math?.dosis_recomendada ?? 'N/A'} <span className="text-lg font-semibold text-slate-400">{protocol.math?.unidad_calculo || ''}</span></p>
                              {protocol.math?.dosis_min !== undefined && protocol.math?.dosis_max !== undefined && (
                                <p className="text-slate-500 mt-2">Rango: {protocol.math.dosis_min} - {protocol.math.dosis_max} {protocol.math.unidad_calculo}</p>
                              )}
                            </div>
                            <div className="rounded-[1.5rem] bg-white/5 px-4 py-3 text-sm text-slate-300">
                              <p className="font-bold text-white">Vía(s)</p>
                              <p>{protocol.vias?.join(', ') || 'N/A'}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.28em] text-slate-400">
                            {protocol.frecuencia?.texto_ui && <span className="rounded-full bg-sky-500/10 px-3 py-2 text-sky-200">{protocol.frecuencia.texto_ui}</span>}
                            {protocol.notas_tecnicas && <span className="rounded-full bg-white/5 px-3 py-2">Nota: {protocol.notas_tecnicas}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }) : (
                <p className="text-slate-500">No hay protocolos registrados para esta especie.</p>
              )}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList size={20} className="text-slate-300" />
              <h2 className="text-2xl font-black text-white">Información para el Cliente</h2>
            </div>
            <ul className="space-y-4">
              {informacion_cliente.length > 0 ? informacion_cliente.map((item, index) => (
                <li key={index} className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-5 text-slate-300">{item}</li>
              )) : (
                <li className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-5 text-slate-500">No hay notas para clientes disponibles.</li>
              )}
            </ul>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <Shield size={20} className="text-emerald-300" />
              <h3 className="text-xl font-black text-white">Precauciones</h3>
            </div>
            <div className="space-y-5 text-slate-300">
              {seguridad_y_alertas.contraindicaciones && (
                <div className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Contraindicaciones</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">{seguridad_y_alertas.contraindicaciones.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
              {seguridad_y_alertas.precauciones && (
                <div className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Precauciones</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">{seguridad_y_alertas.precauciones.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
              {seguridad_y_alertas.sobredosis && (
                <div className="rounded-[1.75rem] border border-white/10 bg-[#081226] p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Sobredosis</p>
                  <p className="font-bold text-white">Signos</p>
                  <ul className="list-disc list-inside ml-5 space-y-2 text-slate-300">{seguridad_y_alertas.sobredosis.signos?.map((item, index) => <li key={index}>{item}</li>)}</ul>
                  <p className="mt-3 text-slate-400">Tratamiento: {seguridad_y_alertas.sobredosis.tratamiento}</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle size={20} className="text-orange-300" />
              <h3 className="text-xl font-black text-white">Monitorización</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              {monitoreo_paciente.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">{monitoreo_paciente.map((item, index) => <li key={index}>{item}</li>)}</ul>
              ) : (
                <div className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-4 text-slate-500">Sin datos de monitoreo registrados.</div>
              )}
              {interferencia_laboratorio.length > 0 && (
                <div className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 mb-2">Interferencias de laboratorio</p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300">{interferencia_laboratorio.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
            </div>
          </div>

          {presentaciones_comerciales.length > 0 && (
            <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen size={20} className="text-sky-300" />
                <h3 className="text-xl font-black text-white">Presentaciones</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                {presentaciones_comerciales.map((item, index) => (
                  <div key={index} className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-4">
                    <p className="font-semibold text-white">{item.tipo}</p>
                    <p className="text-slate-400 text-sm">{item.concentracion_texto}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {referencias.length > 0 && (
            <div className="rounded-[2.5rem] border border-white/10 bg-[#061120]/95 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen size={20} className="text-sky-300" />
                <h3 className="text-xl font-black text-white">Referencias</h3>
              </div>
              <div className="space-y-4 text-slate-300">
                {referencias.map((ref, index) => (
                  <div key={index} className="rounded-[1.75rem] border border-white/10 bg-[#020614] p-4">
                    <p className="font-semibold text-white">{ref.titulo}</p>
                    <p className="text-slate-400 text-sm">{ref.autor} · {ref.edicion} · pág. {ref.pagina}</p>
                    {ref.nota && <p className="text-slate-400 text-sm mt-2">{ref.nota}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  )
}
