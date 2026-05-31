import React, { useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import DrugModal from '../components/DrugModal'
import SpeciesBadge from '../components/SpeciesBadge'

export default function Calculator() {
  const { patient, setPatient, biologicalData, calcs, addDrug, updateCalc, removeCalc, DB_MEDICAMENTOS, SPECIES_LIST } = useAppContext()
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
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-8 gap-4">
          {SPECIES_LIST.map(species => (
            <SpeciesBadge key={species.id} specie={species} active={patient.especie === species.id} onClick={(speciesId) => setPatient({...patient, especie: speciesId})} />
          ))}
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
          const total = (pesoNum * calc.dose) / (calc.concentration || 1)

          return (
            <div key={calc.id} className="bg-[#0b1120] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col lg:flex-row shadow-xl">
              <div className="flex-1 p-8 space-y-8">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                  <select value={calc.drugId} onChange={e => {
                    const d = DB_MEDICAMENTOS.find(m => m.id === e.target.value)
                    const protocolosEspecie = d?.parametros_dosificacion[patient.especie] || Object.values(d?.parametros_dosificacion || {})[0] || []
                    const protocoloDefault = protocolosEspecie[0] || {}
                    updateCalc(calc.id, { drugId: e.target.value, dose: protocoloDefault.math?.dosis_recomendada || 0, concentration: d?.presentaciones_comerciales[0]?.valor_concentracion || 1, presIndex: 0, protIndex: 0 })
                    // abrir modal con detalle del fármaco recién seleccionado
                    setModalDrugId(e.target.value)
                    setModalCalcId(calc.id)
                    setModalOpen(true)
                  }} className="bg-transparent text-2xl md:text-3xl font-black uppercase outline-none w-full text-white">
                    <option value="" disabled>Seleccionar Fármaco...</option>
                    {DB_MEDICAMENTOS.filter(m => m.parametros_dosificacion[patient.especie]).map(m => <option key={m.id} value={m.id} className="bg-[#0f172a]">{m.meta_data.nombre_generico}</option>)}
                  </select>
                </div>
              </div>

                <div className="w-full lg:w-80 bg-[#151c2c] p-8 flex flex-col items-center justify-center relative border-l border-white/5">
                <button onClick={() => removeCalc(calc.id)} className="absolute top-6 right-6 text-slate-500 hover:text-red-500 transition-colors p-2"><Trash2 size={20} /></button>
                <div className="text-center">
                  <p className="text-[10px] font-black text-[#60a5fa] uppercase tracking-[0.3em] mb-4">Administrar</p>
                  <h2 className="text-7xl lg:text-8xl font-black tracking-tighter mb-1 text-white">{total > 0 ? total.toFixed(2) : '0.00'}</h2>
                  <p className="text-xl font-black text-slate-500 uppercase tracking-widest mb-6">ML</p>
                </div>
              </div>
            </div>
          )
        })}
          {modalOpen && <DrugModal drugId={modalDrugId} open={modalOpen} onClose={() => setModalOpen(false)} calc={calcs.find(c => c.id === modalCalcId)} onApply={(fields) => {
            // aplicar cambios al cálculo correspondiente
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
