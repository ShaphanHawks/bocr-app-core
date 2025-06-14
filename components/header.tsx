"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-white w-full mb-6">
      <div className="flex justify-between items-center px-4 py-3 relative" style={{ minHeight: '4.6rem' }}>
        <div className="w-10" /> {/* Spacer for balance */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center" style={{height: '115%'}}>
          <img 
            src="/ontrack-masthead.png" 
            alt="OnTrack Masthead" 
            className="object-contain h-16 sm:h-20 w-auto" 
            style={{ maxHeight: '100%', maxWidth: '90vw' }}
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#F26D4B] text-white p-2 rounded-full z-50"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div 
          className="absolute inset-0 bg-white z-40 px-6 py-20 flex flex-col space-y-6 text-lg"
          onClick={handleLinkClick}
        >
          <Link href="/history" className="hover:text-[#F26D4B] transition-colors">
            History
          </Link>
        </div>
      )}
    </header>
  )
} 