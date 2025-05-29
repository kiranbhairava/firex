
import React from 'react';

const Milestones = () => {
  const milestones = [
    { year: "250+", label: "Fire Extinguisher Types" },
    { year: "5000+", label: "Fire Customers" },
    { year: "20+", label: "Years of Fire Fighting" },
    { year: "50+", label: "Certificated Cities" },
    { year: "6+", label: "States of Fire Use" }
  ];

  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://www.kanexfire.com/images/about/Milestone-Banner.jpg")'
      }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">MILESTONES</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {milestones.map((milestone, index) => (
            <div key={index} className="text-white">
              <div className="text-4xl font-bold text-orange-400 mb-2">{milestone.year}</div>
              <div className="text-lg">{milestone.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
