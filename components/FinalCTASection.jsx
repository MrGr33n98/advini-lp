import { FaWhatsapp, FaCalendarAlt, FaLock, FaUserShield, FaHandshake, FaExclamationCircle } from 'react-icons/fa';
import React from "react";

export default function FinalCTASection() {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-r from-blue-custom-800 to-blue-custom-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FaExclamationCircle className="text-yellow-300 text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
          Sua Dívida Pode Ser Reduzida em até <span className="underline decoration-yellow-300 decoration-4">90%</span>!
        </h2>
        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto text-balance">
          Não espere mais para resolver sua situação financeira. Dê o primeiro passo rumo à liberdade hoje mesmo. Nossa análise é <span className="font-bold">gratuita e sem compromisso</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a 
            href="https://calendly.com/seu-usuario-calendly"
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-secondary hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-xl transition duration-300 flex items-center justify-center cta-button text-lg"
          >
            <FaCalendarAlt className="mr-3 text-xl" /> Agendar Consulta Gratuita
          </a>
          <a 
            href="https://wa.me/5565992918889?text=Olá!%20Vi%20o%20site%20e%20quero%20saber%20como%20reduzir%20minha%20dívida."
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white hover:bg-gray-100 text-blue-custom-700 font-bold py-3.5 px-8 rounded-lg shadow-xl transition duration-300 flex items-center justify-center cta-button text-lg"
          >
            <FaWhatsapp className="mr-3 text-xl" /> Falar no WhatsApp Agora
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm text-blue-200">
          <div className="flex items-center">
            <FaLock className="mr-2" /> Análise 100% Segura
          </div>
          <div className="flex items-center">
            <FaUserShield className="mr-2" /> Sigilo Profissional Absoluto
          </div>
          <div className="flex items-center">
            <FaHandshake className="mr-2" /> Sem Compromisso Inicial
          </div>
        </div>
        <p className="text-xs text-blue-300 mt-8">Atendemos todo o Brasil de forma online e presencial em Cuiabá-MT.</p>
      </div>
    </section>
  );
}
