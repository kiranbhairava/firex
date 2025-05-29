
import React from 'react';

const MissionVision = () => {
  return (
    <section 
      className="py-16 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: 'url("https://www.kanexfire.com/images/about/Mission-vision_Banner.jpg")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6">OUR MISSION</h2>
            <p className="text-gray-200 leading-relaxed">
              We're 20 years+ manufacturer of Fire Equipment & Fire System, We offer Fire 
              Extinguishers to Fire suppression solutions.
            </p>
          </div>
          
          <div className="bg-orange-500 bg-opacity-90 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-white mb-6">OUR VISION</h2>
            <p className="text-white leading-relaxed">
              A leading organization across India & other overseas Fire market. Offer a 
              comprehensive, Innovative & exclusive Fire Safety solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
