Estrutura completa de aplicação Next.js / React
Vou criar toda a estrutura da aplicação Next.js / React seguindo a organização de pastas que você forneceu.Aqui está a implementação completa:

    ##1. Estrutura de Arquivos

    ``
`
advini-lp/
├── src/
│   ├── app/
│   │   ├── hooks/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── common/
│   │   │   ├── FloatingWhatsAppButton.tsx
│   │   │   └── PopupOffer.tsx
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── sections/
│   │   │   ├── FinalCTA.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Problems.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Results.tsx
│   │   │   ├── Services.tsx
│   │   │   └── Testimonials.tsx
│   │   └── styles/
│   │       └── animations.css
│   └── context/
│       └── AppContext.tsx
`
``

##
2. Arquivos Principais

### `src/app/layout.tsx`

``
`tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Advini Advocacia | Redução de Juros e Negociação de Dívidas',
  description: 'Reduza até 90% de suas dívidas bancárias! Advogados especializados em redução de juros abusivos, negociação de dívidas e defesa contra cobranças indevidas.',
  keywords: ['redução de dívidas', 'juros abusivos', 'renegociação bancária', 'advogado bancário'],
  authors: [{ name: 'Advini Advocacia' }],
  openGraph: {
    type: 'website',
    title: 'Liberte-se das dívidas bancárias com a Advini Advocacia',
    description: 'Reduza suas dívidas em até 90% com nossa assessoria jurídica especializada. Consulta gratuita!',
    images: ['https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="schema-org" type="application/ld+json">
          {` {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advini Advocacia",
    "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    "telephone": "+5565992918889",
    "priceRange": "R$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Historiador Rubens de Mendonça, 3920",
        "addressLocality": "Cuiabá",
        "addressRegion": "MT",
        "postalCode": "78050-000",
        "addressCountry": "BR"
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
    },
    "url": "https://www.adviniadvocacia.com.br",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "327"
    }
}
`}
        </Script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
      </body>
    </html>
  )
}
`
``

###
`src/app/page.tsx`

``
`tsx
import Hero from '@/components/sections/Hero'
import Problems from '@/components/sections/Problems'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Results from '@/components/sections/Results'
import Testimonials from '@/components/sections/Testimonials'
import FinalCTA from '@/components/sections/FinalCTA'
import PopupOffer from '@/components/common/PopupOffer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Results />
      <Testimonials />
      <FinalCTA />
      <PopupOffer />
    </main>
  )
}
`
``

###
`src/app/globals.css`

``
`css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: #2563eb;
  --secondary: #10b981;
  --accent: #f59e0b;
  --dark: #1f2937;
  --light: #f9fafb;
}

body {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
  background-color: #f8fafc;
}

.hero-gradient {
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
}

.cta-button {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.cta-button:after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255,255,255,0.1);
  transform: rotate(30deg);
  transition: all 0.6s ease;
}

.cta-button:hover:after {
  transform: rotate(30deg) translate(20%, 20%);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.2);
}

.stat-card, .problem-card, .service-card {
  transition: all 0.3s ease;
}

.stat-card {
  border: 2px solid transparent;
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}

.problem-card {
  border-left: 4px solid transparent;
}

.problem-card:hover {
  transform: translateY(-5px);
  border-left-color: var(--accent);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
}

.service-card {
  border-bottom: 3px solid transparent;
}

.service-card:hover {
  transform: translateY(-5px);
  border-bottom-color: var(--secondary);
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08);
}

.testimonial-card {
  position: relative;
  overflow: hidden;
}

.testimonial-card:before {
  content: '"';
  position: absolute;
  top: -20px;
  left: 10px;
  font-size: 120px;
  color: rgba(37, 99, 235, 0.05);
  font-family: Georgia, serif;
  line-height: 1;
}

.guarantee-badge {
  position: absolute;
  top: -15px;
  right: 20px;
  background: var(--secondary);
  color: white;
  padding: 8px 15px;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: rotate(5deg);
  animation: wiggle 3s ease-in-out infinite;
}

.lead-form {
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.lead-form input, 
.lead-form select, 
.lead-form textarea {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.lead-form input:focus, 
.lead-form select:focus, 
.lead-form textarea:focus {
  background: white;
  outline: none;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3);
}

@keyframes wiggle {
  0%, 100% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
}
`
``

##
3. Componentes

