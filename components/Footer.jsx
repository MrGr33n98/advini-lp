import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // SUBSTITUA COM SUAS REDES SOCIAIS E INFORMAÇÕES
  const socialLinks = [
    { href: "#", icon: <FaFacebookF />, label: "Facebook" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaLinkedinIn />, label: "LinkedIn" },
    // { href: "#", icon: <FaYoutube />, label: "Youtube" },
  ];

  const servicesLinks = [
    { href: "#services", label: "Revisão de Juros" },
    { href: "#services", label: "Negociação de Dívidas" },
    { href: "#services", label: "Defesa em Cobranças" },
    { href: "#services", label: "Dívidas de Veículos" },
  ];

  const quickLinks = [
    { href: "#process", label: "Como Funciona" },
    { href: "#results", label: "Resultados" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#about", label: "Sobre Nós" },
    { href: "#contact", label: "Contato" },
    // { href: "/blog", label: "Blog" }, // Se tiver blog
    // { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  ];

  return (
    <footer className="bg-dark text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10">
          {/* Coluna 1: Logo e Social */}
          <div>
            <Link href="/" className="flex items-center mb-4">
              <div className="bg-blue-custom-600 w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg">AD</div>
              <span className="ml-3 text-xl font-bold text-white">Advini Advocacia</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Especialistas em direito bancário, dedicados a defender seus direitos e restaurar sua saúde financeira.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.label} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nossos Serviços</h3>
            <ul className="space-y-2.5 text-sm">
              {servicesLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
               <li><Link href="#services" className="hover:text-white transition-colors duration-300 font-medium">Ver todos...</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Links Úteis</h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Entre em Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mr-3 mt-1 shrink-0" />
                <span>Av. Historiador Rubens de Mendonça, 3920, Sala XYZ - CPA, Cuiabá/MT - CEP: 78050-000</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3 shrink-0" />
                <a href="tel:+5565992918889" className="hover:text-white transition-colors duration-300">(65) 99291-8889</a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-primary mr-3 shrink-0" />
                <a 
                  href="https://wa.me/5565992918889?text=Olá,%20gostaria%20de%20mais%20informações."
                  target="_blank" rel="noopener noreferrer" 
                  className="hover:text-white transition-colors duration-300">
                  (65) 99291-8889 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3 shrink-0" />
                <a href="mailto:contato@adviniadvocacia.com.br" className="hover:text-white transition-colors duration-300">contato@adviniadvocacia.com.br</a>
              </li>
            </ul>
             <p className="text-xs mt-4 text-gray-400">Horário de Atendimento: Seg-Sex, 08h-18h</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-10 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-4 md:mb-0">
              &copy; {currentYear} Advini Advocacia. Todos os direitos reservados. OAB/MT [SEU NÚMERO AQUI]
            </p>
            <div className="flex items-center space-x-4">
              {/* Logos de avaliação podem ser adicionados aqui se desejar */}
              {/* <img src="https://via.placeholder.com/100x30/1f2937/9ca3af?text=Google+4.9" alt="Avaliação Google" className="h-6" /> */}
              <p className="text-xs text-gray-500">Desenvolvido por [Seu Nome/Sua Agência]</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-6 text-center leading-relaxed">
            As informações apresentadas neste site têm caráter meramente informativo e não constituem aconselhamento jurídico. 
            Os resultados anteriores não garantem resultados futuros, pois cada caso é único e depende de suas particularidades. 
            Consulte sempre um advogado para discutir sua situação específica.
          </p>
        </div>
      </div>
    </footer>
  );
}
