import { FaWhatsapp, FaUserTie, FaBalanceScale, FaFileSignature, FaRegSmileBeam } from 'react-icons/fa';

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      icon: <FaUserTie className="text-3xl text-white" />,
      title: "Consulta Inicial Gratuita",
      description: "Você nos conta seu caso por WhatsApp ou ligação. É rápido, sigiloso e sem compromisso.",
    },
    {
      number: "2",
      icon: <FaBalanceScale className="text-3xl text-white" />,
      title: "Análise Jurídica Detalhada",
      description: "Nossa equipe de especialistas analisa seus documentos e contratos para identificar abusos e ilegalidades.",
    },
    {
      number: "3",
      icon: <FaFileSignature className="text-3xl text-white" />,
      title: "Definição da Estratégia",
      description: "Apresentamos a melhor solução (negociação amigável ou ação judicial) e o plano de ação.",
    },
    {
      number: "4",
      icon: <FaRegSmileBeam className="text-3xl text-white" />,
      title: "Resolução e Paz Financeira",
      description: "Atuamos para reduzir sua dívida, limpar seu nome e restaurar sua tranquilidade.",
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-balance">
            Nosso Processo Simplificado para <span className="text-primary">Resolver Sua Dívida</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Com transparência e agilidade, guiamos você em cada etapa rumo à sua liberdade financeira.
          </p>
        </div>

        <div className="relative">
          {/* Linha conectora para desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 transform -translate-y-1/2" style={{top: 'calc(4rem + 0px)'}}></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center relative flex flex-col items-center">
                <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-md">
                  {/* <span className="text-2xl font-bold text-white">{step.number}</span> */}
                  {step.icon}
                </div>
                 <span className="absolute -top-3 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full">Passo {step.number}</span>
                <h3 className="text-xl font-semibold text-dark mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <a 
            href="https://wa.me/5565992918889?text=Olá!%20Gostaria%20de%20iniciar%20o%20processo%20de%20análise%20da%20minha%20dívida."
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center bg-secondary hover:bg-emerald-600 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-300 cta-button text-lg"
          >
            <FaWhatsapp className="mr-3 text-xl" /> Quero Começar Agora!
          </a>
        </div>
      </div>
    </section>
  );
}
