import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const pdfs = [
  {
    title: 'Spare Book 2020',
    image: 'https://www.kanexfire.com/images/Resources/resources-spares-2020-1.jpg',
    link: '#',
  },
  {
    title: 'Kanex Brochure 2023',
    image: 'https://www.kanexfire.com/images/resources1.jpg',
    link: '#',
  },
];

const howToVideos = [
  {
    title: 'How to Assemble / Install Trolley Mounted DCP type fire extinguisher',
    image: 'https://www.kanexfire.com/images/Resources/trolley-mounted-dcp.jpg',
    link: '#',
  },
  {
    title: 'Operation of DCP type trolley mounted fire extinguisher',
    image: 'https://www.kanexfire.com/images/Resources/operation-dcp-type-trolley-mounted.jpg',
    link: '#',
  },
  {
    title: 'What is Fire Rating?',
    image: 'https://www.kanexfire.com/images/Resources/xVideo-1-thumb.jpg',
    link: '#',
  },
  {
    title: 'KATS FIRE SUPPRESSION Chemourous FE 36',
    image: 'https://www.kanexfire.com/images/Resources/xVideo-2-thumb.jpg',
    link: '#',
  },
  {
    title: 'FIRE TRACE DLP NOVEC 1230',
    image: 'https://www.kanexfire.com/images/Resources/xVideo-3-thumb.jpg',
    link: '#',
  },
  {
    title: 'FIRE TRACE DLP Novec 1230 Multiple Fires',
    image: 'https://www.kanexfire.com/images/Resources/xVideo-4-thumb.jpg',
    link: '#',
  },
];

const fireTestingVideos = [
  {
    title: 'Class A Watermist 2 Ltr.',
    image: 'https://www.kanexfire.com/images/Resources/Class-A-Watermist-2-Ltr.jpg',
    link: '#',
  },
  {
    title: 'Class B Watermist 3 Ltr.',
    image: 'https://www.kanexfire.com/images/Resources/Class-B-Watermist-3-Ltr.jpg',
    link: '#',
  },
  {
    title: 'Class B Watermist 9 Ltr.',
    image: 'https://www.kanexfire.com/images/Resources/Class-B-Watermist-9-Ltr.jpg',
    link: '#',
  },
  {
    title: 'Class F Watermist 2 Ltr.',
    image: 'https://www.kanexfire.com/images/Resources/Class-F-Watermist-2-Ltr.jpg',
    link: '#',
  },
  {
    title: 'Class F Watermist 9 Ltr.',
    image: 'https://www.kanexfire.com/images/Resources/Class-F-Watermist-9-Ltr.jpg',
    link: '#',
  },
  {
    title: 'ABC Dry Powder MAP 50% Stored Pressure 4 KG',
    image: 'https://www.kanexfire.com/images/Resources/ABC-Dry-Powder-MAP-50-Stored-Pressure-4-KG.jpg',
    link: '#',
  },
  {
    title: 'Clean Agent FE 36',
    image: 'https://www.kanexfire.com/images/Resources/Clean-Agent-FE-36.jpg',
    link: '#',
  },
  {
    title: 'ABC Stored Pressure',
    image: 'https://www.kanexfire.com/images/Resources/ABC-Stored-Pressure.jpg',
    link: '#',
  },
  {
    title: 'ABC Dry Powder MAP 90% Stored Pressure',
    image: 'https://www.kanexfire.com/images/Resources/ABC-Dry-Powder-MAP-90-Stored-Pressure.jpg',
    link: '#',
  },
  {
    title: 'Clean Agent FE36 Stored Pressure 2 KG',
    image: 'https://www.kanexfire.com/images/Resources/Clean-Agent-FE36-Stored-Pressure-2-KG.jpg',
    link: '#',
  },
];

const Resources = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Banner */}
      <div className="relative w-full h-56 md:h-64 flex items-center justify-center" style={{backgroundImage: 'url(https://www.kanexfire.com/images/Resources/Banner.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 mt-8">Resources</h1>
          <div className="text-white text-sm flex items-center gap-2">
            <a href="/" className="underline">Home</a>
            <span>/</span>
            <span>Resources</span>
          </div>
        </div>
      </div>
      {/* Download Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-2xl font-semibold text-center mb-6">Download</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-10">
          {pdfs.map((pdf, idx) => (
            <a key={idx} href={pdf.link} target="_blank" rel="noopener noreferrer" className="block w-72 bg-white rounded shadow hover:shadow-lg transition overflow-hidden border border-gray-200">
              <div className="relative">
                <img src={pdf.image} alt={pdf.title} className="w-full h-44 object-cover" />
                <img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="PDF" className="absolute bottom-2 right-2 w-10 h-10" />
              </div>
              <div className="p-4 text-center text-base font-medium">{pdf.title}</div>
            </a>
          ))}
        </div>
        {/* How-to Videos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {howToVideos.map((vid, idx) => (
            <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden border border-gray-200 flex flex-col items-center">
              <div className="relative w-full">
                <img src={vid.image} alt={vid.title} className="w-full h-44 object-cover" />
                <img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="Play" className="absolute inset-0 m-auto w-14 h-14" style={{top: '0', left: '0', right: '0', bottom: '0'}} />
              </div>
              <div className="p-4 text-center text-sm font-medium">{vid.title}</div>
            </div>
          ))}
        </div>
        {/* Fire Testing Facilities */}
        <h2 className="text-2xl font-semibold text-center mb-6 mt-16">IN HOUSE FIRE TESTING FACILITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {fireTestingVideos.map((vid, idx) => (
            <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden border border-gray-200 flex flex-col items-center">
              <div className="relative w-full">
                <img src={vid.image} alt={vid.title} className="w-full h-44 object-cover" />
                <img src="https://s3.ap-south-1.amazonaws.com/custpostimages/ss_images/avatar15.png" alt="Play" className="absolute inset-0 m-auto w-14 h-14" style={{top: '0', left: '0', right: '0', bottom: '0'}} />
              </div>
              <div className="p-4 text-center text-sm font-medium">{vid.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources; 