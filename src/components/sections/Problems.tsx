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
                  <i className={`${problem.icon} text-red-600 text-xl`}></i>
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