### `src/components/layout/Header.tsx`

``
`tsx
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
              <i className={`
fas $ { mobileMenuOpen ? 'fa-times' : 'fa-bars' }
text - 2 xl `}></i>
            </button>
          </div>
        </div>
      </div>

      <div className={`
$ { mobileMenuOpen ? 'block' : 'hidden' }
md: hidden bg - white shadow - lg absolute w - full top - 20 left - 0 z - 30 `}>
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
`
``

###
`src/components/layout/Footer.tsx`

``
`tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Link href="#" className="flex items-center mb-4">
              <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg">AD</div>
              <span className="ml-3 text-xl font-bold">Advini Advocacia</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Especialistas em redução de dívidas bancárias e defesa do consumidor financeiro.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-white transition duration-300">Revisão de Juros</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition duration-300">Negociação de Dívidas</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition duration-300">Defesa em Cobranças</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-white transition duration-300">Financiamento de Veículo</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="#process" className="text-gray-300 hover:text-white transition duration-300">Como Funciona</Link></li>
              <li><Link href="#results" className="text-gray-300 hover:text-white transition duration-300">Resultados</Link></li>
              <li><Link href="#testimonials" className="text-gray-300 hover:text-white transition duration-300">Depoimentos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-gray-300 mr-2"></i>
                <span className="text-gray-300">(65) 99291-8889</span>
              </li>
              <li className="flex items-center">
                <i className="fab fa-whatsapp text-gray-300 mr-2"></i>
                <span className="text-gray-300">(65) 99291-8889</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-gray-300 mr-2"></i>
                <span className="text-gray-300">contato@adviniadvocacia.com.br</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-gray-300 mr-2"></i>
                <span className="text-gray-300">Av. Historiador Rubens de Mendonça, 3920 - Cuiabá/MT</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2025 Advini Advocacia. Todos os direitos reservados. OAB/MT 12345
          </p>
          <div className="mt-4 md:mt-0">
            <img src="https://via.placeholder.com/120x40/1f2937/9ca3af?text=RECLAME+AQUI+4.8" alt="Reclame Aqui" className="h-8 inline-block mr-4" />
            <img src="https://via.placeholder.com/120x40/1f2937/9ca3af?text=GOOGLE+4.9" alt="Google" className="h-8 inline-block" />
          </div>
        </div>
      </div>
    </footer>
  )
}
`
``

###
`src/components/common/FloatingWhatsAppButton.tsx`

``
`tsx
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
`
``

###
`src/components/common/PopupOffer.tsx`

``
`tsx
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
`
``

##
4. Seções da Página

### `src/components/sections/Hero.tsx`

``
`tsx
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
`
``

###
`src/components/sections/Problems.tsx`

``
`tsx
import Link from 'next/link'

const problems = [
  {
    icon: 'fas fa-percentage',
    title: 'Juros Abusivos',
    description: 'Taxas de juros muito acima do mercado, tornando impossível quitar suas dívidas.'
  },
  {
    icon: 'fas fa-phone-slash',
    title: 'Assédio de Cobrança',
    description: 'Ligações constantes e ameaças que tiram sua paz e dignidade.'
  },
  {
    icon: 'fas fa-file-contract',
    title: 'Cláusulas Abusivas',
    description: 'Termos contratuais ilegais que prejudicam seus direitos como consumidor.'
  },
  {
    icon: 'fas fa-car',
    title: 'Financiamento de Veículo',
    description: 'Problemas com contratos de financiamento de carros, motos e outros veículos.'
  },
  {
    icon: 'fas fa-hand-holding-usd',
    title: 'Crédito Consignado',
    description: 'Irregularidades em empréstimos que comprometem sua renda mensal.'
  },
  {
    icon: 'fas fa-wallet',
    title: 'Crédito Pessoal',
    description: 'Dificuldades com contratos de empréstimos pessoais e taxas escondidas.'
  }
]

export default function Problems() {
  return (
    <section id="problems-section" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Você está enfrentando algum desses problemas?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identificamos as principais dificuldades que nossos clientes enfrentam com bancos e instituições financeiras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md problem-card">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <i className={`
$ { problem.icon }
text - red - 600 text - xl `}></i>
                </div>
                <h3 className="text-xl font-bold text-dark">{problem.title}</h3>
              </div>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="https://wa.me/5565992918889" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 cta-button">
            <i className="fab fa-whatsapp mr-3 text-xl"></i> Fale com nosso especialista
          </Link>
        </div>
      </div>
    </section>
  )
}
`
``

