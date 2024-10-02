import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
  {
    question: "What is the age limit to join the Chess Academy?",
    answer: "There is no age limit to join. We welcome students of all ages and skill levels, from beginners to advanced players.",
  },
  {
    question: "Do I need prior experience in chess to join?",
    answer: "No prior experience is necessary. We offer courses for all levels, including beginners who are just learning the game.",
  },
  {
    question: "How are the classes conducted?",
    answer: "Classes are conducted both online and in-person at our academy, allowing flexibility for all students.",
  },
  {
    question: "What kind of tournaments do you organize?",
    answer: "We organize local and national level tournaments to provide practical experience to our students, helping them sharpen their skills.",
  },
  {
    question: "What is the fee structure?",
    answer: "Our fee structure varies depending on the course and duration. Please check the 'Courses' section or contact us for detailed pricing.",
  },
];

function FAQItem({ question, answer, isOpen, toggle }) {
  return (
    <div className="border-b border-gray-200 py-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggle}>
        <h3 className="text-lg font-medium text-gray-800">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </div>
      {isOpen && (
        <p className="mt-4 text-gray-600 transition-opacity duration-300 ease-in-out">
          {answer}
        </p>
      )}
    </div>
  );
}

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
        
        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            className="w-full p-3 rounded-lg border border-gray-300"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))
          ) : (
            <p className="text-gray-600">No FAQs match your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
