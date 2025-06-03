'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image'; // Removido pois o logo será apenas texto
import { FaBars, FaTimes, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: '#services', label: 'Serviços' },
    { href: '#process', label: 'Como Funciona' },
    { href: '#results', label: 'Resultados' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#about', label: 'Sobre' },
  ];

  return (
    <nav className={`bg-transparent shadow-none sticky top-0 z-40 transition-shadow duration-300 ${scrolled ? 'shadow-2xl bg-slate-900/50 backdrop-blur-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO REMOVIDO, TEXTO DO NOME AJUSTADO */}
          <Link href="/" className="flex items-center" aria-label="Página inicial Advini Advocacia" onClick={closeMobileMenu}>
            <span className="text-lg md:text-xl font-bold text-yellow-400 drop-shadow-lg">Advini Advocacia</span>
          </Link>

          <div className="hidden md:flex items-center space-x-5 lg:space-x-6">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="font-medium transition duration-300 drop-shadow-lg 
                           text-gray-200 hover:text-yellow-300 
                           dark:text-gray-300 dark:hover:text-yellow-400" // Melhoria para tema escuro ou fundos variados
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+5565992918889" 
              className="text-sm flex items-center drop-shadow-lg 
                         text-gray-200 hover:text-yellow-300
                         dark:text-gray-300 dark:hover:text-yellow-400"
            >
              <FaPhoneAlt className="mr-1 text-yellow-300" /> (65) 99291-8889
            </a>
            <a
              href="https://calendly.com/seu-usuario-calendly" // LEMBRE-SE DE ATUALIZAR ESTE LINK
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold py-2.5 px-5 rounded-full transition duration-300 flex items-center cta-button text-sm shadow-lg"
            >
              <FaCalendarAlt className="mr-2" /> Agendar
            </a>
          </div>

          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="focus:outline-none p-2 text-gray-200 dark:text-gray-300" // Ajuste para visibilidade
              aria-label={isMobileMenuOpen ? 'Fechar menu móvel' : 'Abrir menu móvel'}
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`absolute w-full top-20 left-0 z-30 bg-white dark:bg-slate-800 shadow-xl md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-700"
              onClick={closeMobileMenu}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://calendly.com/seu-usuario-calendly" // LEMBRE-SE DE ATUALIZAR ESTE LINK
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-white bg-primary dark:bg-yellow-500 dark:hover:bg-yellow-600 hover:bg-blue-custom-700 mt-3"
            onClick={closeMobileMenu}
          >
            <FaCalendarAlt className="mr-2 inline" /> Agendar Consulta
          </a>
          <a
            href="tel:+5565992918889"
            className="block w-full text-center px-3 py-3 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-yellow-400 hover:bg-gray-100 dark:hover:bg-slate-700 mt-2"
            onClick={closeMobileMenu}
          >
            <FaPhoneAlt className="mr-2 inline" /> Ligar (65) 99291-8889
          </a>
        </div>
      </div>
    </nav>
  );
}