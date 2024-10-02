import React from 'react';

// Sample data for achievements
const achievementsData = [
  {
    title: "State Chess Championship 2023",
    description: "Our student, Anika, won 1st place in the State Chess Championship held in Kolkata.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "National Level Tournament 2023",
    description: "Rohit secured a remarkable 2nd position in the National Level Tournament.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "International Chess Olympiad 2022",
    description: "Our academy's team represented India and achieved a bronze medal at the International Chess Olympiad.",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Beginner's Tournament 2023",
    description: "Young chess prodigy, Sam, won 1st place in the Beginner's Tournament.",
    image: "https://via.placeholder.com/300",
  },
];

const Achievements = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Student Achievements</h1>
          <p className="text-lg">Celebrating the accomplishments of our talented students!</p>
        </div>
      </section>

      {/* Achievements List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Notable Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievementsData.map((achievement, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img src={achievement.image} alt={achievement.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-purple-600 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Highlight: Anika's Journey</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Anika, our star student, has consistently shown exceptional skill in chess. From her first tournament to winning the State Championship, her journey is an inspiration to all!
          </p>
          <img src="https://via.placeholder.com/400" alt="Anika's Journey" className="mx-auto w-full h-60 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">What Our Students Say</h2>
          <div className="space-y-4">
            <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg italic">“Joining this academy has been the best decision of my life! The training and support helped me win my first tournament!”</p>
              <cite className="block mt-2 font-semibold">- Rohit, National Level Tournament 2023 Runner-up</cite>
            </blockquote>
            <blockquote className="bg-gray-100 p-4 rounded-lg shadow-md">
              <p className="text-lg italic">“The coaches are fantastic, and the environment is so encouraging. I can't wait to achieve more!”</p>
              <cite className="block mt-2 font-semibold">- Sam, Beginner's Tournament 2023 Winner</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Chess Journey?</h2>
          <p className="mb-6">Join our academy today and become the next chess champion!</p>
          <a href="/admission" className="bg-white text-purple-600 py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
