import React from 'react';

const coursesData = [
  {
    title: 'Beginner Chess Basics',
    description: 'Learn the fundamentals of chess including the rules, basic tactics, and strategies.',
    duration: '8 Weeks',
  },
  {
    title: 'Intermediate Tactics',
    description: 'Enhance your tactical skills with complex puzzles and scenarios.',
    duration: '10 Weeks',
  },
  {
    title: 'Advanced Strategy',
    description: 'Master advanced strategies to outsmart your opponents in competitive play.',
    duration: '12 Weeks',
  },
  {
    title: 'Chess for Kids',
    description: 'Engaging chess lessons designed specifically for young learners.',
    duration: '6 Weeks',
  },
  {
    title: 'Online Chess League',
    description: 'Join our online league to test your skills against players from around the world.',
    duration: 'Ongoing',
  },
];

const Courses = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg">Unlock your potential and elevate your chess skills with our expertly designed courses.</p>
        </div>
      </section>

      {/* Courses Listings */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Explore Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coursesData.map((course, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-gray-800 font-semibold">Duration: {course.duration}</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Optional) */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Students Say</h2>
          <div className="space-y-8">
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"The beginner course was fantastic! I learned so much in just a few weeks!"</p>
              <cite className="block mt-4 font-semibold">- Sarah Johnson</cite>
            </blockquote>
            <blockquote className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"The advanced strategy course took my game to the next level. Highly recommend!"</p>
              <cite className="block mt-4 font-semibold">- David Kim</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
