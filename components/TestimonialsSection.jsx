'use client' // Se for usar hooks como useState/useEffect para um carrossel, por exemplo
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
// import Image from 'next/image'; // Opcional, se quiser otimizar imagens

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria P.",
      city: "Várzea Grande, MT",
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
      title: "Dívida de Cartão Reduzida em 90%!",
      quote: "Tinha uma dívida de R$ 38.000 no cartão que virou uma bola de neve. A Advini negociou e consegui quitar por R$ 3.800! Finalmente voltei a dormir em paz. Atendimento excelente!",
    },
    {
      name: "Carlos R.",
      city: "Cuiabá, MT",
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      title: "Juros Abusivos no Financiamento do Carro",
      quote: "Meu financiamento de carro tinha juros que dobravam o valor do veículo. A Advini revisou tudo e reduziu minha dívida em mais de 80%. Profissionais sérios e competentes.",
    },
    {
      name: "Ana L.",
      city: "Sinop, MT",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      title: "Fim das Cobranças Abusivas",
      quote: "As ligações de cobrança eram o dia todo, me ameaçando. Em poucos dias após contratar a Advini, as ligações pararam e minha dívida foi negociada com um ótimo desconto. Recomendo!",
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4 text-balance">
            O Que Nossos <span className="text-primary">Clientes Satisfeitos</span> Dizem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-balance">
            Histórias reais de pessoas que, como você, encontraram a solução para suas dívidas conosco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-xl testimonial-card flex flex-col">
              <FaQuoteLeft className="text-blue-custom-200 text-5xl opacity-80 mb-4" />
              <h4 className="text-lg font-semibold text-dark mb-2">{testimonial.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {testimonial.quote}
              </p>
              <div className="mt-auto border-t border-gray-200 pt-6">
                <div className="flex items-center">
                  <img 
                    src={testimonial.photo} 
                    alt={`Foto de ${testimonial.name}`} 
                    className="rounded-full w-12 h-12 object-cover mr-4 border-2 border-primary"
                  />
                  <div>
                    <p className="font-bold text-dark">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.city}</p>
                    <div className="flex mt-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400 text-sm" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-xl p-6 md:p-8 shadow-lg" id="about"> {/* Seção Sobre / Fundador */}
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="mb-6 md:mb-0 md:mr-8 shrink-0">
              <img 
                src="/images/dr-vinicius-morais-de-almeida.jpg" // SUBSTITUA PELA FOTO REAL
                alt="Dr. Vinicius Morais de Almeida" 
                className="rounded-full w-32 h-32 md:w-40 md:h-40 object-cover border-4 border-white shadow-xl mx-auto"
                // width={160} height={160} // Se usar next/image
              />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-1">Dr. Vinicius Morais de Almeida</h3>
              <p className="text-md lg:text-lg text-primary font-semibold mb-3">Advogado Especialista em Direito Bancário - OAB/MT [SEU NÚMERO]</p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed max-w-2xl text-balance">
                "Com mais de 10 anos de experiência dedicados à defesa do consumidor contra práticas bancárias abusivas, minha missão é clara: utilizar todo o conhecimento jurídico e estratégico para renegociar suas dívidas, reduzir juros ilegais e devolver a você o controle da sua vida financeira. Acredito que todos merecem uma segunda chance e a tranquilidade de viver sem o peso de dívidas impagáveis."
              </p>
               <a href="#contact" className="mt-6 inline-block bg-primary hover:bg-blue-custom-700 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-300 cta-button">
                Fale com o Dr. Vinicius
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
