import { Inter } from 'next/font/google';
import '../styles/globals.css';
import type { Metadata } from 'next';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Advini Advocacia | Redução de Juros e Negociação de Dívidas',
  description: 'Reduza até 90% de suas dívidas bancárias! Advogados especializados em redução de juros abusivos, negociação de dívidas e defesa contra cobranças indevidas.',
  keywords: 'redução de dívidas, juros abusivos, renegociação bancária, advogado bancário, cobrança indevida, financiamento de veículo, crédito consignado',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Advini Advocacia",
              "image": "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
              "telephone": "+5565992918889",
              "priceRange": "R$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Historiador Rubens de Mendonça, 3920",
                "addressLocality": "Cuiabá",
                "addressRegion": "MT",
                "postalCode": "78050-000",
                "addressCountry": "BR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "url": "https://www.adviniadvocacia.com.br",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "327"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}