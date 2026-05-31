import React, { useEffect, useState } from 'react'
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
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header onOpen={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {loading ? (
        <div className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="text-center space-y-4">
            <div className="mx-auto h-14 w-14 rounded-full border-4 border-white/20 border-t-white animate-spin" />
            <p className="text-slate-300 uppercase tracking-[0.3em] text-sm">Cargando la app...</p>
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
