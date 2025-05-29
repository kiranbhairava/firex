
import React from 'react';

const CompanyProfile = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://www.kanexfire.com/images/about/Company_Profile.jpg"
              alt="Company Profile"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">COMPANY PROFILE</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are Kanex is a 20+ years+ comprehensive fire safety equipment 
              manufacturing company. Over the past 2 decades, our company has been 
              specializing in various fields of the fire safety equipment manufacturing, 
              designing and distribution of fire safety appliances such as firefighting 
              equipment, fire safety solutions, fire systems solutions and distribution of 
              fire safety equipment via through Authorised Fire dealers all over the India.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Contact Details:<br />
              Email: info@kanexfire.com<br />
              Tel: +91-124-4567890<br />
              Website: www.kanexfire.com
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              DOWNLOAD PROFILE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
