import React from 'react';
import Footer from '@/components/Footer';

const RefillingService = () => {
  return (
    <div className="bg-white w-full">
      {/* Top Banner */}
      <div className="relative w-full h-[350px] md:h-[400px] flex items-center justify-center" style={{background: 'linear-gradient(90deg, #f15a29 0%, #e94e77 100%)'}}>
        <img src="https://www.kanexfire.com/images/refilling-topbanner.jpg" alt="Refilling Banner" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">FIRE EXTINGUISHER<br />REFILLING SERVICES</h1>
        </div>
      </div>

      {/* Kanex Fire Intro */}
      <div className="container mx-auto px-4 py-8">
        <p className="text-gray-700 text-base md:text-lg mb-2">
          <span className="font-bold text-red-600">Kanex Fire</span> is one of the leading manufacturers of fire safety equipment in India. Our company deals with a multitude of fire extinguishers and fire protection products like Fire Suppression System, Water Mist & Special Products, etc. and we are now also providing Fire <span className="font-bold text-red-600">Extinguisher Refilling Services</span>.
        </p>
      </div>

      {/* Why Refilling Section */}
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">WHY REFILLING OF FIRE EXTINGUISHERS?</h2>
          <p className="text-gray-700 mb-4">Refilling of fire extinguishers are used to make sure your extinguishers are always charged and ready to use in case of emergency. The process includes inspection, emptying, cleaning, refilling, and re-pressurizing the extinguisher. Kanex works to keep the special attention to international standards and keeps fire service to give the special attention it deserves.</p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">REQUEST FOR REFILLING</button>
        </div>
        <div className="flex justify-center">
          <img src="https://www.kanexfire.com/images/whyrefilling.png" alt="Why Refilling" className="max-w-xs w-full" />
        </div>
      </div>

      {/* When Refilling Section */}
      <div className="w-full py-8" style={{background: 'linear-gradient(90deg, #fbb040 0%, #f15a29 100%)'}}>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">WHEN IS REFILLING OF FIRE EXTINGUISHERS IS REQUIRED?</h2>
            <ul className="list-disc pl-5 text-gray-800 mb-4">
              <li className="mb-2"><span className="font-bold">Fire extinguishers need to be recharged immediately after each use.</span> If the extinguishing agent inside was not completely discharged, the extinguisher still needs to be refilled to ensure it will work the next time you need it.</li>
              <li><span className="font-bold">Fire extinguishers need to be recharged periodically throughout their life.</span> The statutory framework in the country makes it mandatory to refill your fire extinguisher.</li>
            </ul>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">REQUEST FOR REFILLING</button>
          </div>
          <div className="flex justify-center">
            <img src="https://www.kanexfire.com/images/whenrefi_img.png" alt="When Refilling" className="max-w-xs w-full" />
          </div>
        </div>
      </div>

      {/* Why Kanex Refilling Section */}
      <div className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">WHY KANEX REFILLING SERVICES?</h2>
          <ul className="list-disc pl-5 text-gray-800 mb-4">
            <li>Best in class facilities and press certified refilling stations</li>
            <li>Refilled with highly skilled and trained professionals from the industry</li>
            <li>100% customer satisfaction</li>
            <li>Guaranteed on-time delivery</li>
          </ul>
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded transition">REQUEST FOR REFILLING</button>
        </div>
        <div className="flex justify-center">
          <img src="https://www.kanexfire.com/images/refilserviimg.png" alt="Kanex Refilling" className="max-w-xs w-full" />
        </div>
      </div>

      {/* Refilling Process Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">OUR REFILLING PROCESS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Air_Cleaning.jpg" alt="Step 1" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 01</div>
              <div className="text-gray-700 text-center text-sm">The Fire Extinguishers are discharged for performance check.</div>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Emptying.jpg" alt="Step 2" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 02</div>
              <div className="text-gray-700 text-center text-sm">The fire extinguisher is emptied & cleaned for any trace of content inside the cylinder.</div>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Hydro_Test.jpg" alt="Step 3" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 03</div>
              <div className="text-gray-700 text-center text-sm">The discharged cylinder undergoes a Hydro Static check for leaks and the strength of welding quality.</div>
            </div>
            {/* Step 4 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Dissasmabling.jpg" alt="Step 4" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 04</div>
              <div className="text-gray-700 text-center text-sm">The cylinder is sandblasted for semi-automatic powder coating process and then baking in Oven at 200 degrees for 30 minutes. This gives the new look, sheen for the quality and durable new paint surface of the cylinder.</div>
            </div>
            {/* Step 5 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Powder_Filling.jpg" alt="Step 5" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 05</div>
              <div className="text-gray-700 text-center text-sm">Fresh extinguishing Medium such as Dry Chemical Powder, CO2, Water or various types of Foam is filled in the cylinder. Vacuum based process fills the cylinder with accurate amount of extinguishing agent.</div>
            </div>
            {/* Step 6 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Valve_Tightning.jpg" alt="Step 6" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 06</div>
              <div className="text-gray-700 text-center text-sm">Then the extinguishers are assembled with discharge valve by torque wrench to maintain the internal working pressure of the Range and refilled with new chemicals.</div>
            </div>
            {/* Step 7 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Nitrogen_Pressurizing.jpg" alt="Step 7" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 07</div>
              <div className="text-gray-700 text-center text-sm">Fire extinguisher is charged / pressurized with UHP grade 99.99% pure nitrogen mixed with helium.</div>
            </div>
            {/* Step 8 */}
            <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
              <img src="https://www.kanexfire.com/images/Powder_Coating.jpg" alt="Step 8" className="w-28 h-28 object-cover rounded mb-2" />
              <div className="font-bold text-lg text-red-600 mb-1">STEP 08</div>
              <div className="text-gray-700 text-center text-sm">Then the fire extinguishers are subjected to dual leak test process. Inward leaks are tested by vacuum and outward leaks Spectro Meter Helium Leak Detection Test.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Client Enquiry Form */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">CLIENT ENQUIRY</h2>
        <form className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label className="font-medium">FULL NAME*</label>
            <input type="text" className="border rounded px-3 py-2" required />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium">CITY*</label>
            <input type="text" className="border rounded px-3 py-2" required />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium">COMPANY NAME*</label>
            <input type="text" className="border rounded px-3 py-2" required />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-medium">PHONE NO*</label>
            <input type="text" className="border rounded px-3 py-2" required />
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label className="font-medium">EMAIL ADDRESS*</label>
            <input type="email" className="border rounded px-3 py-2" required />
          </div>
          <div className="flex flex-col space-y-2 md:col-span-2">
            <label className="font-medium">ADDRESS*</label>
            <textarea className="border rounded px-3 py-2" rows={2} required></textarea>
          </div>
          <div className="flex items-center space-x-2 md:col-span-2">
            <input type="checkbox" required />
            <label className="text-sm">I'm not a robot</label>
            <div className="ml-2"><img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="captcha" className="h-6" /></div>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-8 py-2 rounded w-full md:w-auto">SUBMIT</button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default RefillingService; 