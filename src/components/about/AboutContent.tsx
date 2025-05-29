
import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              OVER TWO DECADES OF<br />
              FIRE FIGHTING EQUIPMENT & SYSTEMS
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1985 by Mr. Kanwar Ram Singh as well laid down fire systems plan right from 
              the basic fire Extinguisher equipment to the most comprehensive fire suppression solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since inception over 20 years, we have become a recognized brand name throughout the territory as a 
              pioneer in the firefighting equipment. Over years after years, we are getting stronger and stronger by 
              keeping ourselves ahead of changing technologies & regulations in fire fighting solutions.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our modern manufacturing facility is located at Gurgaon, India. It is also the 
              largest manufacturer of all portable fire extinguishers range in North India. However, it also makes 
              specialty fixed fire suppression systems for all standard types of occupancies.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our fire & safety products ranging from conventional manual to automatic systems. Over the years, we 
              are working with all major government and private companies, including such diverse sectors as 
              manufacturing, IT, education, hospitality, residential properties and healthcare.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://www.kanexfire.com/images/about/Image_01.png"
              alt="Fire Equipment 1"
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="https://www.kanexfire.com/images/about/Image_02.png"
              alt="Fire Equipment 2"
              className="w-full rounded-lg shadow-lg"
            />
            <img 
              src="https://www.kanexfire.com/images/about/Image_03.png"
              alt="Fire Equipment 3"
              className="w-full rounded-lg shadow-lg col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
