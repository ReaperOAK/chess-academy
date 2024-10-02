import React from 'react';

const Home = () => {
  const courses = [
    { title: 'Beginner Chess', description: 'Learn the basics of chess.', link: '/courses/beginner' },
    { title: 'Intermediate Strategy', description: 'Improve your game with advanced strategies.', link: '/courses/intermediate' },
    { title: 'Mastering Chess', description: 'Become a chess master with in-depth tactics.', link: '/courses/master' },
  ];

  const achievements = [
    'John Doe - National Champion 2024',
    'Jane Smith - State Champion 2023',
    'Mike Johnson - Local Tournament Winner 2024',
  ];

  const events = [
    'Chess Tournament - January 15, 2024',
    'Beginner Workshop - February 10, 2024',
    'Annual Chess Fest - March 20, 2024',
  ];

  const testimonials = [
    '“Chess Academy transformed my game! Highly recommended!” - Sarah K.',
    '“The instructors are knowledgeable and supportive!” - David L.',
    '“I’ve made so many friends through this academy!” - Emily R.',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Welcome to the Chess Academy</h1>
          <p className="text-lg mb-6">Unleash your inner chess master with our expert-led courses.</p>
          <a href="/admission" className="bg-white text-blue-600 py-2 px-6 rounded hover:bg-gray-200 transition-colors duration-300">Join Now</a>
        </div>
      </section>

      {/* About Us Preview Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            At Chess Academy, we are dedicated to fostering a love for chess in students of all ages. 
            Our experienced instructors provide personalized coaching and mentorship to help you reach your full potential.
          </p>
          <a href="/about" className="text-blue-600 underline">Learn More</a>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-700 mb-4">{course.description}</p>
                <a href={course.link} className="text-blue-600 underline">View Course</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Achievements Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Student Achievements</h2>
          <ul className="list-disc list-inside space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-lg">{achievement}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Upcoming Events</h2>
          <ul className="list-disc list-inside space-y-2">
            {events.map((event, index) => (
              <li key={index} className="text-lg">{event}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Students Say</h2>
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <blockquote key={index} className="italic text-lg">
                "{testimonial}"
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Chess Journey?</h2>
          <a href="/admission" className="bg-white text-blue-600 py-2 px-6 rounded hover:bg-gray-200 transition-colors duration-300">Enroll Now</a>
        </div>
      </section>
    </div>
  );
};

export default Home;
