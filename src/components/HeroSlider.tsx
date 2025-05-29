
import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://www.kanexfire.com/images/slider/01-Electrical-Fire-Extinguisher-Banner.jpg",
      title: "KCAFS 250",
      subtitle: "Kanex Water Mist Cum CAFS 250L",
      description: "The ultimate firefighting solution for electrical hazards",
      buttonText: "Know More"
    },
    {
      image: "https://www.kanexfire.com/images/slider/02-Kitchen-Suppression-Banner.jpg",
      title: "Kitchen Suppression",
      subtitle: "Advanced Kitchen Fire Safety",
      description: "Comprehensive fire protection for commercial kitchens",
      buttonText: "Know More"
    },
    {
      image: "https://www.kanexfire.com/images/slider/03-ABC-CO2-Banner.jpg",
      title: "ABC & CO2",
      subtitle: "Fire Extinguisher Systems",
      description: "Reliable fire suppression for all types of fires",
      buttonText: "Know More"
    },
    {
      image: "https://www.kanexfire.com/images/slider/05-Suppression-System-Banner.jpg",
      title: "Suppression System",
      subtitle: "Complete Fire Protection",
      description: "State-of-the-art fire suppression technology",
      buttonText: "Know More"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-orange-900/60 to-transparent">
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="text-white max-w-2xl">
                  <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-none">
                    {slide.title}
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-orange-300">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 opacity-90">
                    {slide.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
      >
        <img src="https://www.kanexfire.com/images/home/arrow-left.png" alt="Previous" className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all z-10"
      >
        <img src="https://www.kanexfire.com/images/home/arrow-right.png" alt="Next" className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
