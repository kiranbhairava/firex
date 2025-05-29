
import React from 'react';

const ClientsSectors = () => {
  const sectors = [
    {
      title: "Chemical & Pharmaceutical Sector",
      icon: "https://www.kanexfire.com/images/client/Chemical.png",
      clients: [
        { name: "BASF India Ltd.", logo: "https://www.kanexfire.com/images/client/Chemical-Pharmaceutical-Sector/chemical-Logo-1.jpg" },
        { name: "Sika Ltd.", logo: "https://www.kanexfire.com/images/client/Chemical-Pharmaceutical-Sector/chemical-Logo-2.jpg" },
        { name: "Central India Marine Chemical Ltd.", logo: "https://www.kanexfire.com/images/client/Chemical-Pharmaceutical-Sector/chemical-Logo-3.jpg" },
        { name: "GHCL", logo: "https://www.kanexfire.com/images/client/Chemical-Pharmaceutical-Sector/chemical-Logo-4.jpg" }
      ]
    },
    {
      title: "Gas & Power Sector",
      icon: "https://www.kanexfire.com/images/client/Gas-Power-Sector.png",
      clients: [
        { name: "BHEL", logo: "https://www.kanexfire.com/images/client/Gas-Power-Sector/gas-Logo-1.jpg" },
        { name: "Thermotech Gem of Andhra Pradesh", logo: "https://www.kanexfire.com/images/client/Gas-Power-Sector/gas-Logo-2.jpg" },
        { name: "Gujarat Power Corporation Ltd.", logo: "https://www.kanexfire.com/images/client/Gas-Power-Sector/gas-Logo-3.jpg" },
        { name: "NHPC", logo: "https://www.kanexfire.com/images/client/Gas-Power-Sector/gas-Logo-4.jpg" }
      ]
    },
    {
      title: "Software & Telecommunication Sector",
      icon: "https://www.kanexfire.com/images/client/Software.png",
      clients: [
        { name: "Smt Vimal Textiles", logo: "https://www.kanexfire.com/images/client/Software-Telecommunication-Sector/software-Logo-1.jpg" },
        { name: "Mahanagar Corporation of Indore", logo: "https://www.kanexfire.com/images/client/Software-Telecommunication-Sector/software-Logo-2.jpg" },
        { name: "BHEL", logo: "https://www.kanexfire.com/images/client/Software-Telecommunication-Sector/software-Logo-3.jpg" },
        { name: "MHADA", logo: "https://www.kanexfire.com/images/client/Software-Telecommunication-Sector/software-Logo-4.jpg" }
      ]
    },
    {
      title: "Automobile Sector",
      icon: "https://www.kanexfire.com/images/client/Automobile-Sector.png",
      clients: [
        { name: "Hyundai Construction Equip", logo: "https://www.kanexfire.com/images/client/Automobile-Sector/automobile-Logo-1.jpg" },
        { name: "Coco Heavy Industries Corporation", logo: "https://www.kanexfire.com/images/client/Automobile-Sector/automobile-Logo-2.jpg" },
        { name: "Bharat Electronics Corporation", logo: "https://www.kanexfire.com/images/client/Automobile-Sector/automobile-Logo-3.jpg" },
        { name: "Tata Consultancy Services", logo: "https://www.kanexfire.com/images/client/Automobile-Sector/automobile-Logo-4.jpg" }
      ]
    },
    {
      title: "Banking Sector",
      icon: "https://www.kanexfire.com/images/client/Banking-Sector.png",
      clients: [
        { name: "Business Development Org.", logo: "https://www.kanexfire.com/images/client/Banking-Sector/Banking-Logo-1.jpg" },
        { name: "Canara Bank of Utilities", logo: "https://www.kanexfire.com/images/client/Banking-Sector/Banking-Logo-2.jpg" },
        { name: "BHEL Construction Corporation", logo: "https://www.kanexfire.com/images/client/Banking-Sector/Banking-Logo-3.jpg" },
        { name: "Business Organic Ltd.", logo: "https://www.kanexfire.com/images/client/Banking-Sector/Banking-Logo-4.jpg" }
      ]
    },
    {
      title: "Aviation Sector",
      icon: "https://www.kanexfire.com/images/client/Aviation-Sector.png",
      clients: [
        { name: "Air Force", logo: "https://www.kanexfire.com/images/client/Aviation-Sector/Aviation-Logo-1.jpg" },
        { name: "Sub Pacific Spign Transport solutions Ltd.", logo: "https://www.kanexfire.com/images/client/Aviation-Sector/Aviation-Logo-2.jpg" },
        { name: "GHM Industrial Transport Airport Ltd.", logo: "https://www.kanexfire.com/images/client/Aviation-Sector/Aviation-Logo-3.jpg" }
      ]
    },
    {
      title: "Cement Sector",
      icon: "https://www.kanexfire.com/images/client/Cement-Sector.png",
      clients: [
        { name: "Ambuja Cement", logo: "https://www.kanexfire.com/images/client/Cement-Sector/Cement-Logo-1.jpg" },
        { name: "Sanghi Cement", logo: "https://www.kanexfire.com/images/client/Cement-Sector/Cement-Logo-2.jpg" },
        { name: "Bihar State Power", logo: "https://www.kanexfire.com/images/client/Cement-Sector/Cement-Logo-3.jpg" },
        { name: "Ambuja Cement Ltd.", logo: "https://www.kanexfire.com/images/client/Cement-Sector/Cement-Logo-4.jpg" }
      ]
    },
    {
      title: "Mines & Steel Sector",
      icon: "https://www.kanexfire.com/images/client/Mines-Steel-Sector.png",
      clients: [
        { name: "MOCOIL Ltd.", logo: "https://www.kanexfire.com/images/client/Mines-Steel-Sector/Mines-Logo-1.jpg" },
        { name: "Jaipul Group", logo: "https://www.kanexfire.com/images/client/Mines-Steel-Sector/Mines-Logo-2.jpg" },
        { name: "Business Steel Plant", logo: "https://www.kanexfire.com/images/client/Mines-Steel-Sector/Mines-Logo-3.jpg" },
        { name: "THK Steel Ltd.", logo: "https://www.kanexfire.com/images/client/Mines-Steel-Sector/Mines-Logo-4.jpg" }
      ]
    },
    {
      title: "Petroleum Sector",
      icon: "https://www.kanexfire.com/images/client/Petroleum-Sector.png",
      clients: [
        { name: "BVPS Pvt Corporation Mocode", logo: "https://www.kanexfire.com/images/client/Petroleum-Sector/petroleum-Logo-1.jpg" },
        { name: "CNAL Hosapete Pvt. Ltd.", logo: "https://www.kanexfire.com/images/client/Petroleum-Sector/petroleum-Logo-2.jpg" },
        { name: "OOPS", logo: "https://www.kanexfire.com/images/client/Petroleum-Sector/petroleum-Logo-3.jpg" },
        { name: "ONGC", logo: "https://www.kanexfire.com/images/client/Petroleum-Sector/petroleum-Logo-4.jpg" }
      ]
    },
    {
      title: "Construction Sector",
      icon: "https://www.kanexfire.com/images/client/Constructions-Sector.png",
      clients: [
        { name: "DKBL", logo: "https://www.kanexfire.com/images/client/Construction-Sector/Construction-Logo-1.jpg" },
        { name: "Enter projects Pvt Ltd.", logo: "https://www.kanexfire.com/images/client/Construction-Sector/Construction-Logo-2.jpg" },
        { name: "Larsen & Toubro Tech Div", logo: "https://www.kanexfire.com/images/client/Construction-Sector/Construction-Logo-3.jpg" },
        { name: "Kolkham Infrastructure Ltd.", logo: "https://www.kanexfire.com/images/client/Construction-Sector/Construction-Logo-4.jpg" }
      ]
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {sectors.map((sector, sectorIndex) => (
          <div key={sectorIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <img 
                src={sector.icon} 
                alt={sector.title}
                className="w-16 h-16 mr-4"
              />
              <h2 className="text-2xl font-bold text-gray-800">{sector.title}</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {sector.clients.map((client, clientIndex) => (
                <div key={clientIndex} className="text-center">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow mb-4 h-32 flex items-center justify-center">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{client.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsSectors;
