
import React from 'react';

const ManufacturingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://www.kanexfire.com/images/home/Factory-new.jpg"
              alt="Manufacturing Facility"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              STATE OF THE ART
            </h2>
            <h3 className="text-2xl font-semibold text-red-600 mb-4">
              MANUFACTURING FACILITY
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our state-of-the-art manufacturing facility is equipped with the latest technology and machinery to produce high-quality fire safety equipment. We maintain strict quality control standards and follow international safety protocols to ensure our products meet the highest industry standards.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With advanced testing laboratories and skilled engineers, we continuously innovate and improve our products to provide the best fire protection solutions for our customers.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;
