'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PopupOffer() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  if (!showPopup) return null

  return (
    <div className="fixed bottom-5 left-5 z-100 bg-white rounded-xl shadow-xl p-6 max-w-xs md:max-w-sm animate-slideIn">
      <button 
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="flex items-start">
        <div className="bg-yellow-100 rounded-full p-3 mr-4">
          <i className="fas fa-gift text-yellow-600 text-2xl"></i>
        </div>
        <div>
          <h3 className="font-bold text-lg text-dark mb-2">Oferta Especial!</h3>
          <p className="text-gray-600 mb-3">Primeira consulta gratuita + análise de contrato sem custo.</p>
          <Link href="#contact" className="bg-secondary hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded-full text-sm inline-block">
            Quero minha consulta grátis
          </Link>
        </div>
      </div>
    </div>
  )
}