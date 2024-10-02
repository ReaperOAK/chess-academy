import React from 'react';

const admissionSteps = [
  {
    step: 'Step 1: Choose a Course',
    description: 'Select the course that best fits your skill level and interest.',
  },
  {
    step: 'Step 2: Fill Out the Application Form',
    description: 'Complete the online application form with accurate information.',
  },
  {
    step: 'Step 3: Submit Payment',
    description: 'Make the necessary payment for the selected course.',
  },
  {
    step: 'Step 4: Confirmation',
    description: 'Receive a confirmation email with further instructions.',
  },
];

const Admission = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Admission Process</h1>
          <p className="text-lg">Join our chess academy and take the first step toward mastering the game!</p>
        </div>
      </section>

      {/* Admission Steps */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How to Apply</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-semibold text-green-600 mb-2">{item.step}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Eligibility Criteria</h2>
          <ul className="list-disc list-inside space-y-4 text-left max-w-2xl mx-auto">
            <li className="text-lg">Age: 6 years and above.</li>
            <li className="text-lg">No prior chess experience required for beginner courses.</li>
            <li className="text-lg">For advanced courses, basic knowledge of chess rules is necessary.</li>
            <li className="text-lg">Commitment to attend classes regularly.</li>
          </ul>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Application Form</h2>
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  required
                  className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-700">Select Course</label>
                <select className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-500">
                  <option value="">-- Choose a Course --</option>
                  <option value="beginner">Beginner Chess Basics</option>
                  <option value="intermediate">Intermediate Tactics</option>
                  <option value="advanced">Advanced Strategy</option>
                  <option value="kids">Chess for Kids</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">What is the age limit for joining?</h3>
              <p className="text-gray-600">Students aged 6 years and above can join our courses.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">Do I need prior experience in chess?</h3>
              <p className="text-gray-600">No, beginners are welcome to join our introductory courses.</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">How do I pay for the course?</h3>
              <p className="text-gray-600">Payments can be made online through our secure payment gateway.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admission;
