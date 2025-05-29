
import React from 'react';

const WhyKanex = () => {
  const features = [
    {
      icon: "https://www.kanexfire.com/images/about/Icon_01.png",
      title: "20+ Years In Fire Fighting"
    },
    {
      icon: "https://www.kanexfire.com/images/about/Icon_02.png",
      title: "Delivery On Time"
    },
    {
      icon: "https://www.kanexfire.com/images/about/Icon_03.png",
      title: "Comprehensive Fire Solution"
    },
    {
      icon: "https://www.kanexfire.com/images/about/Icon_04.png",
      title: "Powerful ISO - Fire Equipment"
    },
    {
      icon: "https://www.kanexfire.com/images/about/Icon_05.png",
      title: "Technical & Emergency Response"
    },
    {
      icon: "https://www.kanexfire.com/images/about/Icon_06.png",
      title: "AMC Availability"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">WHY KANEX ?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKanex;
