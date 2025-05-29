
import React from 'react';
import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import StatsSection from '@/components/StatsSection';
import ProductShowcase from '@/components/ProductShowcase';
import ManufacturingSection from '@/components/ManufacturingSection';
import IndustriesSection from '@/components/IndustriesSection';
import RefillingSection from '@/components/RefillingSection';
import SuppressionSection from '@/components/SuppressionSection';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <StatsSection />
      <ProductShowcase />
      <ManufacturingSection />
      <IndustriesSection />
      <RefillingSection />
      <SuppressionSection />
      <ClientsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
