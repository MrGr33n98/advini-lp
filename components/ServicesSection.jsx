import { FaPercentage, FaGavel, FaHandshake, FaArrowRight, FaCheckCircle, FaCar, FaCreditCard, FaHome } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaPercentage className="text-primary text-2xl" />,
      title: "Revisão de Juros Abusivos",
      description: "Analisamos seu contrato e identificamos taxas ilegais, buscando a redução drástica dos juros.",
      features: [
        "Redução de até 90% do valor dos juros",
        "Adequação do contrato à lei",
        "Fim das parcelas impagáveis"
      ],
      hasBadge: true,
      badgeText: "Mais Procurado"
    },
    {
      icon: <FaGavel className="text-primary text-2xl" />,
      title: "Defesa em Ações de Cobrança",
      description: "Protegemos seus direitos contra cobranças judiciais indevidas, busca e apreensão e penhoras.",
      features: [
        "Suspensão de processos de cobrança",
        "Defesa especializada e estratégica",
        "Proteção do seu patrimônio"
      ]
    },
    {
      icon: <FaHandshake className="text-primary text-2xl" />,
      title: "Negociação Amigável de Dívidas",
      description: "Atuamos diretamente com os credores para obter os melhores descontos e condições de pagamento.",
      features: [
        "Descontos significativos para quitação",
        "Parcelamentos que cabem no seu bolso",
        "Solução rápida e sem processo judicial"
      ]
    },
     {
      icon: <FaCar className="text-primary text-2xl" />,
      title: "Dívidas de Veículos",
      description: "Resolvemos problemas com financiamentos (CDC/Leasing), juros altos e ameaça de busca e apreensão.",
      features: [
        "Redução de juros do financiamento",
        "Defesa em ações de busca e apreensão",
        "Possibilidade de quitar com desconto"
      ]
    },
    {
      icon: <FaCreditCard className="text-primary text-2xl" />,
      title: "Dívidas de Cartão e Cheque Especial",
      description: "Combatemos os juros rotativos e taxas abusivas, renegociando o saldo devedor.",
      features: [
        "Redução da 'bola de neve' dos juros",
        "Negociação para pagamento justo",
        "Orientação para uso consciente do crédito"
      ]
    },
    {
      icon: <FaHome className="text-primary text-2xl" />,
      title: "Renegociação de Empréstimos",
      description: "Para empréstimos pessoais, consignados ou capital de giro com condições desfavoráveis.",
      features: [
        "Análise de legalidade das taxas",
        "Busca por portabilidade vantajosa",
        "Renegociação para diminuir parcelas"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-balance">
            Nossas <span className="text-primary">Soluções Jurídicas</span> Especializadas
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Oferecemos uma gama completa de serviços para livrar você das dívidas e proteger seus direitos financeiros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg service-card hover:shadow-2xl flex flex-col relative">
              {service.hasBadge && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {service.badgeText || 'Destaque'}
                </div>
              )}
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mt-1">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6 text-sm">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-0.5 mr-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-auto text-primary font-semibold inline-flex items-center group hover:text-blue-custom-700 transition-colors">
                Saber mais <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
