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
                  <i className={`${caseItem.icon} text-blue-600 text-lg`}></i>
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