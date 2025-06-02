'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero-gradient text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reduza suas dívidas bancárias em até <span className="text-yellow-300">90%</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Advogados especializados em revisão de juros abusivos e negociação de dívidas. Conquiste sua liberdade financeira!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="https://calendly.com/seu-usuario-calendly" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center cta-button">
                <i className="far fa-calendar-alt mr-3 text-xl"></i> Consulta Gratuita
              </Link>
              <Link href="https://wa.me/5565992918889" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 flex items-center justify-center cta-button">
                <i className="fab fa-whatsapp mr-3 text-2xl"></i> Fale no WhatsApp
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 justify-center lg:justify-start">
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-yellow-400 text-2xl"></i>
                <div>
                  <p className="font-bold text-white text-xl">+3.000</p>
                  <p className="text-sm text-blue-100">clientes atendidos</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-star text-yellow-400 text-2xl"></i>
                <div>
                  <p className="font-bold text-white text-xl">4.9/5.0</p>
                  <p className="text-sm text-blue-100">(327 avaliações)</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-dollar-sign text-yellow-400 text-2xl"></i>
                <div>
                  <p className="font-bold text-white text-xl">+R$50 milhões</p>
                  <p className="text-sm text-blue-100">em dívidas renegociadas</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="lead-form p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-2">Análise Gratuita do Seu Caso</h3>
              <p className="text-blue-100 mb-6">Preencha e descubra como podemos reduzir sua dívida</p>
              
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Seu nome completo" className="w-full px-4 py-3 rounded-lg" />
                </div>
                <div>
                  <input type="tel" placeholder="Seu WhatsApp" className="w-full px-4 py-3 rounded-lg" />
                </div>
                <div>
                  <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 rounded-lg" />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg">
                    <option value="">Tipo de dívida</option>
                    <option value="cartao">Cartão de Crédito</option>
                    <option value="financiamento">Financiamento de Veículo</option>
                    <option value="consignado">Crédito Consignado</option>
                    <option value="pessoal">Crédito Pessoal</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
                <div>
                  <textarea placeholder="Descreva brevemente sua situação" rows="3" className="w-full px-4 py-3 rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-dark font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 cta-button">
                  Enviar para Análise Gratuita
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}