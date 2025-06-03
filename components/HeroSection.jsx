'use client';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';
import styles from './HeroSection.module.css';

// COMPONENTES AUXILIARES (movidos para o final para melhor leitura do componente principal)
function Indicador({ icon, valor, legenda }) {
  return (
    <div className="flex items-center space-x-2">
      {icon}
      <div>
        <p className="font-semibold text-white">{valor}</p>
        <p className="text-blue-200">{legenda}</p>
      </div>
    </div>
  );
}

function Input({ name, type, placeholder }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full px-4 py-3 rounded-lg text-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
    />
  );
}

function Select({ name, options }) {
  return (
    <select
      name={name}
      required
      className="w-full px-4 py-3 rounded-lg text-sm text-slate-500 bg-white/90 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
    >
      <option value="">Tipo de dívida principal</option>
      {options.map((opt) => (
        <option key={opt} value={opt.toLowerCase().replace(/\s+/g, '_')}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default function HeroSection() {
  // Altura da Navbar (ex: h-20 que é 5rem. No Tailwind, -mt-20 = margin-top: -5rem)
  // Padding original da section era: py-16 md:py-24 lg:py-32
  // Novo padding superior para compensar o -mt-20 (5rem):
  // pt-16 (4rem) + 5rem = 9rem -> pt-36
  // md:pt-24 (6rem) + 5rem = 11rem -> md:pt-44
  // lg:pt-32 (8rem) + 5rem = 13rem -> lg:pt-52
  // Padding inferior permanece o mesmo.

  return (
    <section 
      className={`${styles.heroSection} -mt-20 text-white relative overflow-hidden 
                 pb-16 md:pb-24 lg:pb-32 
                 pt-36 md:pt-44 lg:pt-52`}
    >
      {/* A linha <div className="absolute inset-0 bg-black/10 z-0" aria-hidden="true" /> foi removida 
          conforme nossa discussão anterior para melhorar a aparência do background. 
          Se quiser de volta, pode adicionar aqui. */}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* COLUNA ESQUERDA - TEXTO */}
          <div className="w-full text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Reduza suas dívidas bancárias em até <span className="text-yellow-300">90%</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 text-balance">
              Advogados especializados em revisão de juros abusivos e negociação de dívidas. Conquiste sua liberdade financeira!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <a
                href="https://calendly.com/seu-usuario-calendly" // LEMBRE-SE DE ATUALIZAR ESTE LINK
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center text-lg"
              >
                <FaCalendarAlt className="mr-3 text-xl" />
                Consulta Gratuita
              </a>
              <a
                href="https://wa.me/5565992918889?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20redução%20de%20dívidas."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-300 flex items-center justify-center text-lg"
              >
                <FaWhatsapp className="mr-3 text-2xl" />
                Fale no WhatsApp
              </a>
            </div>

            {/* Indicadores */}
            <div className="flex flex-wrap gap-x-6 gap-y-4 justify-center md:justify-start text-sm">
              <Indicador
                icon={<FaCheckCircle className="text-yellow-400 text-xl" />}
                valor="+3.000"
                legenda="clientes atendidos"
              />
              <Indicador
                icon={<FaStar className="text-yellow-400 text-xl" />}
                valor="4.9/5.0"
                legenda="(+320 avaliações)"
              />
              <Indicador
                icon={<FaDollarSign className="text-yellow-400 text-xl" />}
                valor="+1 milhão"
                legenda="em dívidas renegociadas"
              />
            </div>
          </div>

          {/* COLUNA DIREITA - FORMULÁRIO */}
          <div className="relative mt-10 lg:mt-0">
            <div className="bg-[#1E293B]/80 backdrop-blur-md lead-form p-6 md:p-8 rounded-xl shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
                Análise Gratuita do Seu Caso
              </h3>
              <p className="text-blue-100 mb-6 text-center text-sm sm:text-base">
                Preencha e descubra como podemos reduzir sua dívida.
              </p>

              <form className="space-y-4">
                <Input name="nome" type="text" placeholder="Seu nome completo" />
                <Input name="whatsapp" type="tel" placeholder="Seu WhatsApp (DDD + Número)" />
                <Input name="email" type="email" placeholder="Seu melhor e-mail" />
                <Select
                  name="tipo_divida"
                  options={[
                    'Cartão de Crédito',
                    'Financiamento de Veículo',
                    'Crédito Consignado',
                    'Crédito Pessoal / Cheque Especial',
                    'Crédito Imobiliário',
                    'Outro',
                  ]}
                />
                <textarea
                  name="descricao"
                  placeholder="Descreva brevemente sua situação (opcional)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-dark font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-300 text-base"
                >
                  Enviar para Análise Gratuita
                </button>
                <p className="text-xs text-blue-200 text-center pt-2">
                  Seus dados estão seguros conosco.
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}