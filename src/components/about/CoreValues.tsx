
import React from 'react';

const CoreValues = () => {
  const values = [
    {
      icon: "https://www.kanexfire.com/images/about/Value_1.png",
      title: "Customer First",
      description: "Our Customers is our Universe and they make our existence in the market. Our customer Value is designed in every step."
    },
    {
      icon: "https://www.kanexfire.com/images/about/Value_2.png", 
      title: "Recognition",
      description: "Our work is Recognition and our fire safety services shall earn respect and gratitude from people we serve in our community."
    },
    {
      icon: "https://www.kanexfire.com/images/about/Value_3.png",
      title: "Openness & Trust worthiness",
      description: "We strive to build trust & open honest relationships both internally and with fire safety equipment in our society."
    },
    {
      icon: "https://www.kanexfire.com/images/about/Value_4.png",
      title: "Devotion",
      description: "We are committed to our work and our loyal fire safety commitment by doing our job professionally and seeking the highest standards to surpass."
    },
    {
      icon: "https://www.kanexfire.com/images/about/Value_5.png",
      title: "Management",
      description: "Our commitment to Management is to accept the highest levels of Safety responsibilities and accountability for our actions, decision & the results."
    },
    {
      icon: "https://www.kanexfire.com/images/about/Value_6.png",
      title: "Unity",
      description: "We demonstrate expertise using teamwork. We achieve more when we work together. We are working as one powerful unified force."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">CORE VALUES</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Kanex Fire Safety, our values system drives our business practices and fire safety standards that deliver Quality Services and that's reason for our continued growth over the year.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
              <div className="mb-4 flex justify-center">
                <img 
                  src={value.icon} 
                  alt={value.title}
                  className="h-16 w-16"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
