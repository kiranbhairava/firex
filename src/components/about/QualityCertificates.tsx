
import React from 'react';

const QualityCertificates = () => {
  const certificates = [
    "https://www.kanexfire.com/images/about/Certificate_1.png",
    "https://www.kanexfire.com/images/about/Certificate_2.png", 
    "https://www.kanexfire.com/images/about/Certificate_3.png",
    "https://www.kanexfire.com/images/about/Certificate_4.png",
    "https://www.kanexfire.com/images/about/Certificate_5.png"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">QUALITY STANDARD CERTIFICATES</h2>
        </div>
        
        <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
          {certificates.map((cert, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={cert} 
                alt={`Certificate ${index + 1}`}
                className="h-20 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCertificates;
