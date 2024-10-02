import React, { useState } from 'react';

// Sample data for events
const eventsData = [
  {
    title: "State Chess Championship",
    date: "November 10, 2024",
    description: "Join us for the annual State Chess Championship where the best players compete for the title!",
    image: "https://via.placeholder.com/300",
    type: "Tournament"
  },
  {
    title: "Chess Workshop for Beginners",
    date: "October 15, 2024",
    description: "A hands-on workshop designed for beginners to learn the basics of chess.",
    image: "https://via.placeholder.com/300",
    type: "Workshop"
  },
  {
    title: "Grandmaster Lecture Series",
    date: "December 1, 2024",
    description: "Attend a special lecture by a Grandmaster and learn advanced strategies.",
    image: "https://via.placeholder.com/300",
    type: "Lecture"
  },
  {
    title: "Monthly Chess Tournament",
    date: "October 30, 2024",
    description: "Compete in our monthly tournament and showcase your skills!",
    image: "https://via.placeholder.com/300",
    type: "Tournament"
  },
];

const Events = () => {
  const [filter, setFilter] = useState("All");

  // Function to filter events
  const filteredEvents = eventsData.filter(event => 
    filter === "All" || event.type === filter
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-lg">Stay tuned for exciting events and tournaments!</p>
        </div>
      </section>

      {/* Filter/Search Section */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <label className="mr-2 text-lg">Filter by Type:</label>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)} 
            className="p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="Tournament">Tournament</option>
            <option value="Workshop">Workshop</option>
            <option value="Lecture">Lecture</option>
          </select>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Events Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-semibold text-green-600 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
                <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-600 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Want to Stay Updated?</h2>
          <p className="mb-6">Sign up for our newsletter to get the latest news on upcoming events and more!</p>
          <a href="/subscribe" className="bg-white text-green-600 py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300">
            Subscribe Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Events;
