import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Infrastructure = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Banner Section */}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: 'url(https://www.kanexfire.com/images/infrastructure/infrastructure-Banner.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-bold text-white">Infrastructure</h1>
      </div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <a href="/" className="hover:text-red-600">Home</a>
            <span className="mx-2">&gt;</span>
            <span className="text-red-600">Infrastructure</span>
          </div>
        </div>
      </div>
      {/* Production Facts */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 tracking-wide">PRODUCTION FACTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150</div>
              <div className="text-gray-700">Product Portfolio</div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">50000+</div>
              <div className="text-gray-700">Monthly Fire Extinguishers Production Facility</div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">150+</div>
              <div className="text-gray-700">Dedicated Staff</div>
            </div>
            <div className="bg-gray-50 rounded-lg shadow p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100+</div>
              <div className="text-gray-700">Fire Safety System Installed Monthly</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://www.kanexfire.com/images/infrastructure/Image-1.jpg" alt="Infrastructure" className="rounded-lg shadow w-full" />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                Kanex Fire is well-furnished with high-end facilities for meeting production and quality of products. In terms of 3Qs (Quality, Quickness & Quantity), we try to meet the demands of our esteemed customers. Kanex continuously work on improving its operational area by rooting for technological advancement within the organization.
              </p>
              <p className="text-gray-700 mb-4">
                The finest production practices and technology are further extolled at Kanex's own fire testing ground. The fire testing ground is empowered to conduct the most complex tests, which is needed for various types of fire rating.
              </p>
              <div className="text-2xl font-bold text-red-600 mb-2">Fire Equipment Manufacturer and Supplier</div>
            </div>
          </div>
        </div>
      </section>
      {/* Facility Features */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3 text-sm">
              <li>✔ In house Deep drawing facility</li>
              <li>✔ Semi-automated machine shop</li>
              <li>✔ Advanced fabrication facility certified by TPI</li>
              <li>✔ Automated painting and powder coating units</li>
              <li>✔ CO₂ gas filling facility</li>
              <li>✔ Fire suppression system (Clean Agent) refilling and decanting facility</li>
              <li>✔ Automatic anti-corrosive treatment panel</li>
              <li>✔ Advanced testing facility as per IS 15683, IS 18018 and UL 711.</li>
            </ul>
            <ul className="space-y-3 text-sm">
              <li>✔ In house Kitchen and panel Fire suppression systems test facility.</li>
              <li>✔ Roof top solar plant of 100 Kw</li>
              <li>✔ Completely indigenous Product Design and Development facilities</li>
              <li>✔ Complete product training facilities</li>
              <li>✔ Fire test facility as per Indian standard and UL standard.</li>
              <li>✔ Fully automated & integrated business processes through ERP system and CRM software.</li>
              <li>✔ Stocking Warehouse at Ahmedabad and Noida.</li>
              <li>✔ Corporate Office registered at Ghatkopar, Mumbai.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Production Unit Film */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-center mb-8">Watch Our Production Unit Film</h3>
          <div className="flex justify-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0Qd5qF6Q7nA" title="Production Unit Film" frameBorder="0" allowFullScreen className="rounded-lg shadow"></iframe>
          </div>
        </div>
      </section>
      {/* In House Fire Testing Facilities */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold text-center mb-8">IN HOUSE FIRE TESTING FACILITIES</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/infrastructure/infra-video-1.jpg" alt="Class B Fire Test" className="rounded-lg shadow mb-4 w-full max-w-md" />
              <div className="text-center font-medium mt-2">Class B Watermist 3 ltr. Fire Testing</div>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/infrastructure/infra-video-2.jpg" alt="Class F Fire Test" className="rounded-lg shadow mb-4 w-full max-w-md" />
              <div className="text-center font-medium mt-2">Class F Watermist 9 ltr. Fire Testing</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Infrastructure; 