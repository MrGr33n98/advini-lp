'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FinalCTA() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Lógica para enviar o formulário
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para <span className="text-yellow-300">reduzir suas dívidas</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Preencha o formulário e um de nossos especialistas entrará em contato para uma análise gratuita do seu caso.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Consulta 100% Gratuita</h3>
                  <p className="text-blue-100">Sem custos para análise inicial do seu caso</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Sem Compromisso</h3>
                  <p className="text-blue-100">Você só contrata se aprovar nossa estratégia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-2 mr-4 mt-1">
                  <i className="fas fa-check text-white text-sm"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Resultados Garantidos</h3>
                  <p className="text-blue-100">Ou você não paga nada por nossos serviços</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {formSubmitted ? (
              <div className="bg-white text-dark p-8 rounded-xl shadow-lg text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-check text-green-600 text-3xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Formulário Enviado com Sucesso!</h3>
                <p className="text-gray-600 mb-6">Um de nossos especialistas entrará em contato em até 24 horas úteis.</p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
                >
                  Enviar Novo Formulário
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white text-dark p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-center">Fale com um Especialista</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="debt" className="block text-gray-700 font-medium mb-1">Tipo de Dívida</label>
                    <select 
                      id="debt" 
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Selecione</option>
                      <option value="cartao">Cartão de Crédito</option>
                      <option value="financiamento">Financiamento de Veículo</option>
                      <option value="consignado">Crédito Consignado</option>
                      <option value="pessoal">Crédito Pessoal</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="value" className="block text-gray-700 font-medium mb-1">Valor Aproximado</label>
                    <input 
                      type="text" 
                      id="value" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 mt-4 cta-button"
                  >
                    Enviar para Análise Gratuita
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}