###
`src/components/sections/Services.tsx`

``
`tsx
import Link from 'next/link'

const services = [
  {
    badge: true,
    icon: 'fas fa-percentage',
    title: 'Revisão de Juros Abusivos',
    description: 'Análise detalhada do contrato para identificar e reduzir taxas de juros ilegais.',
    benefits: [
      'Redução de até 90% dos juros',
      'Regularização do valor devido',
      'Pagamento em condições justas'
    ]
  },
  {
    icon: 'fas fa-gavel',
    title: 'Defesa em Ações de Cobrança',
    description: 'Representação legal para proteger você de processos injustos e cobranças indevidas.',
    benefits: [
      'Suspensão de cobranças abusivas',
      'Defesa judicial especializada',
      'Proteção de bens e patrimônio'
    ]
  },
  {
    icon: 'fas fa-handshake',
    title: 'Negociação de Dívidas',
    description: 'Renegociação direta com bancos para condições mais justas de pagamento.',
    benefits: [
      'Redução do valor total da dívida',
      'Parcelamento em até 120 vezes',
      'Descontos de até 95% para pagamento à vista'
    ]
  }
]

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Nossas <span className="text-primary">Soluções</span> Especializadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos serviços jurídicos completos para resolver seus problemas bancários
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md service-card relative">
              {service.badge && <div className="guarantee-badge">Garantia de Resultado</div>}
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-4">
                  <i className={`
$ { service.icon }
text - blue - 600 text - xl `}></i>
                </div>
                <h3 className="text-xl font-bold text-dark">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="#contact" className="text-primary font-semibold inline-flex items-center">
                Saber mais <i className="fas fa-arrow-right ml-2 text-sm"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
`
``

###
`src/components/sections/Process.tsx`

``
`tsx
import Link from 'next/link'

const steps = [
  {
    number: '1',
    title: 'Consulta Gratuita',
    description: 'Fale com nosso especialista e apresente seu caso sem compromisso'
  },
  {
    number: '2',
    title: 'Análise Jurídica',
    description: 'Nossa equipe analisa seus documentos e identifica oportunidades'
  },
  {
    number: '3',
    title: 'Ação Estratégica',
    description: 'Implementamos a melhor estratégia para seu caso'
  },
  {
    number: '4',
    title: 'Resultados',
    description: 'Você conquista redução de dívidas e paz financeira'
  }
]

export default function Process() {
  return (
    <section id="process" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Como Funciona Nosso <span className="text-primary">Processo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um método simples e eficaz para resolver seus problemas bancários em poucos passos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols

continue e gere o arquivo process

.tsx completo, por favor.

Aqui está a continuação do arquivo Process.tsx:
tsx

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <i className="fas fa-arrow-right text-gray-300 text-2xl"></i>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-dark mb-4">Garantia de Satisfação</h3>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              Trabalhamos com transparência total. Se após nossa análise não identificarmos oportunidades para redução de sua dívida, você não paga nada por nossos serviços.
            </p>
            <Link href="https://wa.me/5565992918889" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-secondary hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 cta-button">
              <i className="fas fa-shield-alt mr-3"></i> Quero minha garantia
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

src/components/sections/Results.tsx
tsx

import Link from 'next/link'

const results = [
  {
    value: '90%',
    description: 'Redução média de juros em contratos analisados'
  },
  {
    value: '120x',
    description: 'Parcelamento em até 120 vezes conquistado para clientes'
  },
  {
    value: '95%',
    description: 'Desconto médio para pagamento à vista negociado'
  },
  {
    value: '3.000+',
    description: 'Clientes com dívidas renegociadas com sucesso'
  }
]

const cases = [
  {
    title: 'Cartão de Crédito',
    description: 'Redução de R$ 28.000 para R$ 3.200 (88,5%)',
    icon: 'far fa-credit-card'
  },
  {
    title: 'Financiamento de Carro',
    description: 'Saldo devedor reduzido de R$ 45.000 para R$ 12.000 (73%)',
    icon: 'fas fa-car'
  },
  {
    title: 'Crédito Consignado',
    description: 'Dívida de R$ 15.000 quitada por R$ 2.800 (81%)',
    icon: 'fas fa-hand-holding-usd'
  }
]

export default function Results() {
  return (
    <section id="results" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Resultados <span className="text-primary">Comprovados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes conquistaram com nossa assessoria jurídica especializada
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center stat-card">
              <p className="text-4xl font-bold text-primary mb-2">{result.value}</p>
              <p className="text-gray-600">{result.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <i className={`
