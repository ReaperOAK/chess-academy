import React from 'react';
import { FaChessKing, FaTrophy, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Our Chess Academy</h1>
          <p className="text-lg">Sharpening minds and nurturing champions since 2010.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600">To cultivate strategic thinking and excellence in the art of chess, fostering both personal growth and competitive success.</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaChessKing className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide top-tier chess education to students of all ages, promoting critical thinking, problem-solving, and a love for the game.</p>
            </div>
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaTrophy className="mx-auto text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">To nurture the next generation of chess champions by creating a learning environment that values dedication, creativity, and perseverance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Journey</h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2010, our academy has grown into a hub of excellence, with students regularly participating in national and international tournaments. We started with a vision to make chess accessible to everyone and have since become one of the leading chess academies in the country.
          </p>
          <img
            className="mx-auto rounded-lg shadow-lg"
            src="https://via.placeholder.com/800x400"
            alt="Academy History"
          />
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
              <p className="text-gray-600">Head Coach</p>
              <p className="mt-4 text-gray-600">John has over 20 years of experience and has coached multiple national chess champions.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">Senior Trainer</p>
              <p className="mt-4 text-gray-600">Jane specializes in working with beginner players, helping them build a strong foundation in chess.</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <img
                className="w-24 h-24 rounded-full mx-auto mb-4"
                src="https://via.placeholder.com/150"
                alt="Team Member"
              />
              <h3 className="text-xl font-bold text-gray-800">Robert Lee</h3>
              <p className="text-gray-600">Tactical Specialist</p>
              <p className="mt-4 text-gray-600">Robert focuses on tactical play and is known for his creative and aggressive strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaChessKing className="mx-auto text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Expert Coaches</h3>
              <p className="text-gray-600">Our coaches are highly experienced, with years of competitive play and coaching expertise.</p>
            </div>
            <div className="flex-1 bg-white p-8 shadow-lg rounded-lg text-center">
              <FaUsers className="mx-auto text-5xl text-indigo-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Community of Learners</h3>
              <p className="text-gray-600">We foster a community where students can learn, practice, and grow together in a supportive environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
