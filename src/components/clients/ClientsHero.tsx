import React from 'react';

const ClientsHero = () => {
  return (
    <div className="relative">
      {/* Hero Banner */}
      <div 
        className="h-80 bg-cover bg-center relative"
        style={{
          backgroundImage: 'url(https://www.kanexfire.com/images/client/Banner.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-6xl font-bold text-white">Clients</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">&gt;</span>
            <span className="text-red-600">Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsHero;
