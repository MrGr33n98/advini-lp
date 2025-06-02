import Link from 'next/link'

const testimonials = [
  {
    name: 'Maria Fernanda',
    location: 'Várzea Grande/MT',
    content: 'Consegui reduzir minha dívida de cartão de crédito de R$ 15.000 para apenas R$ 2.100! A equipe da Advini foi incrível, explicou todo o processo e me manteve informada em cada etapa.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Carlos Eduardo',
    location: 'Rondonópolis/MT',
    content: 'Meu financiamento de carro estava me sufocando. Com a ajuda da Advini, renegociei e reduzi o saldo devedor em 75%. Agora consigo pagar as parcelas sem apertar meu orçamento.',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    name: 'Ana Paula',
    location: 'Sinop/MT',
    content: 'Estava com meu nome sujo há anos por conta de um empréstimo consignado. A Advini não só limpou meu nome como conseguiu um acordo onde paguei apenas 20% do valor original. Recomendo!',
    rating: 5,
    photo: 'https://randomuser.me/api/portraits/women/68.jpg'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            O Que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Depoimentos reais de pessoas que conquistaram sua liberdade financeira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md testimonial-card">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-bold text-dark">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star text-yellow-400"></i>
                ))}
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex space-x-4">
            <img src="https://via.placeholder.com/150x50/f3f4f6/9ca3af?text=GOOGLE+4.9" alt="Google Reviews" className="h-12" />
            <img src="https://via.placeholder.com/150x50/f3f4f6/9ca3af?text=RECLAME+AQUI+4.8" alt="Reclame Aqui" className="h-12" />
          </div>
        </div>
      </div>
    </section>
  )
}