'use client'

import { useState } from 'react'
import { WA_PRIMARY } from '@/lib/whatsapp'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-white/5">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          <span className="text-white font-black text-2xl tracking-tight">
            מאיה<span className="text-brand-500">.</span>
          </span>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">איך זה עובד</a>
            <a href="#use-cases" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">מקרי שימוש</a>
            <a href="#pricing" className="text-gray-400 hover:text-white text-sm font-medium transition-colors">מחירים</a>
            <a href={WA_PRIMARY} target="_blank" rel="noopener noreferrer" className="btn-primary !py-2.5 !px-6 !text-base">
              התחל עכשיו
            </a>
          </div>

          <button
            className="md:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="תפריט"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-4 border-t border-white/10 flex flex-col gap-4">
            <a href="#how-it-works" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 transition-colors">איך זה עובד</a>
            <a href="#use-cases" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 transition-colors">מקרי שימוש</a>
            <a href="#pricing" onClick={() => setOpen(false)} className="text-gray-300 hover:text-white font-medium py-2 transition-colors">מחירים</a>
            <a href={WA_PRIMARY} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary w-full text-center">
              התחל עכשיו
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
