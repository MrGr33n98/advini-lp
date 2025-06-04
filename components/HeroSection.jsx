'use client';
import { useState } from 'react';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaStar, FaDollarSign } from 'react-icons/fa';
import styles from './HeroSection.module.css';
import { supabase } from '../lib/supabaseClient';

// COMPONENTES AUXILIARES
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

function Input({ name, type, placeholder, value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg text-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
    />
  );
}

function Select({ name, options, value, onChange }) {
  return (
    <select
      name={name}
      required
      value={value}
      onChange={onChange}
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
  // Estado do formulário
  const [form, setForm] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    tipo_divida: '',
    descricao: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Manipulador de mudança
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manipulador de envio
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    const { error } = await supabase.from('leads').insert([form]);
    setLoading(false);
    if (!error) {
      setSuccess(true);
      setForm({
        nome: '',
        whatsapp: '',
        email: '',
        tipo_divida: '',
        descricao: ''
      });
    } else {
      alert('Erro ao enviar. Tente novamente.');
    }
  };

  return (
    <section 
      className={`${styles.heroSection} -mt-20 text-white relative overflow-hidden 
                 pb-16 md:pb-24 lg:pb-32 
                 pt-36 md:pt-44 lg:pt-52`}
    >
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
                href="https://calendly.com/seu-usuario-calendly"
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

              <form className="space-y-4" onSubmit={handleSubmit}>
                <Input name="nome" type="text" placeholder="Seu nome completo" value={form.nome} onChange={handleChange} />
                <Input name="whatsapp" type="tel" placeholder="Seu WhatsApp (DDD + Número)" value={form.whatsapp} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Seu melhor e-mail" value={form.email} onChange={handleChange} />
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
                  value={form.tipo_divida}
                  onChange={handleChange}
                />
                <textarea
                  name="descricao"
                  placeholder="Descreva brevemente sua situação (opcional)"
                  rows={3}
                  value={form.descricao}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg text-sm bg-white/90 text-slate-700 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-yellow-400 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-dark font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-300 text-base"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar para Análise Gratuita'}
                </button>
                {success && (
                  <p className="text-green-400 text-center pt-2">
                    Enviado com sucesso!
                  </p>
                )}
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