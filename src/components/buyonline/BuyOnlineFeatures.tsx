
import React from 'react';
import { Award, Package, Truck, HeadphonesIcon } from 'lucide-react';

const BuyOnlineFeatures = () => {
  const features = [
    {
      icon: Award,
      title: 'LEADING MANUFACTURER',
      description: 'Trusted fire safety solutions provider'
    },
    {
      icon: Package,
      title: '150+ PRODUCTS',
      description: 'Comprehensive range of fire safety equipment'
    },
    {
      icon: Truck,
      title: 'SHIPPING WORLDWIDE',
      description: 'Global delivery and support'
    },
    {
      icon: HeadphonesIcon,
      title: 'BEST CUSTOMER SERVICE',
      description: '24/7 customer support and assistance'
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyOnlineFeatures;
