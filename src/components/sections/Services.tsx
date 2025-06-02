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
                  <i className={`${service.icon} text-blue-600 text-xl`}></i>
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