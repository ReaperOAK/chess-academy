import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted: ", formData);
    // Reset the form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-24 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you! Reach out to us anytime.</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 border rounded" 
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  className="w-full p-3 border rounded" 
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea 
                name="message" 
                id="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows="5" 
                className="w-full p-3 border rounded" 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Contact Information</h2>
          <p className="text-lg mb-2">Phone: <a href="tel:+1234567890" className="text-blue-600">+1 234 567 890</a></p>
          <p className="text-lg mb-2">Email: <a href="mailto:info@chessacademy.com" className="text-blue-600">info@chessacademy.com</a></p>
          <p className="text-lg mb-2">Address: 123 Chess Lane, Kolkata, India</p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Find Us Here</h2>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Map"
              className="w-full h-60"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3156035.1539932667!2d88.1638737223712!3d22.56945719313841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027b98c89e5c75%3A0xf59bd00b4de19334!2sKolkata%2C%20India!5e0!3m2!1sen!2sus!4v1624472688601!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <a href="https://facebook.com" className="text-blue-600 hover:text-blue-500">
              <FaFacebook/>
            </a>
            <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">
              <FaTwitter/>
            </a>
            <a href="https://instagram.com" className="text-pink-600 hover:text-pink-500">
              <FaInstagram/>
            </a>
            <a href="https://linkedin.com" className="text-blue-800 hover:text-blue-700">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
