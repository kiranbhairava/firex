
import React from 'react';
import Header from '@/components/Header';
import ClientsHero from '@/components/clients/ClientsHero';
import ClientsSectors from '@/components/clients/ClientsSectors';
import Footer from '@/components/Footer';

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ClientsHero />
      <ClientsSectors />
      <Footer />
    </div>
  );
};

export default Clients;
