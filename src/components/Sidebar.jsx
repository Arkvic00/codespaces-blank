import React from 'react'
import { X, Calculator, Droplet, BookOpen, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Sidebar({ open, onClose }) {
  const navigate = useNavigate()
  const items = [
    { id: 'calc', label: 'Calculadora', icon: Calculator, path: '/' },
    { id: 'fluids', label: 'Fluidoterapia', icon: Droplet, path: '/fluids' },
    { id: 'vade', label: 'Vademécum', icon: BookOpen, path: '/vade' },
    { id: 'settings', label: 'Ajustes', icon: Settings, path: '/settings' }
  ]

  return (
    <div className={`fixed inset-0 z-[60] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <aside className={`absolute top-0 left-0 h-full w-80 bg-[#0f172a] p-8 shadow-2xl transition-transform duration-300 transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-black italic">DP<span className="text-red-500">.</span></h2>
          <button onClick={onClose}><X/></button>
        </div>
        <nav className="space-y-4">
          {items.map(item => (
            <button key={item.id} onClick={() => { navigate(item.path); onClose(); }} className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold text-sm transition-all text-slate-500 hover:text-white`}> 
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>
    </div>
  )
}
