import { FaPercentage, FaPhoneSlash, FaFileContract, FaCar, FaHandHoldingUsd, FaWallet, FaBalanceScale, FaExclamationTriangle, FaWhatsapp } from 'react-icons/fa';

export default function ProblemsSection() {
  const problems = [
    {
      icon: <FaPercentage className="text-red-500 text-2xl" />,
      title: "Juros Abusivos",
      description: "Taxas de juros exorbitantes que tornam suas dívidas impagáveis e aumentam sem controle.",
    },
    {
      icon: <FaPhoneSlash className="text-red-500 text-2xl" />,
      title: "Assédio de Cobrança",
      description: "Ligações insistentes, ameaças e constrangimento por parte de empresas de cobrança.",
    },
    {
      icon: <FaFileContract className="text-red-500 text-2xl" />,
      title: "Cláusulas Contratuais Ilegais",
      description: "Termos abusivos e escondidos em contratos que prejudicam seus direitos como consumidor.",
    },
    {
      icon: <FaCar className="text-red-500 text-2xl" />,
      title: "Financiamento Veicular",
      description: "Juros altos, busca e apreensão, e dificuldades para quitar seu carro, moto ou caminhão.",
    },
    {
      icon: <FaHandHoldingUsd className="text-red-500 text-2xl" />,
      title: "Crédito Consignado",
      description: "Descontos indevidos, empréstimos não solicitados ou taxas abusivas em consignados.",
    },
    {
      icon: <FaExclamationTriangle className="text-red-500 text-2xl" />,
      title: "Superendividamento",
      description: "Quando as dívidas consomem grande parte da sua renda, comprometendo sua subsistência.",
    },
  ];

  return (
    <section id="problems" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-balance">
            Você se identifica com algum destes <span className="text-red-600">problemas</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Milhões de brasileiros enfrentam dificuldades com dívidas bancárias. Saiba que você não está sozinho e existe solução.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg problem-card hover:shadow-2xl">
              <div className="flex items-start mb-4">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 shrink-0">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark mt-1">{problem.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-16 text-center">
          <a 
            href="https://wa.me/5565992918889?text=Olá!%20Me%20identifiquei%20com%20um%20dos%20problemas%20listados%20e%20gostaria%20de%20ajuda."
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center bg-primary hover:bg-blue-custom-700 text-white font-bold py-3.5 px-8 rounded-lg shadow-lg transition duration-300 cta-button text-lg"
          >
            <FaWhatsapp className="mr-3 text-xl" /> Sim, preciso de ajuda!
          </a>
        </div>
      </div>
    </section>
  );
}
