'use client'
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5565992918889?text=Ol%C3%A1!%20Visitei%20o%20site%20da%20Advini%20Advocacia%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Fale conosco no WhatsApp" 
      title="Fale conosco no WhatsApp"
      className="floating-button bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3.5 md:p-4 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
}