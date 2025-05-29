import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top bar with contact info and social links */}
      <div className="bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6">
              <span className="text-gray-600">EMAIL: info@kanexfire.com</span>
              <span className="text-gray-600">PHONE: +91 124 4567890</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-red-600 hover:text-red-700">HOME</Link>
              <span className="text-gray-400">|</span>
              <Link to="/career" className="text-red-600 hover:text-red-700">CAREER</Link>
              <span className="text-gray-400">|</span>
              <Link to="/contact" className="text-red-600 hover:text-red-700">CONTACT</Link>
              <span className="text-gray-400">|</span>
              <Link to="/resources" className="text-red-600 hover:text-red-700">RESOURCES</Link>
              <span className="text-gray-400">|</span>
              <Link to="/blog" className="text-red-600 hover:text-red-700">BLOG</Link>
              <Link to="/buy-online" className="bg-red-600 text-white px-4 py-1 text-xs rounded hover:bg-red-700 transition-colors">
                BUY ONLINE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <img 
              src="https://www.kanexfire.com/images/Header-logo.png" 
              alt="Kanex Fire" 
              className="h-12"
            />
            <div className="ml-3">
              <p className="text-sm text-gray-600">Shaping the future of Fire Protection</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium">ABOUT</Link>
            <Link to="/infrastructure" className="text-gray-700 hover:text-red-600 font-medium">INFRASTRUCTURE</Link>
            <div className="relative">
              <button onClick={() => handleDropdown('products')} className="text-gray-700 hover:text-red-600 font-medium flex items-center focus:outline-none">
                PRODUCTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'products' && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 max-w-screen-lg w-[900px] bg-black bg-opacity-90 shadow-lg rounded z-50 flex overflow-x-auto p-4 md:p-8 gap-10">
                  {/* FIRE EXTINGUISHERS */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="text-yellow-400 font-bold border-b border-gray-600 mb-2 pb-1">FIRE EXTINGUISHERS</div>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">UL Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">ABC Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">BC Powder Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Water & Foam Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">CO₂ Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Clean Agent Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Lithium Ion Fire Extinguisher</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Special Application Fire Extinguishers</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Automatic Modular Type Fire Extinguishers</a>
                  </div>
                  {/* FIRE SUPPRESSION SYSTEM */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="text-yellow-400 font-bold border-b border-gray-600 mb-2 pb-1">FIRE SUPPRESSION SYSTEM</div>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Pre Engineered Systems</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Pre Engineered Systems - Fire Trace</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Kitchen Suppression System</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Total Flooding System</a>
                    <div className="text-yellow-400 font-bold border-b border-gray-600 mt-4 mb-2 pb-1">ACCESSORIES EXTINGUISHERS</div>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Floor Mounting Stand</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Regon Fire Extinguisher Box</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Regon Fire Extinguisher Box Stand</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Vehicle Mounting Brackets</a>
                  </div>
                  {/* WATERMIST / CAFS SYSTEM */}
                  <div className="flex-1 min-w-[220px]">
                    <div className="text-yellow-400 font-bold border-b border-gray-600 mb-2 pb-1">WATERMIST / CAFS SYSTEM</div>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Watermist Cum CAFS (250L)</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Watermist Cum CAFS (Back Pack)</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Watermist Cum CAFS (Mobile Unit)</a>
                    <a href="#" className="block px-0 py-1 text-white hover:text-yellow-400">Portable Watermist</a>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => handleDropdown('service')} className="text-gray-700 hover:text-red-600 font-medium flex items-center focus:outline-none">
                SERVICE
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'service' && (
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded z-50">
                  <Link to="/refilling-service" className="block px-4 py-2 text-gray-700 hover:bg-red-100 font-medium">Refilling Service</Link>
                  <Link to="/refilling-agent-registration" className="block px-4 py-2 text-gray-700 hover:bg-red-100 font-medium">Refilling Agent Registration</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => handleDropdown('industries')} className="text-gray-700 hover:text-red-600 font-medium flex items-center focus:outline-none">
                INDUSTRIES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'industries' && (
                <div className="absolute left-0 mt-2 w-64 bg-black bg-opacity-90 shadow-lg rounded z-50">
                  <Link to="/industries/home-car" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Home & Car</Link>
                  <Link to="/industries/hospital" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Hospitals</Link>
                  <Link to="/school" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Schools</Link>
                  <Link to="/offices" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Offices</Link>
                  <Link to="/data-centers" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Data Centers</Link>
                  <Link to="/residential-societies" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Residential Societies</Link>
                  <Link to="/hotels-restaurants" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Hotel & Restaurants</Link>
                  <Link to="/electrical-rooms" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Electrical Rooms</Link>
                  <Link to="/factories" className="block px-4 py-2 text-white hover:bg-red-600 hover:text-white font-medium">Factories</Link>
                </div>
              )}
            </div>
            <Link to="/clients" className="text-gray-700 hover:text-red-600 font-medium">CLIENTS</Link>
            <Link to="/become-distributor" className="text-gray-700 hover:text-red-600 font-medium">BECOME A DISTRIBUTOR</Link>
          </nav>
          <button 
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40">
            <nav className="flex flex-col p-4 space-y-4">
              <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium">ABOUT</Link>
              <Link to="/infrastructure" className="text-gray-700 hover:text-red-600 font-medium">INFRASTRUCTURE</Link>
              <span className="text-gray-700 font-medium">PRODUCTS</span>
              <span className="text-gray-700 font-medium">SERVICE</span>
              <div className="ml-4 flex flex-col space-y-2">
                <Link to="/refilling-service" className="text-gray-700 hover:text-red-600 font-medium">Refilling Service</Link>
                <Link to="/refilling-agent-registration" className="text-red-600 font-semibold hover:text-red-700">Refilling Agent Registration</Link>
              </div>
              <span className="text-gray-700 font-medium">INDUSTRIES</span>
              <Link to="/clients" className="text-gray-700 hover:text-red-600 font-medium">CLIENTS</Link>
              <Link to="/become-distributor" className="text-gray-700 hover:text-red-600 font-medium">BECOME A DISTRIBUTOR</Link>
              <Link to="/career" className="text-gray-700 hover:text-red-600 font-medium">CAREER</Link>
              <Link to="/buy-online" className="text-gray-700 hover:text-red-600 font-medium">BUY ONLINE</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
