import React from 'react';
import Header from '@/components/Header';

const icon = (src, alt) => <img src={src} alt={alt} className="h-5 inline-block align-middle" />;
const knowMore = <a href="#" className="text-blue-700 text-xs font-semibold mt-2">Know More &gt;&gt;</a>;

const Factories = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      {/* Hero Section */}
      <div className="relative w-full h-[320px] flex items-center justify-center" style={{ backgroundImage: 'url(https://www.kanexfire.com/images/industries-Wise-Products/Factory.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Fire Extinguisher For Factories & Manufacturing Units</h1>
        </div>
      </div>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4 text-xs text-gray-500">
        Home / Industries / Fire Extinguisher For Factories & Manufacturing Units
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-10">
        {/* MAIN ENTRANCE & ADMIN ROOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Entrance */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">MAIN ENTRANCE</h2>
            <div className="flex flex-wrap gap-4">
              {/* Clean Agent Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">Clean Agent Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Clean_Agent_Type-Offices.png" alt="Clean Agent Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
            </div>
          </div>
          {/* Admin Room */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">ADMIN ROOM</h2>
            <div className="flex flex-wrap gap-4">
              {/* Clean Agent Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">Clean Agent Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Clean_Agent_Type-Offices.png" alt="Clean Agent Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
            </div>
          </div>
        </div>
        {/* PACKING AREA */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">PACKING AREA</h2>
          <div className="flex flex-wrap gap-4">
            {/* Foam Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
              <div className="font-semibold mb-2">Foam Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Foam_Type.png" alt="Foam Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* ABC Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">ABC Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* Watermist */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">Watermist</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Watermist.png" alt="Watermist" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
          </div>
        </div>
        {/* FRONT OFFICE / RECEPTION & PARKING */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Front Office / Reception */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">FRONT OFFICE / RECEPTION</h2>
            <div className="flex flex-wrap gap-4">
              {/* Clean Agent Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">Clean Agent Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Clean_Agent_Type-Offices.png" alt="Clean Agent Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
            </div>
          </div>
          {/* Parking */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">PARKING</h2>
            <div className="flex flex-wrap gap-4">
              {/* CO2 Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">CO<sub>2</sub> Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Co2_Type.png" alt="CO2 Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/ISI.png', 'ISI')}
                </div>
                {knowMore}
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
            </div>
          </div>
        </div>
        {/* GOODS STORAGE & OIL STORAGE AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Goods Storage */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">GOODS STORAGE</h2>
            <div className="flex flex-wrap gap-4">
              {/* Foam Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">Foam Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Foam_Type.png" alt="Foam Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
            </div>
          </div>
          {/* Oil Storage Area */}
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">OIL STORAGE AREA</h2>
            <div className="flex flex-wrap gap-4">
              {/* Foam Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
                <div className="font-semibold mb-2">Foam Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Foam_Type.png" alt="Foam Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
              {/* ABC Type */}
              <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
                <div className="font-semibold mb-2">ABC Type</div>
                <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
                <div className="flex flex-wrap justify-center gap-1 mb-2">
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                  {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
                </div>
                {knowMore}
              </div>
            </div>
          </div>
        </div>
        {/* ELECTRICAL PANEL */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">ELECTRICAL PANEL</h2>
          <div className="flex flex-wrap gap-4">
            {/* CO2 Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
              <div className="font-semibold mb-2">CO<sub>2</sub> Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Co2_Type.png" alt="CO2 Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/ISI.png', 'ISI')}
              </div>
              {knowMore}
            </div>
            {/* ABC Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">ABC Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* Clean Agent Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">Clean Agent Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Clean_Agent_Type-Offices.png" alt="Clean Agent Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* Panel Flooding System */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire System</div>
              <div className="font-semibold mb-2">Panel Flooding System</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Panel-Flooding-System.png" alt="Panel Flooding System" className="h-20 mb-2" />
              {knowMore}
            </div>
          </div>
        </div>
        {/* GENERATOR AND TRANSFORMER AREA */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">GENERATOR AND TRANSFORMER AREA</h2>
          <div className="flex flex-wrap gap-4">
            {/* CO2 Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
              <div className="font-semibold mb-2">CO<sub>2</sub> Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Co2_Type.png" alt="CO2 Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/ISI.png', 'ISI')}
              </div>
              {knowMore}
            </div>
            {/* ABC Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">ABC Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* Foam Type Trolley */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire System</div>
              <div className="font-semibold mb-2">Foam Type Trolley</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Foam_Type-25kg.png" alt="Foam Type Trolley" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
          </div>
        </div>
        {/* WORKSHOP AREA */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">WORKSHOP AREA</h2>
          <div className="flex flex-wrap gap-4">
            {/* CO2 Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
              <div className="font-semibold mb-2">CO<sub>2</sub> Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Co2_Type.png" alt="CO2 Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/ISI.png', 'ISI')}
              </div>
              {knowMore}
            </div>
            {/* ABC Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">ABC Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/ABC_Dry_Powder.png" alt="ABC Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* Foam Type */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-semibold mb-2">Foam Type</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Foam_Type.png" alt="Foam Type" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_A.png', 'Class A')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_B.png', 'Class B')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_C.png', 'Class C')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Electrical.png', 'Electrical')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
          </div>
        </div>
        {/* KITCHEN, EMPLOYEE DINNING AREA */}
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-4">KITCHEN, EMPLOYEE DINNING AREA</h2>
          <div className="flex flex-wrap gap-4">
            {/* K class */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire Extinguisher</div>
              <div className="font-semibold mb-2">K class</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/K_Class.png" alt="K class" className="h-20 mb-2" />
              <div className="flex flex-wrap justify-center gap-1 mb-2">
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/Class_F.png', 'Class F')}
                {icon('https://www.kanexfire.com/images/industries-Wise-Products/Icons/CE.png', 'CE')}
              </div>
              {knowMore}
            </div>
            {/* Kitchen Fire Suppression System */}
            <div className="bg-white rounded shadow p-4 flex flex-col items-center w-40">
              <div className="font-bold text-red-600 text-sm mb-2">Fire System</div>
              <div className="font-semibold mb-2">Kitchen Fire Suppression System</div>
              <img src="https://www.kanexfire.com/images/industries-Wise-Products/Product-Images/Kitchen-Fire-Suppression-System.png" alt="Kitchen Fire Suppression System" className="h-20 mb-2" />
              {knowMore}
            </div>
          </div>
        </div>
        {/* Popular Searches */}
        <div className="mt-10 mb-8">
          <div className="font-bold text-lg text-red-600 mb-2">Popular Searches</div>
          <div className="flex flex-wrap gap-2 text-xs text-gray-700">
            {['Fire Extinguishers', 'Co2 Fire Extinguishers', 'ABC Fire Extinguishers', 'Clean Agent Fire Extinguishers', 'Fire Fighting System', 'Water Mist Fire Extinguishers', 'Ceiling Mounted Fire Extinguishers', 'Kitchen Fire Extinguishers', 'Foam Fire Extinguishers', 'Li-ION Fire Extinguisher', 'Fire Trace', 'Special Application Fire Extinguishers', 'Fire Extinguisher Refilling Services', 'Fire Fighting Equipment'].map((term, idx, arr) => (
              <span key={term}>{term}{idx < arr.length - 1 && <span> | </span>}</span>
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-[#222] text-white pt-10 pb-4 mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <img src="https://www.kanexfire.com/images/home/Footer_Logo.png" alt="Footer Logo" className="h-12 mb-4" />
            <div className="text-xs mb-2">Office No.502, 5th Floor, A wing, Damji Shamji Corporate Square, Ghatkopar - Andheri Link Road, Laxmi Nagar, Ghatkopar (E), Mumbai - 400075</div>
            <div className="text-xs mb-2">+91 22 2500 1288</div>
            <div className="text-xs mb-2">marketing@kanexfire.com</div>
          </div>
          <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
            <div className="font-bold mb-2">PAYMENT METHODS ACCEPTED</div>
            <img src="https://www.kanexfire.com/images/payment_logos.jpg" alt="Payment Methods" className="h-8" />
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

export default Factories; 