'use client'

import Link from 'next/link'

export default function FloatingWhatsAppButton() {
  return (
    <Link 
      href="https://wa.me/5565992918889" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Fale conosco no WhatsApp" 
      className="fixed bottom-8 right-8 z-100 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-4 flex items-center justify-center shadow-xl animate-pulse"
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </Link>
  )
}