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