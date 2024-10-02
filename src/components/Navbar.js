import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/admission">Admission</Link></li>
        <li><Link to="/achievements">Student's Achievements</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/events">Upcoming Events</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/testimonials">Testimonials</Link></li>
        <li><Link to="/dashboard">Student's Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
