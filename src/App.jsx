import React, { useEffect, useState } from 'react'
import { useAppContext } from './context/AppContext'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Calculator from './pages/Calculator'
import Vademecum from './pages/Vademecum'
import DrugDetail from './pages/DrugDetail'
import Fluids from './pages/Fluids'
import Settings from './pages/Settings'

const App = () => {
  const [loading, setLoading] = useState(true)
  const { apiLoading } = useAppContext()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header onOpen={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {(loading || apiLoading) ? (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="text-center space-y-6">
            <h1 className="text-6xl loader-title">DOSIS PERRONAS</h1>
            <div className="syringe-wrap mx-auto">
              <svg className="syringe" viewBox="0 0 80 200" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <clipPath id="syringeClip">
                    <rect x="18" y="20" width="44" height="140" rx="6" />
                  </clipPath>
                </defs>
                <g>
                  <rect x="18" y="20" width="44" height="140" rx="6" fill="none" stroke="#64748b" strokeWidth="3" />
                  <g clipPath="url(#syringeClip)">
                    <rect className="liquid liquid-mask" x="18" y="80" width="44" height="80" />
                  </g>
                  <rect x="30" y="6" width="20" height="14" rx="2" fill="#cbd5e1" />
                  <rect x="27" y="0" width="26" height="6" rx="2" fill="#94a3b8" />
                </g>
              </svg>
            </div>
            <p className="text-slate-300 uppercase tracking-[0.3em] text-sm">Cargando la aplicación, por favor espera...</p>
          </div>
        </div>
      ) : (
        <main className="flex-1 max-w-[1400px] mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/calc" element={<Calculator />} />
            <Route path="/vade" element={<Vademecum />} />
            <Route path="/vade/:drugId" element={<DrugDetail />} />
            <Route path="/fluids" element={<Fluids />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Calculator />} />
          </Routes>
        </main>
      )}
    </div>
  )
}

export default App
