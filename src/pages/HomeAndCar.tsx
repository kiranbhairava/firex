import React from 'react';
import Footer from '@/components/Footer';

const HomeAndCar = () => {
  return (
    <div className="bg-white w-full">
      {/* Top Banner */}
      <div className="w-full bg-gray-100 border-b py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="https://www.kanexfire.com/buyonline/pub/media/logo/websites/1/Header-logo_1_.png" alt="Kanex Logo" className="h-12" />
            <span className="text-xs text-gray-600 ml-2">Shaping the future of Fire Protection</span>
          </div>
          <div className="flex items-center space-x-4 text-xs">
            <a href="#" className="hover:text-red-600">Home</a>
            <a href="#" className="hover:text-red-600">Career</a>
            <a href="#" className="hover:text-red-600">Contact</a>
            <a href="#" className="hover:text-red-600">Resources</a>
            <a href="#" className="hover:text-red-600">Blog</a>
            <a href="#" className="bg-red-600 text-white px-3 py-1 rounded">Buy Online</a>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
        Home &gt; Fire Extinguisher For Home & Car
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">Fire Extinguisher For Home & Car</h1>
        <p className="text-gray-700 mb-4 max-w-2xl">Don't make the mistake of using the wrong fire extinguishers for your home fire or car fire. Always use the right fire extinguishers for home or fire extinguishers for car to remain protected from devastating fire. Staying informed about the fire extinguishers would help to stay safe and minimize damage.</p>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-4">
              <div className="font-bold text-red-600 mb-2">Fire Extinguisher For Home & Car</div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="mb-1">&gt; Fire Extinguisher For Entrance</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Living room</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Kitchen</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Bedroom</div>
                </div>
                <div>
                  <div className="mb-1">&gt; Fire Extinguisher For Staircase</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Garage</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Bathroom / Washroom</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Car</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-home-car-1.jpg" alt="Home & Car Extinguishers" className="rounded shadow max-w-xs" />
          </div>
        </div>

        {/* Buy Online Section */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row items-center mb-8">
          <div className="flex-1 flex items-center space-x-2">
            <span className="font-semibold text-gray-700">Buy Fire Extinguishers Online</span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>For Home & Car</option>
              <option>For Office</option>
              <option>For Factory</option>
            </select>
            <button className="bg-red-600 text-white px-4 py-1 rounded ml-2">GO</button>
          </div>
          <div className="flex items-center ml-4">
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-home-car-2.jpg" alt="Discount" className="h-16" />
            <div className="ml-2 text-xs text-gray-700">
              <div className="font-bold text-yellow-600">Flat 10% DISCOUNT</div>
              <div>Flat 10% Off at checkout<br />No coupons required<br />No minimum purchase amount</div>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-700 mb-8">Check Our Complete fire extinguisher price list <a href="#" className="text-red-600 underline">here</a>.</div>

        {/* Popular Searches */}
        <div className="mb-8">
          <div className="font-bold text-lg text-red-600 mb-2">Popular Searches</div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-700">
            <span>Fire Safety</span>
            <span>|</span>
            <span>Fire Fighting Equipment</span>
            <span>|</span>
            <span>Fire Extinguisher</span>
            <span>|</span>
            <span>Fire Suppression System</span>
            <span>|</span>
            <span>ABC Fire Extinguishers</span>
            <span>|</span>
            <span>BC Fire Extinguishers</span>
            <span>|</span>
            <span>CO2 Fire Extinguishers</span>
            <span>|</span>
            <span>Clean Agent Fire Extinguisher</span>
            <span>|</span>
            <span>Automatic Fire Extinguisher</span>
            <span>|</span>
            <span>Foam Fire Extinguishers</span>
            <span>|</span>
            <span>Water Mist</span>
            <span>|</span>
            <span>Fire Trace</span>
            <span>|</span>
            <span>Novec 1230 Fire Suppression System</span>
            <span>|</span>
            <span>Refill Fire Extinguisher</span>
            <span>|</span>
            <span>Fire Extinguisher Price</span>
          </div>
        </div>

        {/* Icons Row */}
        <div className="flex flex-wrap justify-between items-center border-t border-b py-4 mb-8 text-xs text-gray-700">
          <div className="flex items-center space-x-2">
            <img src="https://www.kanexfire.com/buyonline/pub/static/version1738308395/frontend/oxelar/oxelar_default/en_US/images/icons.png" alt="Leading Manufacturer" className="h-8" />
            <span>LEADING MANUFACTURER</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://www.kanexfire.com/buyonline/pub/static/version1738308395/frontend/oxelar/oxelar_default/en_US/images/icons.png" alt="150+ Products" className="h-8" />
            <span>150+ PRODUCTS</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://www.kanexfire.com/buyonline/pub/static/version1738308395/frontend/oxelar/oxelar_default/en_US/images/icons.png" alt="Shipping Worldwide" className="h-8" />
            <span>SHIPPING WORLDWIDE</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://www.kanexfire.com/buyonline/pub/static/version1738308395/frontend/oxelar/oxelar_default/en_US/images/icons.png" alt="Best Customer Service" className="h-8" />
            <span>BEST CUSTOMER SERVICE</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeAndCar; 