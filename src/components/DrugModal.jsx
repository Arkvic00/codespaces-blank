import React, { useMemo, useState } from 'react'
import { X, ChevronDown, AlertTriangle } from 'lucide-react'
import { useAppContext } from '../context/AppContext'
import { getSpeciesProtocols } from '../utils/species'

export default function DrugModal({ drugId, open, onClose, onApply, calc }) {
  const { DB_MEDICAMENTOS, patient } = useAppContext()
  const drug = DB_MEDICAMENTOS.find(d => d.id === drugId)
  const [presentationIndex, setPresentationIndex] = useState(0)
  const [protocolIndex, setProtocolIndex] = useState(0)
  const [doseValue, setDoseValue] = useState('')
  const [concentrationValue, setConcentrationValue] = useState('')

  React.useEffect(() => {
    if (!drug) return
    const pres = drug.presentaciones_comerciales?.[0]
    setPresentationIndex(0)
    setProtocolIndex(0)
    if (calc) {
      setDoseValue(calc.dose ?? (getSpeciesProtocols(drug, patient.especie)?.[0]?.math?.dosis_recomendada ?? ''))
      setConcentrationValue(calc.concentration ?? pres?.valor_concentracion ?? '')
    } else {
      setDoseValue(getSpeciesProtocols(drug, patient.especie)?.[0]?.math?.dosis_recomendada ?? '')
      setConcentrationValue(pres?.valor_concentracion ?? '')
    }
  }, [drugId, drug, calc, patient.especie])

  const availableProtocols = getSpeciesProtocols(drug, patient.especie)

  const selectedProtocol = useMemo(() => {
    if (!drug) return null
    return availableProtocols[protocolIndex] || availableProtocols[0] || null
  }, [availableProtocols, protocolIndex])

  const selectedPresentation = useMemo(() => {
    if (!drug) return null
    return drug.presentaciones_comerciales?.[presentationIndex] || drug.presentaciones_comerciales?.[0] || null
  }, [drug, presentationIndex])

  const peso = parseFloat(patient.peso) || 0
  const doseNum = parseFloat(doseValue) || 0
  const concNum = parseFloat(concentrationValue) || 0

  const estimatedMl = useMemo(() => {
    if (!selectedProtocol) {
      return concNum > 0 ? ((peso * doseNum) / concNum) : 0
    }
    const tipo = selectedProtocol.math?.tipo_calculo || 'mg/kg'
    if (tipo === 'mg/kg' || tipo === 'mg/kg/h') {
      return concNum > 0 ? ((peso * doseNum) / concNum) : 0
    }
    if (tipo === 'mg/ml') {
      return concNum > 0 ? (doseNum / concNum) : 0
    }
    if (tipo === 'fija') {
      return concNum > 0 ? (doseNum / concNum) : 0
    }
    return 0
  }, [peso, doseNum, concNum, selectedProtocol])

  const warningMessages = []
  if (selectedProtocol?.math) {
    if (doseNum > selectedProtocol.math.dosis_max) {
      warningMessages.push(`Dosis superior al máximo recomendado (${selectedProtocol.math.dosis_max} ${selectedProtocol.math.unidad_calculo}).`)
    }
    if (doseNum < selectedProtocol.math.dosis_min) {
      warningMessages.push(`Dosis menor al mínimo recomendado (${selectedProtocol.math.dosis_min} ${selectedProtocol.math.unidad_calculo}).`)
    }
  }
  if (concNum <= 0) {
    warningMessages.push('La concentración debe ser mayor a 0 mg/ml.')
  }

  if (!open || !drug) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative w-full max-w-4xl bg-[#071025] rounded-2xl p-6 border border-white/5 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-3xl font-black text-white">{drug.meta_data.nombre_generico}</h3>
            <p className="text-sm text-slate-300">{drug.meta_data.grupo_farmacologico}</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-md text-slate-300 hover:bg-white/5"><X /></button>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <label className="text-xs text-slate-400 uppercase">Presentación</label>
            <select value={presentationIndex} onChange={e => setPresentationIndex(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/5 text-white">
              {drug.presentaciones_comerciales?.map((p, i) => (<option key={i} value={i}>{p.tipo} ({p.concentracion_texto})</option>))}
            </select>

            <label className="text-xs text-slate-400 uppercase">Protocolo</label>
            <select value={protocolIndex} onChange={e => setProtocolIndex(Number(e.target.value))} className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/5 text-white">
              {availableProtocols.map((prot, i) => (<option key={i} value={i}>{prot.indicacion || `Protocolo ${i+1}`}</option>))}
            </select>

            <label className="text-xs text-slate-400 uppercase">Dosis ({selectedProtocol?.math?.unidad_calculo || 'mg/kg'})</label>
            <input type="number" value={doseValue} onChange={e => setDoseValue(e.target.value)} className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/5 text-white" />

            <label className="text-xs text-slate-400 uppercase">Concentración ({selectedPresentation?.unidad_concentracion || 'mg/ml'})</label>
            <input type="number" value={concentrationValue} onChange={e => setConcentrationValue(e.target.value)} className="w-full p-3 rounded-xl bg-[#0b1220] border border-white/5 text-white" />
            <div className="mt-3 text-slate-400 text-sm">Tipo de cálculo: {selectedProtocol?.math?.tipo_calculo || 'N/A'}</div>

            {warningMessages.length > 0 && (
              <div className="mt-4 rounded-3xl border border-red-500/20 bg-red-950/60 p-4 text-sm text-slate-200">
                <div className="flex items-center gap-2 mb-2 text-red-300 font-bold uppercase tracking-[0.25em]"><AlertTriangle size={16} /> Atención</div>
                <ul className="list-disc list-inside space-y-2">
                  {warningMessages.map((message, index) => <li key={index}>{message}</li>)}
                </ul>
              </div>
            )}
          </div>

          <div className="bg-[#0b1220] rounded-2xl p-6 flex flex-col items-center justify-center">
            <div className="text-sm text-slate-400 uppercase">Administrar</div>
            <div className="text-6xl font-black text-white mt-4">{estimatedMl > 0 ? estimatedMl.toFixed(2) : '0.00'}</div>
            <div className="text-sm text-slate-400 mt-2">ML</div>
            <div className="mt-6 w-full">
              <button onClick={() => { onApply({ dose: Number(doseValue), concentration: Number(concentrationValue), protocolIndex, presentationIndex }); onClose() }} className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold">Aplicar y cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
