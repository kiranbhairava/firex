import React from 'react';
import Header from '@/components/Header';

const schoolItems = [
  'Fire Extinguisher For Auditorium',
  'Fire Extinguisher For Hostel Rooms',
  'Fire Extinguisher For Electrical Panels',
  'Fire Extinguisher For Corridor And Staircase',
  'Fire Extinguisher For Kitchen & Dining Area',
  'Fire Extinguisher For Generator Area',
  'Fire Extinguisher For Library',
  'Fire Extinguisher For Laboratory',
  'Fire Extinguisher For Store Room',
];

const popularSearches = [
  'Fire Safety',
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
  'Fire Extinguisher Price',
];

const School = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
        Home &gt; Fire Extinguisher For School & Education
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">Fire Extinguisher For School & Education</h1>
        <p className="text-gray-700 mb-4 max-w-3xl">
          Fire extinguishers for schools can easily control small fire outbreaks. By using recommended fire extinguishers for the auditorium, library, generator room, laboratory, or storeroom, school authorities can easily avert any major disaster and damage to school property. The extinguishers can effectively extinguish the flames and prevent it from spreading further.
        </p>
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div className="bg-red-100 border-l-4 border-red-600 p-4 mb-4">
              <div className="font-bold text-red-600 mb-2 flex items-center gap-2">
                <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-schools-1.jpg" alt="Fire Extinguisher For School" className="h-8 w-8 object-contain" />
                Fire Extinguisher For School
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <div className="mb-1">&gt; Fire Extinguisher For Auditorium</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Hostel Rooms</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Electrical Panels</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Corridor And Staircase</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Kitchen & Dining Area</div>
                </div>
                <div>
                  <div className="mb-1">&gt; Fire Extinguisher For Generator Area</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Library</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Laboratory</div>
                  <div className="mb-1">&gt; Fire Extinguisher For Store Room</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-schools-2.jpg" alt="School Extinguishers" className="rounded shadow max-w-xs" />
          </div>
        </div>
        {/* Buy Online Section */}
        <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row items-center mb-8">
          <div className="flex-1 flex items-center space-x-2">
            <span className="font-semibold text-gray-700">Buy Fire Extinguishers Online</span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>For Home & Car</option>
              <option>For Hospital</option>
              <option>For School</option>
              <option>For Offices and Shops</option>
            </select>
            <button className="bg-red-600 text-white px-4 py-1 rounded ml-2">GO</button>
          </div>
          <div className="flex items-center ml-4">
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/new/home/kanex-buyonline-schools-2.jpg" alt="Discount" className="h-16" />
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
            {popularSearches.map((term, idx) => (
              <span key={term}>{term}{idx < popularSearches.length - 1 && <span> | </span>}</span>
            ))}
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
      <footer className="bg-[#222] text-white pt-10 pb-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/footer-logo.png" alt="Footer Logo" className="h-12 mb-4" />
            <div className="text-xs mb-2">Office No.502, 5th Floor, A wing, Damji Shamji Corporate Square, Ghatkopar - Andheri Link Road, Laxmi Nagar, Ghatkopar (E), Mumbai - 400075</div>
            <div className="text-xs mb-2">+91 22 2500 1288</div>
            <div className="text-xs mb-2">marketing@kanexfire.com</div>
            <div className="flex gap-2 mt-4">
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/fb-icon.png" alt="Facebook" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/in-icon.png" alt="LinkedIn" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/insta-icon.png" alt="Instagram" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/twitter-icon.png" alt="Twitter" className="h-6" /></a>
              <a href="#"><img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/youtube-icon.png" alt="YouTube" className="h-6" /></a>
            </div>
          </div>
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <div className="font-bold mb-2">PAYMENT METHODS ACCEPTED</div>
            <img src="https://www.kanexfire.com/buyonline/pub/media/wysiwyg/ccavenue_pay_options_1_.jpg" alt="Payment Methods" className="h-8" />
          </div>
          <div className="flex-1 min-w-[220px]">
            <div className="font-bold mb-2">QUICK LINKS</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#">Home</a>
              <a href="#">Career</a>
              <a href="#">Contact</a>
              <a href="#">Resources</a>
              <a href="#">Blog</a>
              <a href="#">About</a>
              <a href="#">Infrastructure</a>
              <a href="#">Clients</a>
              <a href="#">Testimonials</a>
              <a href="#">Return and Refund Policy</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© {new Date().getFullYear()} Kanex Fire Solutions Limited. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default School; 
