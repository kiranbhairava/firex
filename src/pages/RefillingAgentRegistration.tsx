import React from 'react';
import Footer from '@/components/Footer';

const RefillingAgentRegistration = () => {
  return (
    <div className="bg-white w-full">
      {/* Top Banner */}
      <div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center" style={{background: 'linear-gradient(90deg, #e5e5e5 0%, #f5f5f5 100%)'}}>
        <img src="https://www.kanexfire.com/images/delar/delar-banner.jpg" alt="Refilling Agent Banner" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">An opportunity to become authorised</h1>
          <h2 className="text-2xl md:text-4xl font-bold text-red-600 mb-4">KANEX FIRE EXTINGUISHER REFILLING SERVICE PROVIDER</h2>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">
        {/* Left: Info */}
        <div>
          <div className="mb-6">
            <span className="font-bold text-red-600">Kanex</span> has been an industry leader for fire extinguisher manufacturing over the last 2 decades. We are a state of the art manufacturing company, setting new fire safety benchmarks since the very beginning. High Quality Fire Safety Products and Customer Satisfaction are the primary objectives of the company.
          </div>
          <div className="mb-6">
            Being a local brand, we support the movement of "vocal for local" and try to create more and more opportunities for our associates. Towards this agenda and supporting the vision of our honourable prime minister "Atmanirbhar Bharat" Kanex is introducing "KanServe" - one of a kind fire extinguisher refilling service. With this new initiative, we are inviting participation from fellow fire extinguishers service providers to become KanServe Authorised Refilling Service Providers. Here are some of the key benefits of being part of KanServe:
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">KEY BENEFITS</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center text-center">
                <img src="https://www.kanexfire.com/images/delar/1.png" alt="Ongoing Job" className="h-16 mb-2" />
                <span className="font-semibold">On-going Job of Fire Extinguisher Refilling</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="https://www.kanexfire.com/images/delar/2.png" alt="Trusted Brand" className="h-16 mb-2" />
                <span className="font-semibold">Associate with 2 Decade old Trusted Brand</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="https://www.kanexfire.com/images/delar/3.png" alt="Business Opportunity" className="h-16 mb-2" />
                <span className="font-semibold">Regular business & Earning Opportunity</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="https://www.kanexfire.com/images/delar/4.png" alt="Mobile Technology" className="h-16 mb-2" />
                <span className="font-semibold">Integrated with Mobile Technology for Smooth Operations</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="https://www.kanexfire.com/images/delar/5.png" alt="Updates" className="h-16 mb-2" />
                <span className="font-semibold">Industry Updates & Trends</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <img src="https://www.kanexfire.com/images/delar/6.png" alt="Timely Payouts" className="h-16 mb-2" />
                <span className="font-semibold">Timely Payouts</span>
              </div>
            </div>
          </div>
          <div className="mt-6 text-base">
            So what are you waiting for - take a step and fill up the form. Let's join hands for a safer tomorrow.
          </div>
        </div>
        {/* Right: Form */}
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">JOIN NOW</h3>
            <p className="mb-4 text-gray-700 text-sm">Provide us your complete information</p>
            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Company Name *" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <input type="text" placeholder="Address *" className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="City *" className="w-full border rounded px-3 py-2" required />
                <input type="email" placeholder="Email *" className="w-full border rounded px-3 py-2" required />
              </div>
              <div>
                <input type="text" placeholder="Phone number *" className="w-full border rounded px-3 py-2" required />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-sm">Do you provide fire extinguisher refilling services?</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-1"><input type="radio" name="refill_service" value="yes" required /><span>Yes</span></label>
                  <label className="flex items-center space-x-1"><input type="radio" name="refill_service" value="no" required /><span>No</span></label>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-sm">Do you own a refilling station *</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-1"><input type="radio" name="refill_station" value="yes" required /><span>Yes</span></label>
                  <label className="flex items-center space-x-1"><input type="radio" name="refill_station" value="no" required /><span>No</span></label>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-sm">Do you have Hydro test facility *</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-1"><input type="radio" name="hydro_test" value="yes" required /><span>Yes</span></label>
                  <label className="flex items-center space-x-1"><input type="radio" name="hydro_test" value="no" required /><span>No</span></label>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium text-sm">PESO approval in case of CO<sub>2</sub> extinguishers filling & Hydro test *</label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-1"><input type="radio" name="peso_approval" value="yes" required /><span>Yes</span></label>
                  <label className="flex items-center space-x-1"><input type="radio" name="peso_approval" value="no" required /><span>No</span></label>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" required />
                <label className="text-sm">I'm not a robot</label>
                <div className="ml-2"><img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="captcha" className="h-6" /></div>
              </div>
              <div>
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded w-full">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RefillingAgentRegistration; 