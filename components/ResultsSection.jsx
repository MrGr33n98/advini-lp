import { FaCar, FaRegThumbsUp, FaBalanceScale, FaUserCheck, FaChartLine, FaShieldAlt, FaStopwatch, FaFileInvoiceDollar } from 'react-icons/fa';

export default function ResultsSection() {
  const stats = [
    { value: "95%", label: "Taxa de sucesso em acordos", icon: <FaRegThumbsUp className="text-primary text-3xl" /> },
    { value: "até 87%", label: "Redução média nas dívidas", icon: <FaBalanceScale className="text-primary text-3xl" /> },
    { value: "+3.2k", label: "Clientes satisfeitos", icon: <FaUserCheck className="text-primary text-3xl" /> },
    { value: "R+", label: "Economizados para clientes", icon: <FaFileInvoiceDollar className="text-primary text-3xl" /> },
  ];

  return (
    <section id="results" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-balance">
            Resultados <span className="text-primary">Comprovados</span> que Fazem a Diferença
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Nossa experiência se traduz em economia real e tranquilidade para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center shadow-lg stat-card flex flex-col items-center">
              <div className="mb-3 text-primary">{stat.icon}</div>
              <p className="text-4xl lg:text-5xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 bg-blue-50 p-6 md:p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold text-dark mb-4">Estudo de Caso: Redução Expressiva em Dívida Veicular</h3>
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <FaCar className="text-blue-custom-600 text-2xl" />
              </div>
              <div>
                <p className="font-bold text-lg">Financiamento de Veículo</p>
                <p className="text-gray-600 text-sm">Cliente de Cuiabá/MT (Caso Real Anonimizado)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-center sm:text-left">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-xs text-gray-500">DÍVIDA ORIGINAL</p>
                <p className="text-xl font-bold text-red-600">R$ 48.750,00</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-xs text-gray-500">VALOR QUITADO</p>
                <p className="text-xl font-bold text-green-600">R$ 3.900,00</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow col-span-1 sm:col-span-2">
                <p className="text-xs text-gray-500">ECONOMIA GERADA</p>
                <p className="text-2xl font-bold text-primary">R$ 44.850,00 (92% de Redução!)</p>
              </div>
            </div>
            
            <p className="text-gray-700 italic text-sm">
              "Eu não aguentava mais as parcelas do meu carro. A Advini Advocacia analisou meu contrato, encontrou juros abusivos e negociou com o banco. Consegui quitar meu carro por um valor que nunca imaginei ser possível. Recomendo demais!"
            </p>
             <p className="text-right text-xs text-gray-500 mt-2">- J.S., Cliente Satisfeito</p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-dark mb-5">Seus Benefícios Conosco:</h3>
            <div className="space-y-5">
              {[
                { icon: <FaShieldAlt className="text-green-600 text-xl" />, title: "Proteção Patrimonial", desc: "Evitamos bloqueios de contas e penhora de bens."},
                { icon: <FaStopwatch className="text-green-600 text-xl" />, title: "Agilidade na Resolução", desc: "Buscamos soluções rápidas, muitas vezes em menos de 30 dias."},
                { icon: <FaChartLine className="text-green-600 text-xl" />, title: "Nome Limpo Novamente", desc: "Auxiliamos na regularização do seu CPF nos órgãos de crédito."},
                { icon: <FaBalanceScale className="text-green-600 text-xl" />, title: "Condições Justas de Pagamento", desc: "Negociamos acordos que respeitam sua capacidade financeira."}
              ].map(benefit => (
                <div key={benefit.title} className="flex items-start">
                  <div className="bg-green-100 rounded-full p-3 mr-4 shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-dark mb-0.5">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
