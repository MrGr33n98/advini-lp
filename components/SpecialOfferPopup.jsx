'use client'
import { useState, useEffect } from 'react';
import { FaTimes, FaGift, FaWhatsapp } from 'react-icons/fa';

export default function SpecialOfferPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('specialOfferPopupShown');
    if (!popupShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem('specialOfferPopupShown', 'true'); // Marcar como mostrado nesta sessão
      }, 15000); // Mostrar após 15 segundos

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div 
      id="special-offer-popup"
      className="popup bg-gradient-to-br from-blue-custom-600 to-blue-custom-700 text-white rounded-xl shadow-2xl p-6 border-2 border-yellow-400"
      role="alertdialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-description"
    >
      <button 
        className="popup-close text-yellow-300 hover:text-white transition-colors" 
        onClick={closePopup}
        aria-label="Fechar oferta especial"
      >
        <FaTimes className="text-xl" />
      </button>
      <div className="flex items-start">
        <div className="bg-yellow-400 rounded-full p-3 mr-4 shadow-md">
          <FaGift className="text-blue-custom-700 text-2xl" />
        </div>
        <div>
          <h3 id="popup-title" className="font-bold text-lg text-yellow-300 mb-1">Oferta Exclusiva para Você!</h3>
          <p id="popup-description" className="text-sm mb-4">
            Mencionando este pop-up, ganhe uma <strong className="font-semibold">análise contratual gratuita</strong> na sua primeira consulta sobre dívidas bancárias. Não perca!
          </p>
          <a 
            href="https://wa.me/5565992918889?text=Olá!%20Vi%20a%20oferta%20especial%20no%20site%20e%20quero%20minha%20análise%20contratual%20gratuita." 
            target="_blank"
            rel="noopener noreferrer"
            onClick={closePopup}
            className="bg-yellow-500 hover:bg-yellow-600 text-dark font-bold py-2.5 px-5 rounded-lg text-sm inline-flex items-center transition-all duration-300 shadow-md hover:shadow-lg cta-button"
          >
            <FaWhatsapp className="mr-2" /> Quero Minha Análise Grátis
          </a>
        </div>
      </div>
    </div>
  );
}
