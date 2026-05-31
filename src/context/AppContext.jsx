import React, { createContext, useContext, useRef, useState, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import DB_MEDICAMENTOS, { SPECIES_LIST } from '../data/medicamentos'

const AppContext = createContext(null)

export function useAppContext() { return useContext(AppContext) }

export function AppContextProvider({ children }) {
  const [patient, setPatient] = useLocalStorage('patient_v3', { nombre: '', especie: 'perro', peso: '8' })
  const [calcs, setCalcs] = useLocalStorage('calcs_v3', [])
  const [favorites, setFavorites] = useLocalStorage('drug_favorites', [])
  const [drugImages, setDrugImages] = useLocalStorage('drug_images_custom', {})

  const [searchTerm, setSearchTerm] = useState('')
  const [uploadingId, setUploadingId] = useState(null)
  const fileInputRef = useRef(null)

  // Fluidoterapia states
  const [activeFluidTab, setActiveFluidTab] = useState('reposicion')
  const [deshidratacion, setDeshidratacion] = useState('8')
  const [perdidas, setPerdidas] = useState('1')
  const [mantRate, setMantRate] = useState('60')
  const [horasPasar, setHorasPasar] = useState('24')
  const [equipoGoteo, setEquipoGoteo] = useState('60')
  const [bolsaVolumen, setBolsaVolumen] = useState('250')

  // CRI
  const [criPeso, setCriPeso] = useState('5')
  const [criDosis, setCriDosis] = useState('')
  const [criConcFarmaco, setCriConcFarmaco] = useState('')
  const [criVelFluidos, setCriVelFluidos] = useState('')

  // Diluciones
  const [dilConcFarmaco, setDilConcFarmaco] = useState('50')
  const [dilConcDeseada, setDilConcDeseada] = useState('10')
  const [dilVolFinal, setDilVolFinal] = useState('100')

  // Derived biological data
  const biologicalData = useMemo(() => {
    const w = parseFloat(patient.peso) || 0
    if (w <= 0) return { asc: 0, rer: 0 }
    const asc = 0.101 * Math.pow(w, 0.666)
    const rer = 70 * Math.pow(w, 0.75)
    return { asc: asc.toFixed(2), rer: Math.round(rer) }
  }, [patient.peso])

  const fluidsData = useMemo(() => {
    const pesoNum = parseFloat(patient.peso) || 0
    const mant = parseFloat(mantRate) || 0
    const deshid = parseFloat(deshidratacion) || 0
    const perdidasNum = parseFloat(perdidas) || 0
    const horas = parseFloat(horasPasar) || 24
    const equipo = parseFloat(equipoGoteo) || 60
    const bolsa = parseFloat(bolsaVolumen) || 250

    const calcMant = mant * pesoNum * (horas / 24)
    const calcDeficit = pesoNum * deshid * 10
    const totalVol = calcMant + calcDeficit + perdidasNum

    const mlHora = horas > 0 ? (totalVol / horas) : 0
    const gotasMin = (mlHora * equipo) / 60
    const intervalo = gotasMin > 0 ? (60 / gotasMin) : 0
    const duracionBolsa = mlHora > 0 ? (bolsa / mlHora) : 0

    return {
      mlHora: mlHora.toFixed(1),
      gotasMin: Math.round(gotasMin),
      intervalo: intervalo.toFixed(1),
      duracionBolsa: duracionBolsa.toFixed(1),
      bolsaVol: bolsa
    }
  }, [patient.peso, mantRate, deshidratacion, perdidas, horasPasar, equipoGoteo, bolsaVolumen])

  const criData = useMemo(() => {
    const peso = parseFloat(criPeso) || 0
    const dosis = parseFloat(criDosis) || 0
    const conc = parseFloat(criConcFarmaco) || 0
    const vel = parseFloat(criVelFluidos) || 0
    const bolsa = parseFloat(bolsaVolumen) || 250

    if (peso > 0 && dosis > 0 && conc > 0 && vel > 0 && bolsa > 0) {
      const tiempoBolsaHr = bolsa / vel
      const mgTotales = (dosis / 1000) * peso * 60 * tiempoBolsaHr
      const volAnadir = mgTotales / conc
      return { volAñadir: volAnadir.toFixed(2), isValid: true }
    }
    return { volAñadir: '0.00', isValid: false }
  }, [criPeso, criDosis, criConcFarmaco, criVelFluidos, bolsaVolumen])

  const dilucionesData = useMemo(() => {
    const c1 = parseFloat(dilConcFarmaco) || 0
    const c2 = parseFloat(dilConcDeseada) || 0
    const v2 = parseFloat(dilVolFinal) || 0
    if (c1 > 0 && c2 > 0 && v2 > 0 && c1 > c2) {
      const v1 = (c2 * v2) / c1
      const volDiluyente = v2 - v1
      return { volFarmaco: v1.toFixed(2), volDiluyente: volDiluyente.toFixed(2), isValid: true }
    }
    return { volFarmaco: '0.00', volDiluyente: '0.00', isValid: false }
  }, [dilConcFarmaco, dilConcDeseada, dilVolFinal])

  // Vademecum logic
  const toggleFavorite = (id) => setFavorites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id])

  const triggerImageUpload = (id) => { setUploadingId(id); if (fileInputRef.current) fileInputRef.current.click() }

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file && uploadingId) {
      if (file.size > 800000) { alert('La imagen es muy pesada. Por favor usa una de menos de 800KB para no llenar la memoria.'); return }
      const reader = new FileReader()
      reader.onloadend = () => { setDrugImages(prev => ({ ...prev, [uploadingId]: reader.result })); setUploadingId(null) }
      reader.readAsDataURL(file)
    }
  }

  const sortedAndFilteredDrugs = useMemo(() => {
    let filtered = DB_MEDICAMENTOS.filter(m => m.meta_data.nombre_generico.toLowerCase().includes(searchTerm.toLowerCase()) || m.meta_data.grupo_farmacologico.toLowerCase().includes(searchTerm.toLowerCase()))
    filtered.sort((a,b) => {
      const aFav = favorites.includes(a.id)
      const bFav = favorites.includes(b.id)
      if (aFav && !bFav) return -1
      if (!aFav && bFav) return 1
      return a.meta_data.nombre_generico.localeCompare(b.meta_data.nombre_generico)
    })
    return filtered
  }, [searchTerm, favorites])

  // Calculator logic
  const addDrug = () => setCalcs([...calcs, { id: Date.now(), drugId: '', dose: 0, concentration: 1, tomas: 1, presIndex: 0, protIndex: 0 }])
  const updateCalc = (id, fields) => setCalcs(calcs.map(c => c.id === id ? { ...c, ...fields } : c))
  const removeCalc = (id) => setCalcs(calcs.filter(c => c.id !== id))

  const value = {
    patient, setPatient,
    calcs, setCalcs, addDrug, updateCalc, removeCalc,
    favorites, toggleFavorite,
    drugImages, triggerImageUpload,
    searchTerm, setSearchTerm, sortedAndFilteredDrugs,
    fileInputRef, handleFileChange,
    SPECIES_LIST,
    biologicalData,
    // fluids
    activeFluidTab, setActiveFluidTab, deshidratacion, setDeshidratacion, perdidas, setPerdidas, mantRate, setMantRate, horasPasar, setHorasPasar, equipoGoteo, setEquipoGoteo, bolsaVolumen, setBolsaVolumen,
    fluidsData,
    // cri / diluciones
    criPeso, setCriPeso, criDosis, setCriDosis, criConcFarmaco, setCriConcFarmaco, criVelFluidos, setCriVelFluidos, criData,
    dilConcFarmaco, setDilConcFarmaco, dilConcDeseada, setDilConcDeseada, dilVolFinal, setDilVolFinal, dilucionesData,
    DB_MEDICAMENTOS
  }

  return (
    <AppContext.Provider value={value}>
      {/* Hidden file input for drug image uploads */}
      <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
