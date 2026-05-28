import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import { getSpeciesProtocols } from '../utils/species'
import DrugModal from '../components/DrugModal'

export default function Calculator() {
  const { patient, setPatient, biologicalData, calcs, addDrug, updateCalc, removeCalc, DB_MEDICAMENTOS, availableSpecies, saveCalcSnapshot, calcHistory, restoreCalcFromSnapshot } = useAppContext()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalDrugId, setModalDrugId] = useState(null)
  const [modalCalcId, setModalCalcId] = useState(null)

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-2">
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter uppercase">Calculadora Dosis</h1>
        <p className="text-slate-500 font-bold uppercase tracking-[0.4em] text-xs">Herramienta Clínica Avanzada</p>
        <div className="w-24 h-1 bg-slate-800 mx-auto mt-6 rounded-full" />
      </div>

      <div className="bg-[#0b1120] border border-white/5 rounded-[2rem] p-10 space-y-10 shadow-xl">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3 justify-center">
            {availableSpecies.map(species => (
              <button key={species.id} onClick={() => setPatient({ ...patient, especie: species.id })} className={`min-w-[90px] rounded-3xl border px-4 py-3 text-sm font-bold transition-all ${patient.especie === species.id ? 'border-blue-500 bg-blue-500/15 text-white shadow-md' : 'border-white/10 bg-white/5 text-slate-300 hover:border-blue-500 hover:bg-blue-500/10'}`}>
                <span className="block text-2xl mb-1">{species.icon}</span>
                <span className="uppercase tracking-[0.25em] text-xs">{species.label.replace('_','/')}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Paciente</label>
            <input type="text" value={patient.nombre} onChange={e => setPatient({...patient, nombre: e.target.value})} className="w-full bg-[#020617] rounded-2xl p-6 text-2xl font-bold border border-white/5 outline-none focus:border-blue-500 transition-colors" placeholder="Nombre..." />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Peso (KG)</label>
            <div className="relative">
              <input type="number" value={patient.peso} onChange={e => setPatient({...patient, peso: e.target.value})} className="w-full bg-[#020617] rounded-2xl p-6 text-3xl font-bold border border-white/5 outline-none focus:border-blue-500 transition-colors" />
              <div className="absolute right-4 bottom-4 flex gap-2">
                <span className="bg-[#0f172a] text-[#38bdf8] text-[9px] font-black px-3 py-1.5 rounded-full border border-[#38bdf8]/20">ASC: {biologicalData.asc} m²</span>
                <span className="bg-slate-700 text-white text-[9px] font-black px-3 py-1.5 rounded-full">RER: {biologicalData.rer} kcal</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {calcs.map(calc => {
          const drug = DB_MEDICAMENTOS.find(d => d.id === calc.drugId)
          const pesoNum = parseFloat(patient.peso) || 0
          const total = pesoNum > 0 && calc.concentration > 0 ? (pesoNum * calc.dose) / calc.concentration : 0
          const protocol = getSpeciesProtocols(drug, patient.especie)?.[calc.protIndex] || getSpeciesProtocols(drug, patient.especie)?.[0] || null
          const warnings = []

          if (!drug) warnings.push('Selecciona un fármaco para empezar el cálculo.')
          if (pesoNum <= 0) warnings.push('Ingrese el peso real del paciente.')
          if (calc.concentration <= 0) warnings.push('La concentración debe ser mayor a 0 mg/ml.')
          if (calc.dose <= 0) warnings.push('La dosis debe ser mayor a 0.')
          if (protocol?.math) {
            if (calc.dose > protocol.math.dosis_max) warnings.push(`La dosis excede el máximo recomendado (${protocol.math.dosis_max} ${protocol.math.unidad_calculo}).`)
            if (calc.dose < protocol.math.dosis_min) warnings.push(`La dosis está por debajo del mínimo recomendado (${protocol.math.dosis_min} ${protocol.math.unidad_calculo}).`)
          }

          return (
            <div key={calc.id} className="bg-[#0b1120] border border-white/5 rounded-[2rem] overflow-hidden shadow-xl">
              <div className="p-8 grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
                <div className="space-y-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div className="flex-1">
                      <label className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Fármaco</label>
                      <select value={calc.drugId} onChange={e => {
                        const d = DB_MEDICAMENTOS.find(m => m.id === e.target.value)
                        const protocolosEspecie = getSpeciesProtocols(d, patient.especie) || Object.values(d?.parametros_dosificacion || {})[0] || []
                        const protocoloDefault = protocolosEspecie[0] || {}
                        updateCalc(calc.id, { drugId: e.target.value, dose: protocoloDefault.math?.dosis_recomendada || 0, concentration: d?.presentaciones_comerciales?.[0]?.valor_concentracion || 1, presIndex: 0, protIndex: 0 })
                        setModalDrugId(e.target.value)
                        setModalCalcId(calc.id)
                        setModalOpen(true)
                      }} className="w-full rounded-3xl border border-white/10 bg-[#020617] px-5 py-4 text-xl font-black uppercase text-white outline-none transition focus:border-blue-500">
                        <option value="" disabled>Seleccionar Fármaco...</option>
                        {DB_MEDICAMENTOS.filter(m => getSpeciesProtocols(m, patient.especie).length).map(m => <option key={m.id} value={m.id}>{m.meta_data.nombre_generico}</option>)}
                      </select>
                    </div>
                    <button onClick={() => saveCalcSnapshot(calc)} className="rounded-3xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-bold uppercase tracking-[0.25em] text-slate-200 hover:bg-white/10 transition w-full md:w-auto">
                      Guardar cálculo
                    </button>
                  </div>

                  {drug && (
                    <div className="rounded-[2rem] border border-white/10 bg-[#111827] p-6">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2">Protocolo activo</p>
                      <p className="text-xl font-black text-white">{protocol?.indicacion || 'Protocolo no disponible'}</p>
                      <p className="mt-3 text-slate-400 text-sm">{protocol?.frecuencia?.texto_ui || 'Frecuencia no registrada.'}</p>
                    </div>
                  )}

                  {warnings.length > 0 && (
                    <div className="rounded-[1.75rem] border border-red-500/20 bg-red-950/40 p-5">
                      <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-300 mb-3">Advertencias de seguridad</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        {warnings.map((warning, index) => (<li key={index}>{warning}</li>))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="w-full rounded-[2rem] bg-[#151c2c] p-8 flex flex-col items-center justify-center text-center relative border border-white/10">
                  <button onClick={() => removeCalc(calc.id)} className="absolute right-6 top-6 text-slate-400 hover:text-red-400 transition-colors p-2"><Trash2 size={20} /></button>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300 mb-4">Administrar</p>
                    <h2 className="text-7xl lg:text-8xl font-black tracking-tighter mb-1 text-white">{total > 0 ? total.toFixed(2) : '0.00'}</h2>
                    <p className="text-xl font-black text-slate-500 uppercase tracking-widest mb-6">ML</p>
                  </div>
                  <button onClick={() => {
                    if (calc.drugId) {
                      setModalDrugId(calc.drugId)
                      setModalCalcId(calc.id)
                      setModalOpen(true)
                    }
                  }} className="w-full rounded-3xl bg-blue-600 px-5 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white hover:bg-blue-500 transition">
                    Ver detalle & calcular
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-3xl font-black text-white">Historial de cálculos</h2>
                <p className="text-slate-500 mt-2">Accede a tus registros más recientes y reutiliza fórmulas guardadas.</p>
              </div>
              <span className="rounded-full border border-white/10 bg-slate-950 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-300">{calcHistory.length} guardados</span>
            </div>

            {calcHistory.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-white/10 bg-[#0b1120] p-8 text-center text-slate-400">
                Guarda un cálculo para verlo aquí y recuperarlo fácilmente.
              </div>
            ) : (
              <div className="space-y-4">
                {calcHistory.slice(0, 5).map(record => {
                  const recordTotal = (parseFloat(record.peso) || 0) * record.dose / (record.concentration || 1)
                  return (
                    <div key={record.id} className="rounded-[2rem] border border-white/10 bg-[#0f172a] p-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{record.drugName} · {record.species.replace('_', '/')}</p>
                        <p className="text-white font-black text-xl">{record.dose} mg · {record.concentration} mg/ml</p>
                        <p className="text-slate-400 text-sm">{recordTotal > 0 ? `${recordTotal.toFixed(2)} ml estimados` : 'Datos incompletos'}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 items-center">
                        <button onClick={() => restoreCalcFromSnapshot(record)} className="rounded-3xl bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-500 transition">Recuperar</button>
                        <span className="text-slate-400 text-xs uppercase tracking-[0.25em]">{new Date(record.createdAt).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 shadow-xl">
            <h2 className="text-2xl font-black text-white mb-4">Consejos rápidos</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="rounded-3xl bg-[#0b1120] p-4">Verifica siempre el protocolo por especie antes de administrar.</li>
              <li className="rounded-3xl bg-[#0b1120] p-4">Guarda los cálculos frecuentes para acelerar tus consultas.</li>
              <li className="rounded-3xl bg-[#0b1120] p-4">Los valores de concentración deben ser reales y mayores a 0.</li>
            </ul>
          </div>
        </div>

          {modalOpen && <DrugModal drugId={modalDrugId} open={modalOpen} onClose={() => setModalOpen(false)} calc={calcs.find(c => c.id === modalCalcId)} onApply={(fields) => {
            if (modalCalcId) updateCalc(modalCalcId, { dose: fields.dose, concentration: fields.concentration, presIndex: fields.presentationIndex, protIndex: fields.protocolIndex })
          }} />}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
        <button onClick={addDrug} className="w-full py-10 rounded-[2rem] border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group hover:border-blue-500/40 hover:bg-blue-500/5 transition-all">
          <div className="text-slate-500 group-hover:text-blue-400 transition-colors"><Plus size={28} /></div>
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] group-hover:text-blue-400">Añadir Fármaco</span>
        </button>
      </div>
    </div>
  )
}
