"use client";

import React from 'react';

import HeroSection from '../components/HeroSection';
import ProblemsSection from '../components/ProblemsSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ResultsSection from '../components/ResultsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FinalCTASection from '../components/FinalCTASection';

export default function Home() {
  return (
    <>
      {/* O conteúdo do <Head> foi movido para o metadata do layout.jsx
          ou pode ser gerenciado por export const metadata = {...} aqui também.
          O script JSON-LD também foi movido para layout.jsx para ser global,
          mas pode ser específico da página se necessário. */}
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}
