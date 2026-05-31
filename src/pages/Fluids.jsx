import React from 'react'
import { Droplet, HelpCircle, ActivitySquare, Box, Clock } from 'lucide-react'
import { useAppContext } from '../context/AppContext'

export default function Fluids() {
  const { patient, setPatient, activeFluidTab, setActiveFluidTab, deshidratacion, setDeshidratacion, perdidas, setPerdidas, mantRate, setMantRate, horasPasar, setHorasPasar, equipoGoteo, setEquipoGoteo, bolsaVolumen, setBolsaVolumen, fluidsData, criData, dilucionesData, criPeso, setCriPeso, criDosis, setCriDosis, criConcFarmaco, setCriConcFarmaco, criVelFluidos, setCriVelFluidos, dilConcFarmaco, setDilConcFarmaco, dilConcDeseada, setDilConcDeseada, dilVolFinal, setDilVolFinal, SPECIES_LIST } = useAppContext()

  return (
    <div className="max-w-[1200px] mx-auto animate-in fade-in duration-500 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-[#111111] border border-[#222] rounded-[2rem] p-6 shadow-xl">
            <div className="flex gap-2 mb-8 border-b border-[#222] pb-4 overflow-x-auto custom-scrollbar">
              <button onClick={() => setActiveFluidTab('reposicion')} className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFluidTab === 'reposicion' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white'}`}>Reposición</button>
              <button onClick={() => setActiveFluidTab('cri')} className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFluidTab === 'cri' ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-white'}`}>Infusión Continua (CRI)</button>
              <button onClick={() => setActiveFluidTab('diluciones')} className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFluidTab === 'diluciones' ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-white'}`}>Diluciones</button>
            </div>

            {activeFluidTab === 'reposicion' && (
              <>
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4"><div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333]"><Droplet className="text-blue-500" size={28} /></div><div><h2 className="text-2xl font-black text-white leading-tight">Fluidoterapia</h2><p className="text-slate-500 text-sm font-bold">Plan de reposición</p></div></div>
                  <button className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#1a1a1a] transition-all"><HelpCircle size={20} /></button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Especie</label><select value={patient.especie} onChange={e => setPatient({...patient, especie: e.target.value})} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white appearance-none">{SPECIES_LIST.map(sp => <option key={sp.id} value={sp.id}>{sp.label}</option>)}</select></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Peso (KG)</label><input type="number" value={patient.peso} onChange={e => setPatient({...patient, peso: e.target.value})} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>

                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">% Deshid</label><input type="number" value={deshidratacion} onChange={e => setDeshidratacion(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mant. (ml/kg)</label><input type="number" value={mantRate} onChange={e => setMantRate(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>

                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Pérdidas (ml)</label><input type="number" value={perdidas} onChange={e => setPerdidas(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Horas a pasar</label><input type="number" value={horasPasar} onChange={e => setHorasPasar(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                </div>
              </>
            )}

            {activeFluidTab === 'cri' && (
              <>
                <div className="flex items-center justify-between mb-8"><div className="flex items-center gap-4"><div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333]"><ActivitySquare className="text-blue-500" size={28} /></div><div><h2 className="text-2xl font-black text-white leading-tight">CRI Calculator</h2><p className="text-slate-500 text-sm font-bold">Analgesia y Anestesia</p></div></div><button className="w-10 h-10 rounded-full border border-[#333] flex items-center justify-center text-slate-500 hover:text-white hover:bg-[#1a1a1a] transition-all"><HelpCircle size={20} /></button></div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Peso (KG)</label><input type="number" value={criPeso} onChange={e => setCriPeso(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Dosis (MCG/KG/MIN)</label><input type="number" value={criDosis} onChange={e => setCriDosis(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Conc. Fármaco (MG/ML)</label><input type="number" value={criConcFarmaco} onChange={e => setCriConcFarmaco(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Velocidad Fluidos (ML/HR)</label><input type="number" value={criVelFluidos} onChange={e => setCriVelFluidos(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white" /></div>
                </div>
              </>
            )}

            {activeFluidTab === 'diluciones' && (
              <>
                <div className="flex items-center justify-between mb-8"><div className="flex items-center gap-4"><div className="w-14 h-14 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-[#333]"><Box className="text-emerald-500" size={28} /></div><div><h2 className="text-2xl font-black text-white leading-tight">Calculadora de Diluciones</h2><p className="text-slate-500 text-sm font-bold">Fórmula C1V1 = C2V2</p></div></div></div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Conc. Fármaco (MG/ML)</label><input type="number" value={dilConcFarmaco} onChange={e => setDilConcFarmaco(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-emerald-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Conc. Deseada (MG/ML)</label><input type="number" value={dilConcDeseada} onChange={e => setDilConcDeseada(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-emerald-500/50 text-white" /></div>
                  <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Volumen Final (ML)</label><input type="number" value={dilVolFinal} onChange={e => setDilVolFinal(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-lg font-bold border-none outline-none focus:ring-2 focus:ring-emerald-500/50 text-white" /></div>
                </div>
              </>
            )}
          </div>

          {(activeFluidTab === 'reposicion' || activeFluidTab === 'cri') && (
            <div className="bg-[#111111] border border-[#222] rounded-[2rem] p-6 shadow-xl">
              <div className="flex items-center gap-2 mb-6"><h3 className="text-sm font-black uppercase tracking-widest text-slate-400">Configuración Venoclisis</h3></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeFluidTab === 'reposicion' && (<div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Equipo</label><select value={equipoGoteo} onChange={e => setEquipoGoteo(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-sm font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white appearance-none"><option value="60">Micro (60 gtt/ml)</option><option value="20">Macro (20 gtt/ml)</option><option value="15">Macro (15 gtt/ml)</option><option value="10">Sangre (10 gtt/ml)</option></select></div>)}
                <div className="space-y-2"><label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Bolsa</label><select value={bolsaVolumen} onChange={e => setBolsaVolumen(e.target.value)} className="w-full bg-[#1a1a1a] rounded-2xl p-4 text-sm font-bold border-none outline-none focus:ring-2 focus:ring-blue-500/50 text-white appearance-none"><option value="100">100 ml</option><option value="250">250 ml</option><option value="500">500 ml</option><option value="1000">1000 ml</option></select></div>
              </div>
            </div>
          )}
        </div>

        <div className="lg:col-span-5 space-y-6">
          {activeFluidTab === 'reposicion' && (<><div className="bg-[#111111] border border-[#222] rounded-[2rem] p-8 text-center flex flex-col justify-center h-[320px] shadow-2xl relative overflow-hidden"><div className="absolute top-6 left-1/2 -translate-x-1/2"><span className="bg-blue-500/10 text-blue-400 text-[10px] font-black px-4 py-1.5 rounded-full border border-blue-500/20">Velocidad Infusión</span></div><div className="mt-8 mb-8"><h1 className="text-[5rem] font-black tracking-tighter text-white leading-none mb-2">{fluidsData.mlHora}</h1><p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">ML / HORA</p></div><div className="grid grid-cols-2 gap-4 mt-auto pt-6 border-t border-[#222]"><div><p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">GOTAS/MIN</p><p className="text-2xl font-black text-white">{fluidsData.gotasMin}</p></div><div><p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">INTERVALO</p><p className="text-lg font-black text-blue-400">1 gota c/{fluidsData.intervalo}s</p></div></div></div><div className="bg-[#061110] border border-[#0f3d35] rounded-[2rem] p-8 relative shadow-[0_0_30px_rgba(16,185,129,0.05)]"><div className="flex justify-between items-center mb-6"><div className="flex items-center gap-2 text-emerald-500"><Clock size={18} /><h3 className="text-sm font-black uppercase tracking-widest">Duración Bolsa</h3></div><span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/20">{fluidsData.bolsaVol} ml</span></div><div className="text-center bg-[#0a1a18] rounded-2xl p-8 border border-[#12312b]"><div className="flex items-baseline justify-center gap-2 mb-2"><span className="text-5xl font-black text-white">{fluidsData.duracionBolsa}</span><span className="text-xl font-bold text-emerald-600">hrs</span></div><p className="text-[10px] font-black text-emerald-600/70 uppercase tracking-widest">PARA TERMINAR</p></div></div></>)}

          {activeFluidTab === 'cri' && (<div className="bg-[#111111] border border-[#222] rounded-[2rem] p-8 text-center flex flex-col justify-center h-full min-h-[320px] shadow-2xl relative overflow-hidden">{criData.isValid ? (<><div className="absolute top-6 left-1/2 -translate-x-1/2"><span className="bg-purple-500/10 text-purple-400 text-[10px] font-black px-4 py-1.5 rounded-full border border-purple-500/20">Volumen a Añadir</span></div><div className="mt-8 mb-8"><h1 className="text-[5rem] font-black tracking-tighter text-white leading-none mb-2">{criData.volAñadir}</h1><p className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">ML</p></div><div className="mt-auto pt-6 border-t border-[#222]"><p className="text-[10px] font-bold text-slate-400">Añade <span className="text-purple-400">{criData.volAñadir} ml</span> del fármaco a la bolsa de <span className="text-purple-400">{bolsaVolumen} ml</span> y administralo a <span className="text-purple-400">{criVelFluidos} ml/hr</span>.</p></div></>) : (<div className="text-slate-500 flex flex-col items-center gap-4"><ActivitySquare size={48} className="opacity-50" /><p className="text-lg font-bold">Ingresa datos para calcular CRI</p></div>)}</div>)}

          {activeFluidTab === 'diluciones' && (<div className="bg-[#0b1211] border border-[#142e2a] rounded-[2rem] p-8 flex flex-col justify-center shadow-2xl">{dilucionesData.isValid ? (<div className="space-y-8"><div className="text-center"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">VOLUMEN DE FÁRMACO</p><div className="flex items-baselinejustify-center gap-2"><h1 className="text-6xl font-black text-white tracking-tighter">{dilucionesData.volFarmaco}</h1><span className="text-2xl font-black text-white">ml</span></div></div><div className="w-full h-px bg-[#142e2a]"></div><div className="text-center"><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">VOLUMEN DE DILUYENTE</p><div className="flex items-baseline justify-center gap-2"><h1 className="text-6xl font-black text-emerald-400 tracking-tighter">{dilucionesData.volDiluyente}</h1><span className="text-2xl font-black text-emerald-400">ml</span></div></div></div>) : (<div className="text-center text-slate-500 py-12"><Box size={48} className="mx-auto mb-4 opacity-50 text-emerald-500" /><p className="text-lg font-bold">Ingresa datos para calcular</p><p className="text-xs mt-2">C1 debe ser mayor a C2</p></div>)}</div>)}
        </div>
      </div>
    </div>
  )
}
