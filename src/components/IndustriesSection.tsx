
import React from 'react';

const IndustriesSection = () => {
  const industries = [
    {
      image: "https://www.kanexfire.com/images/home/Home-new.jpg",
      title: "RESIDENTIAL",
      description: "Complete fire safety solutions for residential complexes and homes"
    },
    {
      image: "https://www.kanexfire.com/images/home/Hospital-new.jpg",
      title: "HEALTHCARE",
      description: "Specialized fire protection systems for hospitals and medical facilities"
    },
    {
      image: "https://www.kanexfire.com/images/home/Office-new.jpg",
      title: "COMMERCIAL",
      description: "Advanced fire safety systems for office buildings and commercial spaces"
    },
    {
      image: "https://www.kanexfire.com/images/home/Server-room-new.jpg",
      title: "IT FIRMS",
      description: "Clean agent fire suppression systems for data centers and server rooms"
    },
    {
      image: "https://www.kanexfire.com/images/home/Hotel-new.jpg",
      title: "HOSPITALITY",
      description: "Comprehensive fire protection for hotels and hospitality industry"
    },
    {
      image: "https://www.kanexfire.com/images/home/School-new.jpg",
      title: "EDUCATIONAL",
      description: "Safe and reliable fire protection systems for educational institutions"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">INDUSTRIES WE SERVE</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{industry.title}</h3>
                  <p className="text-orange-100 text-sm">{industry.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
