import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const branches = [
  {
    city: 'Ahmedabad',
    address: '349, 3rd Floor, Isoon Emporio, Next to Star Bazar, Jodhpur Cross Road, Satellite, Ahmedabad – 380015.',
    map: '#',
  },
  {
    city: 'Delhi NCR',
    address: 'B-90, Ground Floor, Sector - 64, Noida Uttar Pradesh - 201 301.',
    map: '#',
  },
  {
    city: 'Hyderabad',
    address: 'R/o.H.No-10-2-229, 1st Floor, Nehru Nagar Road no-1, Beside Narayana Junior College, West Marredpally, Secunderabad',
    map: '#',
  },
  {
    city: 'Kolkata',
    address: '110, Bose Para Road, Sakherbazar, Near Barisha Club, Kolkata - 700008, West Bengal, India',
    map: '#',
  },
  {
    city: 'Bhavnagar',
    address: 'Plot No.7, Paras Industrial Estate, Nr. Garibshah Pir, Bhavnagar-Rajkot Road, Sihor – 364 240.',
    map: '#',
  },
  {
    city: 'Bangalore',
    address: 'GF-01, Site 814, Sector B, Aecs Layout, Hosur Road Bangalore, Karnataka - 560 068',
    map: '#',
  },
  {
    city: 'Chandigarh',
    address: 'Plot No. - 184, Sector 15A, Chandigarh - 160015',
    map: '#',
  },
  {
    city: 'Chennai',
    address: 'Plot No. 4, V. V. Nagar 5th street, Near Gokulam School, Kolathur, Chennai - 600 099.',
    map: '#',
  },
  {
    city: 'Pune',
    address: 'H.No. 1618, Ganesh Park, Kawade Vasti, Nagar Road, Wagholi, Pune - 412 207.',
    map: '#',
  },
  {
    city: 'Baroda',
    address: 'FF-5, Orchid Platina, Sama-Savli Road, Vemali Village, Vadodara - 390008 - Gujarat - India',
    map: '#',
  },
  {
    city: 'Rajasthan',
    address: '4-J-9 VIGYAN NAGAR KOTA, INFRONT OF MAYANK SCHOOL, KOTA, RAJASTHAN, 324006',
    map: '#',
  },
  {
    city: 'Surat',
    address: 'Block No. 8, Plot No. 7, Industrial Co. Op. Society, Khatodara Industrial Society, Khatodra Wadi, Surat, Gujarat 395002',
    map: '#',
  },
];

const Contact = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Banner */}
      <div className="relative w-full h-64 flex items-center justify-center" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.2) 100%)'}}>
        <img src="https://www.kanexfire.com/images/contact/Banner.jpg" alt="Contact Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Contact us</h1>
          <div className="text-white text-sm">Home / Contact us</div>
        </div>
      </div>
      {/* Get in Touch Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-2">GET IN TOUCH</h2>
        <div className="text-lg font-bold mb-2">KANEX FIRE SOLUTIONS LIMITED</div>
        <div className="text-orange-500 font-semibold mb-2">REGISTERED ADDRESS</div>
        <div className="mb-6 text-gray-700">Plot No.7-8, Paras Industrial Estate, Near Garibshah Pir, Bhavnagar-Rajkot Road, Sihor – 364240</div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8">
          <div className="flex flex-col items-center">
            <img src="https://www.kanexfire.com/images/contact/Call-icon.png" alt="Call" className="h-10 mb-2" />
            <div className="font-semibold">+91 22 2500 1288</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://www.kanexfire.com/images/contact/Location-Icon.png" alt="Location" className="h-10 mb-2" />
            <div className="font-semibold">Mumbai Corporate Address</div>
            <div className="text-gray-700 text-sm">Office No.502, 5th Floor, A wing, Damji Shamji Corporate Square,<br/>Ghatkopar - Andheri Link Road, Laxmi Nagar, Ghatkopar (E), Mumbai - 400075.</div>
          </div>
          <div className="flex flex-col items-center">
            <img src="https://www.kanexfire.com/images/contact/Mail-Icon.png" alt="Mail" className="h-10 mb-2" />
            <div className="font-semibold">marketing@kanexfire.com</div>
          </div>
        </div>
      </div>
      {/* Map & Form Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8 mb-12">
        <div className="flex-1 min-w-[300px]">
          <iframe title="Kanex Fire Map" src="https://www.google.com/maps?q=Kanex+Fire+Solutions+Limited,+Mumbai&output=embed" width="100%" height="350" className="rounded shadow border" style={{minHeight: '350px'}}></iframe>
        </div>
        <div className="flex-1 min-w-[300px] bg-gradient-to-br from-[#f15a29] to-[#e94e77] rounded-lg shadow-lg p-8 text-white relative">
          <img src="https://www.kanexfire.com/images/contact/Form-Banner.jpg" alt="Form Banner" className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4">CONTACT US</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="border rounded px-3 py-2 w-full text-black" required />
                <input type="email" placeholder="Email" className="border rounded px-3 py-2 w-full text-black" required />
                <input type="text" placeholder="State" className="border rounded px-3 py-2 w-full text-black" required />
                <input type="text" placeholder="City" className="border rounded px-3 py-2 w-full text-black" required />
                <input type="text" placeholder="Company" className="border rounded px-3 py-2 w-full text-black" />
                <input type="text" placeholder="Phone" className="border rounded px-3 py-2 w-full text-black" required />
              </div>
              <textarea placeholder="Comment" className="border rounded px-3 py-2 w-full text-black" rows={3} required></textarea>
              <div className="flex items-center gap-2">
                <input type="checkbox" required />
                <span className="text-sm">I'm not a robot</span>
                <img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="captcha" className="h-6" />
              </div>
              <button type="submit" className="bg-white text-[#f15a29] font-bold px-8 py-2 rounded w-full mt-2 hover:bg-gray-100">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {/* Branch Office Section */}
      <div className="container mx-auto px-4 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">BRANCH OFFICE</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-4 text-center">
              <div className="text-orange-500 font-bold mb-2">{branch.city}</div>
              <div className="text-gray-700 mb-2 text-sm">{branch.address}</div>
              <a href={branch.map} className="text-blue-600 underline text-xs">View on Map</a>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact; 