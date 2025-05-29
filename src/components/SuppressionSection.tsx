
import React from 'react';

const SuppressionSection = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://www.kanexfire.com/images/home/Homepage-Fire-Suppression-System.jpg"
              alt="Fire Suppression System"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              FIRE SUPPRESSION SYSTEM
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our advanced fire suppression systems provide automatic fire detection and suppression capabilities for critical facilities. These systems are designed to protect valuable assets and ensure business continuity.
            </p>
            <ul className="text-gray-300 mb-8 space-y-2">
              <li>• Automatic fire detection and suppression</li>
              <li>• Clean agent systems for sensitive equipment</li>
              <li>• Water mist systems for effective cooling</li>
              <li>• Kitchen hood suppression systems</li>
            </ul>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              EXPLORE SYSTEMS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuppressionSection;
