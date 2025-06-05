import '../styles/globals.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Advini Advocacia',
  description: 'Reduza suas dívidas bancárias com especialistas.',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Advini Advocacia',
  image:
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  telephone: '+5565992918889',
  priceRange: 'R$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Historiador Rubens de Mendonça, 3920',
    addressLocality: 'Cuiabá',
    addressRegion: 'MT',
    postalCode: '78050-000',
    addressCountry: 'BR',
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    opens: '08:00',
    closes: '18:00',
  },
  url: 'https://www.adviniadvocacia.com.br',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '327',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+5565992918889',
    contactType: 'Customer Service',
    areaServed: 'BR',
    availableLanguage: ['Portuguese'],
  },
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
