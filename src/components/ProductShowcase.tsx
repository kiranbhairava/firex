
import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      image: "https://www.kanexfire.com/images/home/Fire_2.jpg",
      title: "FOAM MONITOR",
      category: "Foam Systems"
    },
    {
      image: "https://www.kanexfire.com/images/home/Fire_3.jpg",
      title: "EXTERNAL MONITOR",
      category: "External Systems"
    },
    {
      image: "https://www.kanexfire.com/images/home/Fire_4.jpg",
      title: "PORTABLE EXTINGUISHER",
      category: "Portable Units"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white font-bold text-lg">{product.title}</h3>
                  <p className="text-orange-300 text-sm">{product.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
