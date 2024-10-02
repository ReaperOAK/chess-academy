import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper';

const testimonials = [
  {
    quote:
      "The Chess Academy has truly transformed my skills. The instructors are passionate and dedicated. I went from a beginner to winning local tournaments in just a few months!",
    name: "John Doe",
    role: "Chess Enthusiast",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "I love the personalized attention I received at the academy. The community is so supportive, and I've made lifelong friends here. Highly recommend it to anyone interested in chess!",
    name: "Jane Smith",
    role: "Student",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "This academy gave me the tools to excel in competitions. The strategic thinking and problem-solving skills I've developed here extend beyond just chess.",
    name: "Michael Lee",
    role: "Chess Competitor",
    avatar: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Students Say</h2>
        
        {/* Responsive Grid for larger screens */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        {/* Swiper Slider for Mobile */}
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="md:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src={testimonial.avatar}
                    alt={`${testimonial.name}'s avatar`}
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.quote}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;