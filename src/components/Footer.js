import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">About Chess Academy</h4>
            <p className="text-gray-400">
              The Chess Academy is dedicated to providing students with the highest level of chess education, fostering strategic thinking and a passion for the game.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="/courses" className="text-gray-400 hover:text-white">Courses</a></li>
              <li><a href="/admission" className="text-gray-400 hover:text-white">Admission</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">123 Chess St, Checkmate City, CH 54321</li>
              <li className="text-gray-400">Email: info@chessacademy.com</li>
              <li className="text-gray-400">Phone: +123 456 7890</li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom: Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2024 Chess Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
