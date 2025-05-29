
import React from 'react';

const PopularSearches = () => {
  const searches = [
    'Fire Fighting Equipment',
    'Fire Extinguisher',
    'Fire Suppression System',
    'ABC Fire Extinguishers',
    'BC Fire Extinguishers',
    'CO2 Fire Extinguishers',
    'Clean Agent Fire Extinguisher',
    'Automatic Fire Extinguisher',
    'Foam Fire Extinguishers',
    'Water Mist',
    'Fire Trace',
    'Novec 1230 Fire Suppression System',
    'Refill Fire Extinguisher',
    'Fire Extinguisher Price'
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-red-600 mb-6">Popular Searches</h2>
        <div className="flex flex-wrap gap-3">
          {searches.map((search, index) => (
            <span 
              key={index}
              className="bg-white border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:border-red-300 cursor-pointer transition-colors"
            >
              {search}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSearches;
