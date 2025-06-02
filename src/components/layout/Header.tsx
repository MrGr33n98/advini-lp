'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link href="#" className="flex items-center" aria-label="Página inicial Advini Advocacia">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl">AD</div>
              <span className="ml-3 text-xl font-bold text-dark">Advini Advocacia</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-700 hover:text-primary font-medium transition duration-300">Serviços</Link>
            <Link href="#process" className="text-gray-700 hover:text-primary font-medium transition duration-300">Como Funciona</Link>
            <Link href="#results" className="text-gray-700 hover:text-primary font-medium transition duration-300">Resultados</Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition duration-300">Depoimentos</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+5565992918889" className="text-gray-700 hover:text-primary">
              <i className="fas fa-phone-alt mr-1"></i> (65) 99291-8889
            </a>
            <a href="https://calendly.com/seu-usuario-calendly" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-full transition duration-300 flex items-center cta-button">
              <i className="far fa-calendar-alt mr-2"></i> Agendar
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Abrir menu móvel"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg absolute w-full top-20 left-0 z-30`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Serviços</Link>
          <Link href="#process" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Como Funciona</Link>
          <Link href="#results" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Resultados</Link>
          <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-100">Depoimentos</Link>
          <a href="https://calendly.com/seu-usuario-calendly" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-blue-700 mt-2 text-center">
            <i className="far fa-calendar-alt mr-2"></i> Agendar Consulta
          </a>
        </div>
      </div>
    </nav>
  )
}