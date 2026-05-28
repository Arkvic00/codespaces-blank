import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, BookOpen, Shield, AlertTriangle, ClipboardList, Sparkles } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import { formatSpeciesLabel, getSpeciesIcon } from '../utils/species'

const getSpeciesMeta = (id, list) => ({ id, label: formatSpeciesLabel(id, list), icon: getSpeciesIcon(id, list) })

export default function DrugDetail() {
  const { drugId } = useParams()
  const navigate = useNavigate()
  const { DB_MEDICAMENTOS, SPECIES_LIST } = useAppContext()
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
    notas_administracion = [],
    interacciones_medicamentosas = [],
    monitoreo_paciente = [],
    interferencia_laboratorio = [],
    seguridad_y_alertas = {},
    farmacologia_clinica = {},
    parametros_dosificacion = {},
    presentaciones_comerciales = [],
    referencias = []
  } = medication

  const speciesEntries = Object.entries(parametros_dosificacion)

  return (
    <div className="max-w-[1200px] mx-auto py-20 space-y-8">
      <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition-all">
        <ArrowLeft size={18} /> Volver al Vademécum
      </button>

      <section className="bg-[#111111] border border-[#222] rounded-[2rem] p-10 shadow-xl overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-slate-300">
                  <Sparkles size={14} /> {meta_data.grupo_farmacologico}
                </div>
                <div>
                  <h1 className="text-6xl font-black tracking-tight text-white leading-tight">{meta_data.nombre_generico}</h1>
                  {meta_data.nombres_comerciales?.length > 0 && (
                    <p className="text-slate-400 text-sm mt-2">{meta_data.nombres_comerciales.join(' · ')}</p>
                  )}
                  {meta_data.status_regulatorio && (
                    <p className="text-slate-400 text-sm mt-3">{meta_data.status_regulatorio}</p>
                  )}
                  {meta_data.notas_generales && (
                    <p className="text-slate-400 text-sm mt-3">{meta_data.notas_generales}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-3xl border border-slate-700 bg-slate-950/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">{meta_data.status_regulatorio}</span>
                <button className="rounded-3xl border border-white/10 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300 hover:bg-blue-500/15 transition">Comparar Fármaco</button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] border border-[#222] bg-[#0f172a] p-6">
                <div className="flex items-center gap-2 text-sky-400 font-black uppercase tracking-[0.3em] text-[11px] mb-4">
                  <BookOpen size={16} /> Farmacología
                </div>
                <p className="text-slate-300 leading-relaxed">{farmacologia_clinica.mecanismo_accion || 'Información farmacológica no disponible.'}</p>
                {resumen_clinico.mecanismo_efecto && (
                  <div className="mt-5">
                    <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Mecanismo de efecto</p>
                    <p className="text-slate-300 leading-relaxed">{resumen_clinico.mecanismo_efecto}</p>
                  </div>
                )}
                {resumen_clinico.consideraciones && (
                  <div className="mt-5">
                    <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Consideraciones</p>
                    <p className="text-slate-300 leading-relaxed">{resumen_clinico.consideraciones}</p>
                  </div>
                )}
              </div>
              <div className="rounded-[2rem] border border-[#222] bg-[#0f172a] p-6">
                <div className="flex items-center gap-2 text-emerald-400 font-black uppercase tracking-[0.3em] text-[11px] mb-4">
                  <Shield size={16} /> Seguridad
                </div>
                <p className="text-slate-300 leading-relaxed">{seguridad_y_alertas.contraindicaciones?.[0] || 'Precauciones y contraindicaciones no registradas.'}</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">{resumen_clinico.usos_principales}</p>
          </div>

          <div className="rounded-[2rem] border border-[#222] bg-[#0b1120] p-8 shadow-inner">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl" style={{ backgroundColor: medication.color ? `${medication.color}20` : '#2563eb20', color: medication.color || '#38bdf8' }}>
                <Sparkles size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Detalles Técnicos</p>
                <h2 className="text-2xl font-black text-white">Resumen</h2>
              </div>
            </div>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              {farmacologia_clinica.farmacocinetica && (
                <div>
                  <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] mb-2">Farmacocinética</p>
                  <p>{farmacologia_clinica.farmacocinetica}</p>
                </div>
              )}
              {seguridad_y_alertas.efectos_adversos && (
                <div>
                  <p className="text-slate-500 uppercase tracking-[0.3em] text-[10px] mb-2">Efectos adversos</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">{seguridad_y_alertas.efectos_adversos.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
            <div className="flex items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-3xl font-black text-white">Dosis y Protocolos</h2>
                <p className="text-slate-500 text-sm">Guía rápida por especie y vía</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-400">{speciesEntries.length} especies</div>
            </div>

            <div className="space-y-5">
              {speciesEntries.map(([speciesId, protocols]) => {
                const species = getSpeciesMeta(speciesId, SPECIES_LIST)
                return (
                  <div key={speciesId} className="rounded-[2rem] border border-white/10 bg-[#0f172a] p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px]">{species.label.replace('_', '/')}</p>
                        <h3 className="text-2xl font-black text-white flex items-center gap-3">{species.icon} {species.label.replace('_', '/').toLowerCase().replace(/^(.)/, s => s.toUpperCase())}</h3>
                      </div>
                      <div className="text-slate-300 text-sm">{protocols.length} protocolo(s)</div>
                    </div>

                    <div className="space-y-4">
                      {protocols.map((protocol, index) => (
                        <div key={index} className="rounded-[1.5rem] border border-[#222] bg-[#111827] p-5">
                          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">{protocol.indicacion || 'Indicaciones'}</p>
                              <p className="text-4xl font-black text-white">{protocol.math?.dosis_recomendada ?? 'N/A'} {protocol.math?.unidad_calculo || ''}</p>
                              {protocol.math?.dosis_min !== undefined && protocol.math?.dosis_max !== undefined && (
                                <p className="text-slate-500 mt-2">Rango: {protocol.math.dosis_min} - {protocol.math.dosis_max} {protocol.math.unidad_calculo}</p>
                              )}
                            </div>
                            <div className="rounded-3xl bg-slate-950/80 px-4 py-3 text-sm text-slate-300">
                              <p className="font-bold">Vía(s)</p>
                              <p>{protocol.vias?.join(', ') || 'N/A'}</p>
                            </div>
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                            {protocol.frecuencia?.texto_ui && <span className="rounded-full bg-white/5 px-3 py-2">{protocol.frecuencia.texto_ui}</span>}
                            {protocol.notas_tecnicas && <span className="rounded-full bg-white/5 px-3 py-2">Nota: {protocol.notas_tecnicas}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardList size={20} className="text-slate-300" />
              <h2 className="text-2xl font-black text-white">Información para el Cliente</h2>
            </div>
            <ul className="space-y-3 text-slate-300">
              {informacion_cliente.length > 0 ? informacion_cliente.map((item, index) => (
                <li key={index} className="rounded-3xl border border-white/10 bg-[#0f172a] p-4">{item}</li>
              )) : <li className="text-slate-500">No hay notas para clientes disponibles.</li>}
            </ul>
          </div>

          {notas_administracion.length > 0 && (
            <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen size={20} className="text-amber-300" />
                <h2 className="text-2xl font-black text-white">Notas de Administración</h2>
              </div>
              <ul className="space-y-3 text-slate-300">
                {notas_administracion.map((item, index) => (
                  <li key={index} className="rounded-3xl border border-white/10 bg-[#0f172a] p-4 flex items-start gap-3">
                    <span className="text-amber-400 font-black text-xl mt-1">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {interacciones_medicamentosas.length > 0 && (
            <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl border-red-500/20">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={20} className="text-red-400" />
                <h2 className="text-2xl font-black text-white">Interacciones Medicamentosas</h2>
              </div>
              <ul className="space-y-3 text-slate-300">
                {interacciones_medicamentosas.map((item, index) => (
                  <li key={index} className="rounded-3xl border border-red-500/30 bg-red-950/20 p-4 flex items-start gap-3">
                    <span className="text-red-400 font-black text-xl mt-1">⚠</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <Shield size={20} className="text-emerald-300" />
              <h3 className="text-xl font-black text-white">Precauciones y adversos</h3>
            </div>
            <div className="space-y-5 text-slate-300">
              {seguridad_y_alertas.contraindicaciones && (
                <div>
                  <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Contraindicaciones</p>
                  <ul className="list-disc list-inside space-y-2">{seguridad_y_alertas.contraindicaciones.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
              {seguridad_y_alertas.precauciones && (
                <div>
                  <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Precauciones</p>
                  <ul className="list-disc list-inside space-y-2">{seguridad_y_alertas.precauciones.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
              {seguridad_y_alertas.advertencias_criticas && (
                <div>
                  <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Advertencias críticas</p>
                  <ul className="list-disc list-inside space-y-2">{seguridad_y_alertas.advertencias_criticas.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
              {seguridad_y_alertas.sobredosis && (
                <div className="rounded-[1.5rem] border border-[#222] bg-[#0b1220] p-4">
                  <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Sobredosis</p>
                  <p className="font-bold text-white">Signos:</p>
                  <ul className="list-disc list-inside ml-5 text-slate-300">{seguridad_y_alertas.sobredosis.signos?.map((item, index) => <li key={index}>{item}</li>)}</ul>
                  <p className="mt-3 text-slate-400">Tratamiento: {seguridad_y_alertas.sobredosis.tratamiento}</p>
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
            <div className="flex items-center gap-3 mb-5">
              <AlertTriangle size={20} className="text-orange-300" />
              <h3 className="text-xl font-black text-white">Monitorización</h3>
            </div>
            <div className="space-y-4 text-slate-300">
              {monitoreo_paciente.length > 0 ? (
                <ul className="list-disc list-inside space-y-2">{monitoreo_paciente.map((item, index) => <li key={index}>{item}</li>)}</ul>
              ) : <p className="text-slate-500">Sin datos de monitoreo registrados.</p>}
              {interferencia_laboratorio.length > 0 && (
                <div>
                  <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] mb-2">Interferencias de laboratorio</p>
                  <ul className="list-disc list-inside space-y-2">{interferencia_laboratorio.map((item, index) => <li key={index}>{item}</li>)}</ul>
                </div>
              )}
            </div>
          </div>

          {presentaciones_comerciales.length > 0 && (
            <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-5">
                <BookOpen size={20} className="text-sky-300" />
                <h3 className="text-xl font-black text-white">Presentaciones</h3>
              </div>
              <div className="space-y-3 text-slate-300">
                {presentaciones_comerciales.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-white/10 bg-[#0f172a] p-4">
                    <p className="font-semibold text-white">{item.tipo}</p>
                    <p className="text-slate-400 text-sm">{item.concentracion_texto}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
            {referencias.length > 0 && (
              <div className="rounded-[2rem] border border-[#222] bg-[#111111] p-8 shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <BookOpen size={20} className="text-sky-300" />
                  <h3 className="text-xl font-black text-white">Referencias</h3>
                </div>
                <div className="space-y-4 text-slate-300">
                  {referencias.map((ref, index) => (
                    <div key={index} className="rounded-3xl border border-white/10 bg-[#0f172a] p-4">
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