$ { caseItem.icon }
text - blue - 600 text - lg `}></i>
                </div>
                <h3 className="text-xl font-bold text-dark">{caseItem.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{caseItem.description}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Cliente" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold">João S.</p>
                  <p className="text-sm text-gray-500">Cuiabá/MT</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="#contact" className="inline-flex items-center justify-center bg-primary hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 cta-button">
            <i className="fas fa-chart-line mr-3"></i> Quero esses resultados
          </Link>
        </div>
      </div>
    </section>
  )
}

src/components/sections/Testimonials.tsx
tsx

import Link from 'next/link'

const testimonials = [
  {
    name: 'Maria Fernanda',
    location: 'Várzea Grande/MT',
    content: 'Consegui reduzir minha dívida de cartão de crédito de R$ 15.000 para apenas R$ 2.100! A equipe da Advini foi incrível, explicou todo o processo e me manteve informada em cada etapa.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Carlos Eduardo',
    location: 'Rondonópolis/MT',
    content: 'Meu financiamento de carro estava me sufocando. Com a ajuda da Advini, renegociei e reduzi o saldo devedor em 75%. Agora consigo pagar as parcelas sem apertar meu orçamento.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Ana Paula',
    location: 'Sinop/MT',
    content: 'Estava com meu nome sujo há anos por conta de um empréstimo consignado. A Advini não só limpou meu nome como conseguiu um acordo onde paguei apenas 20% do valor original. Recomendo!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de pessoas que conquistaram sua liberdade financeira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex space-x-4">
            <img src="https://via.placeholder.com/150x50/f3f4f6/9ca3af?text=GOOGLE+4.9" alt="Google Reviews" className="h-12" />
            <img src="https://via.placeholder.com/150x50/f3f4f6/9ca3af?text=RECLAME+AQUI+4.8" alt="Reclame Aqui" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}

src/components/sections/FinalCTA.tsx
tsx

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

5. Configurações Adicionais

Para completar sua aplicação, você precisará dos seguintes arquivos de configuração:
next.config.js
javascript

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'randomuser.me', 'via.placeholder.com'],
  },
}

module.exports = nextConfig

tailwind.config.js
javascript

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        accent: '#f59e0b',
        dark: '#1f2937',
        light: '#f9fafb',
      },
    },
  },
  plugins: [],
}

6. Dependências Necessárias

Adicione estas dependências ao seu package.json:
json

"dependencies": {
  "next": "^14.1.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.4.0",
  "postcss": "^8.4.35",
  "autoprefixer": "^10.4.17",
  "@types/react": "^18.2.56",
  "@types/node": "^20.11.19",
  "typescript": "^5.3.3",
  "next-fonts": "^1.6.0"
}

Esta estrutura completa fornece uma landing page profissional para um escritório de advocacia especializado em redução de dívidas bancárias, com todas as seções necessárias para conversão de clientes, incluindo:

    Hero section com formulário de contato

    Seção de problemas comuns

    Serviços oferecidos

    Processo de trabalho

    Resultados alcançados

    Depoimentos de clientes

    Call-to-action final

A aplicação está otimizada para SEO, com metadados e schema markup adequados, e totalmente responsiva para todos os dispositivos.
{
  "name": "advini-lp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "next": "15.3.3"
  },
  "devDependencies": {
    "typescript": "^5",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4",
    "eslint": "^9",
    "eslint-config-next": "15.3.3",
    "@eslint/eslintrc": "^3"
  }
}


import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#10b981',
        accent: '#f59e0b',
        dark: '#1f2937',
        light: '#f9fafb'
      },
      keyframes: {
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(5deg)' },
          '50%': { transform: 'rotate(-5deg)' }
        },
        slideIn: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' }
        }
      },
      animation: {
        pulse: 'pulse 2s infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        slideIn: 'slideIn 0.5s ease-out forwards'
      }
    }
  },
  plugins: []
} satisfies Config
Server busy, please try again later.
New chat
AI-generated, for reference only