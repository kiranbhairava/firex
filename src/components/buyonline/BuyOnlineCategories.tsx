
import React from 'react';
import { Home, Building2, GraduationCap, ShoppingBag } from 'lucide-react';

const BuyOnlineCategories = () => {
  const categories = [
    {
      icon: Home,
      title: 'Fire Extinguisher For Home & Car',
      items: [
        'Fire Extinguisher For Entrance',
        'Fire Extinguisher For Living room',
        'Fire Extinguisher For Kitchen',
        'Fire Extinguisher For Bedroom',
        'Fire Extinguisher For Staircase',
        'Fire Extinguisher For Garage',
        'Fire Extinguisher For Bathroom / Washroom',
        'Fire Extinguisher For Car'
      ],
      image: 'https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-home-car-1.jpg'
    },
    {
      icon: Building2,
      title: 'Fire Extinguisher For Hospital',
      items: [
        'Fire Extinguisher For CT Scan Room',
        'Fire Extinguisher For Intensive Care Room',
        'Fire Extinguisher For Hospital Reception Area',
        'Fire Extinguisher For Canteen',
        'Fire Extinguisher For Genal Operation Theatre',
        'Fire Extinguisher For Genset Room and Diesel Storage',
        'Fire Extinguisher For Parking Area',
        'Fire Extinguisher For Pharmacy',
        'Fire Extinguisher For Billing Section',
        'Fire Extinguisher For Electrical Panels',
        'Fire Extinguisher For Consultation Rooms'
      ],
      image: 'https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-hospital-1.jpg'
    },
    {
      icon: GraduationCap,
      title: 'Fire Extinguisher For School',
      items: [
        'Fire Extinguisher For Auditorium',
        'Fire Extinguisher For Hostel Rooms',
        'Fire Extinguisher For Electrical Panels',
        'Fire Extinguisher For Corridor And Staircase',
        'Fire Extinguisher For Kitchen & Dining Area',
        'Fire Extinguisher For Generator Area',
        'Fire Extinguisher For Library',
        'Fire Extinguisher For Laboratory',
        'Fire Extinguisher For Store Room'
      ],
      image: 'https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-schools-1.jpg'
    },
    {
      icon: ShoppingBag,
      title: 'Fire Extinguisher For Offices and Shops',
      items: [
        'Fire Extinguisher For Office Reception Area',
        'Fire Extinguisher For Cabins',
        'Fire Extinguisher For Conference Room',
        'Fire Extinguisher For Store Area',
        'Fire Extinguisher For Server Room',
        'Fire Extinguisher For Pantry'
      ],
      image: 'https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-shops-office-1.jpg'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {categories.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center mb-6">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                <category.icon className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-red-600">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center">
                      <span className="text-red-600 mr-2">▶</span>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BuyOnlineCategories;
