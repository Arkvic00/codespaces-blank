import React from 'react'

export default function SpeciesBadge({ specie, active, onClick }) {
  return (
    <button onClick={() => onClick(specie.id)} className={`species-badge group relative flex flex-col items-center gap-2 px-4 py-3 rounded-2xl border transition-all ${active ? 'bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg scale-105' : 'bg-white/5 text-slate-300 border-white/6 hover:bg-white/10'}`}>
      <div className={`sticker w-12 h-12 rounded-xl grid place-items-center text-2xl ${active ? 'animate-bounce' : 'animate-pulse/60'}`}>
        <span className="leading-none">{specie.icon || '🐾'}</span>
      </div>
      <span className="text-[11px] font-black tracking-[0.25em] uppercase">{specie.label.replace('_', ' ')}</span>
      <style jsx>{`
        .species-badge .sticker { font-size: 1.25rem; }
        @keyframes floaty { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
        .animate-pulse\\/60 { animation: floaty 2.6s ease-in-out infinite; }
      `}</style>
    </button>
  )
}
