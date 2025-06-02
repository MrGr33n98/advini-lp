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