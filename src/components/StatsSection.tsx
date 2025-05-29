
import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      icon: "https://www.kanexfire.com/images/home/Icon_1.svg",
      number: "20,000+",
      text: "Fire Extinguisher"
    },
    {
      icon: "https://www.kanexfire.com/images/home/Icon_2.svg",
      number: "2 Mfg",
      text: "Manufacturing Facilities"
    },
    {
      icon: "https://www.kanexfire.com/images/home/Icon_3.svg",
      number: "750+",
      text: "Projects & Ongoing"
    },
    {
      icon: "https://www.kanexfire.com/images/home/Icon_4.svg",
      number: "200+",
      text: "Satisfied Customers"
    },
    {
      icon: "https://www.kanexfire.com/images/home/Icon_5.svg",
      number: "6000+",
      text: "AMC Service"
    },
    {
      icon: "https://www.kanexfire.com/images/home/Icon_6.svg",
      number: "5000+",
      text: "Life Save Protection"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-orange-500 to-red-600 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            LEADING
          </h2>
          <h3 className="text-2xl font-semibold text-orange-100 mb-2">
            MANUFACTURER
          </h3>
          <h4 className="text-xl text-orange-100">
            OF FIRE FIGHTING EQUIPMENT & SYSTEM
          </h4>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all">
              <img src={stat.icon} alt="" className="w-12 h-12 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-orange-100 font-medium">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
