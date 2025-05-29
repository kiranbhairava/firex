
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const BuyOnlineHero = () => {
  const [selectedCategory, setSelectedCategory] = useState('For Home & Car');

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">Buy Fire Extinguishers Online</h1>
              <div className="flex items-center mb-4">
                <select 
                  className="border border-gray-300 rounded px-4 py-2 mr-2"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option>For Home & Car</option>
                  <option>For Office</option>
                  <option>For Hospital</option>
                  <option>For School</option>
                </select>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2">
                  GO
                </Button>
              </div>
              <p className="text-sm text-gray-600">
                Check Our Complete fire extinguisher price list <span className="text-red-600 underline cursor-pointer">here</span>.
              </p>
            </div>
            <div className="flex-1 text-right">
              <img 
                src="https://www.kanexfire.com/buyonline/pub/media//wysiwyg/new/home/kanex-buyonline-category-banner.jpg" 
                alt="Fire Extinguisher Offer" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyOnlineHero;
