import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BecomeDistributor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Banner Section */}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://www.kanexfire.com/images/Career_Banner.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Become a Kanex Partner</h1>
          <p className="text-white text-lg">Are you interested in becoming a kanex distributor? Fill out the form below to apply.<br/>Acceptance is Subject to approval.</p>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">&gt;</span>
            <span className="text-red-600">Become a Kanex Partner</span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section className="py-12 bg-white flex-1">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Distributor Application Form */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-red-600 mb-6">Distributor Application</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Company Name*" className="border p-3 rounded" required />
                <input type="text" placeholder="Contact Person Name*" className="border p-3 rounded" required />
                <input type="email" placeholder="Email ID*" className="border p-3 rounded" required />
                <input type="text" placeholder="Office Phone No.*" className="border p-3 rounded" required />
                <div className="md:col-span-2 text-xs text-red-500">Note: (All communications will be done through this ID)</div>
                <input type="text" placeholder="Website*" className="border p-3 rounded md:col-span-2" required />
                <input type="text" placeholder="Registered Office Address*" className="border p-3 rounded md:col-span-2" required />
                <select className="border p-3 rounded" required defaultValue="">
                  <option value="" disabled>Country*</option>
                  <option>India</option>
                  <option>Other</option>
                </select>
                <select className="border p-3 rounded" required defaultValue="">
                  <option value="" disabled>State*</option>
                  <option>Maharashtra</option>
                  <option>Other</option>
                </select>
                <select className="border p-3 rounded" required defaultValue="">
                  <option value="" disabled>City*</option>
                  <option>Mumbai</option>
                  <option>Other</option>
                </select>
                <input type="text" placeholder="Zip Code/Postal Code*" className="border p-3 rounded" required />
                <select className="border p-3 rounded md:col-span-2" required defaultValue="">
                  <option value="" disabled>How did you hear about us?</option>
                  <option>Google</option>
                  <option>Reference</option>
                  <option>Other</option>
                </select>
                <div className="flex items-center md:col-span-2">
                  <input type="checkbox" className="mr-2" required />
                  <span className="text-sm">I'm not a robot</span>
                </div>
                <button type="submit" className="bg-red-600 text-white font-semibold py-3 rounded md:col-span-2 hover:bg-red-700 transition-colors">SUBMIT APPLICATION</button>
              </form>
            </div>
            {/* Distributors Sidebar */}
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b pb-2">Distributors</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">Distributor Login</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Find a Distributor</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Kanex Brochure 2023</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BecomeDistributor; 