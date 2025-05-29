
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Kanex Fire has been our trusted partner for fire safety solutions. Their products are reliable and their service is exceptional. We highly recommend them for any fire safety requirements.",
      author: "John Smith",
      position: "Safety Manager",
      company: "ABC Corporation"
    },
    {
      text: "The quality of fire extinguishers and suppression systems from Kanex is outstanding. Their team provided excellent installation and maintenance support throughout our project.",
      author: "Sarah Johnson",
      position: "Facility Head",
      company: "XYZ Industries"
    },
    {
      text: "Professional service and high-quality products. Kanex Fire has helped us maintain the highest safety standards in our facilities. Their AMC service is prompt and reliable.",
      author: "Michael Brown",
      position: "Operations Director",
      company: "DEF Limited"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">TESTIMONIALS</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-orange-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-sm text-orange-600 font-medium">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
