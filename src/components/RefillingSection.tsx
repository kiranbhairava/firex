
import React from 'react';

const RefillingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              REFILLING SERVICES
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide comprehensive refilling and maintenance services for all types of fire extinguishers. Our certified technicians ensure your fire safety equipment is always ready for emergency situations.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Regular maintenance and timely refilling of fire extinguishers is crucial for effective fire protection. Our AMC services include regular inspections, refilling, and replacement when necessary.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              LEARN MORE
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://www.kanexfire.com/images/refilling-sec.png"
              alt="Refilling Services"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefillingSection;
