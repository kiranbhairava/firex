
import React from 'react';

const AboutHero = () => {
  return (
    <section 
      className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://www.kanexfire.com/images/about/about_Banner.jpg")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <div className="flex items-center justify-center space-x-2 text-lg">
          <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
          <span>/</span>
          <span>About Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
