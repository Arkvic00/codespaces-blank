import React from 'react'
import { Menu } from 'lucide-react'

export default function Header({ onOpen }) {
  return (
    <>
      <button onClick={onOpen} className="fixed top-6 left-6 z-50 p-3 bg-[#0f172a] border border-white/10 rounded-xl hover:bg-white/5 transition-all">
        <Menu size={24} />
      </button>
    </>
  )
}
