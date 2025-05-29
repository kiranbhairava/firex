import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const Career = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Banner */}
      <div className="relative w-full h-64 flex items-center justify-center" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)'}}>
        <img src="https://www.kanexfire.com/images/Career_Banner.jpg" alt="Career Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Career</h1>
          <div className="text-white text-sm">Home / Career</div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 flex-1 grid md:grid-cols-2 gap-12">
        {/* Company Culture & Openings */}
        <div>
          <h2 className="text-xl font-bold mb-4">COMPANY CULTURE</h2>
          <p className="mb-6 text-gray-700">Technology cannot spike the business value of any company. Kanex understands that. So, it maintains the interest of the people as its first priority. Our experts are working day and night to find customized solutions to your business needs. We think this human-centered approach made us different from our competitors.</p>
          <h2 className="text-xl font-bold mb-2">CURRENT OPENINGS</h2>
          <div className="text-red-600 font-semibold">NO OPENING</div>
        </div>
        {/* Job Application Form */}
        <div>
          <h2 className="text-xl font-bold mb-4">JOB APPLICATION FORM</h2>
          <div className="mb-2 text-gray-700">Send your CV at <a href="mailto:hr@kanexfire.com" className="text-blue-600 underline">hr@kanexfire.com</a> or fill up below form.</div>
          <form className="space-y-4 bg-white p-6 rounded-lg shadow border">
            <div className="grid grid-cols-2 gap-4">
              <select className="border rounded px-3 py-2 w-full" required>
                <option value="">Select Post</option>
                <option>Sales Coordinator</option>
                <option>Manager</option>
                <option>Business Development</option>
              </select>
              <input type="text" placeholder="Name" className="border rounded px-3 py-2 w-full" required />
              <input type="text" placeholder="Current Location" className="border rounded px-3 py-2 w-full" required />
              <input type="text" placeholder="Preferred Location" className="border rounded px-3 py-2 w-full" required />
              <input type="email" placeholder="Email" className="border rounded px-3 py-2 w-full" required />
              <input type="text" placeholder="Mobile" className="border rounded px-3 py-2 w-full" required />
              <input type="text" placeholder="Work Experience (in Years)" className="border rounded px-3 py-2 w-full" required />
              <input type="text" placeholder="Qualification" className="border rounded px-3 py-2 w-full" required />
              <input type="text" placeholder="Current Salary" className="border rounded px-3 py-2 w-full" />
              <input type="text" placeholder="Expected Salary" className="border rounded px-3 py-2 w-full" />
            </div>
            <div>
              <input type="file" className="border rounded px-3 py-2 w-full" />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" required />
              <span className="text-sm">I'm not a robot</span>
              <img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="captcha" className="h-6" />
            </div>
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded w-full font-bold">Submit</button>
          </form>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Career;
