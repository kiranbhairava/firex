
import React from 'react';

const ClientsSection = () => {
  const clients = [
    { image: "https://www.kanexfire.com/images/home/logo-1.png", name: "Adani" },
    { image: "https://www.kanexfire.com/images/home/logo-2.png", name: "Airtel" },
    { image: "https://www.kanexfire.com/images/home/logo-3.png", name: "Idea" },
    { image: "https://www.kanexfire.com/images/home/logo-4.png", name: "Essar" },
    { image: "https://www.kanexfire.com/images/home/logo-5.png", name: "TATA" },
    { image: "https://www.kanexfire.com/images/home/logo-6.png", name: "Wipro" },
    { image: "https://www.kanexfire.com/images/home/logo-7.png", name: "Reliance" },
    { image: "https://www.kanexfire.com/images/home/logo-8.png", name: "HDFC" },
    { image: "https://www.kanexfire.com/images/home/logo-9.png", name: "SBI" },
    { image: "https://www.kanexfire.com/images/home/logo-10.png", name: "ICICI" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">OUR CLIENTS</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center">
              <img 
                src={client.image} 
                alt={client.name}
                className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
