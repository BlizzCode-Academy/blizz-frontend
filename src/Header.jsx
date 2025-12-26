import React, { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles/header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [isProgramsOpen, setIsProgramsOpen] = useState(false); // Programs dropdown

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close dropdown when clicking outside
  const handleClickOutside = () => setIsProgramsOpen(false);

  return (
    <header className="header" onMouseLeave={handleClickOutside}>
      <div className="logo">Blizzcode Logo</div>
      <div className="mobile-logo">Blizzcode</div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar ${isOpen ? "nav-menu active" : "nav-menu"}`}>
        <ul>
          <li><Link to="/" className="neutral-500">Home</Link></li>
          <li><Link to="/about" className="neutral-500">About Us</Link></li>
          <li><Link to="/event" className="neutral-500">Events</Link></li>

          {/* Programs Dropdown */}
          <li className="programs-menu">
            <div
              className="programs-label neutral-500"
              onClick={() => setIsProgramsOpen(!isProgramsOpen)}
            >
              Programs ▾
            </div>
            {isProgramsOpen && (
              <ul className="programs-dropdown">
                <li>
                  <Link
                    to="/programs/training-programs"
                    className="neutral-500"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Training Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programs/internships"
                    className="neutral-500"
                    onClick={() => setIsProgramsOpen(false)}
                  >
                    Internships
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li><Link to="/contact" className="neutral-500">Contact Us</Link></li>
          <li><a href="#Events" className="blizz-b-300">Already a Learner?</a></li>

          <button className="mobile-login">Login <FaArrowRight /></button>
        </ul>
      </nav>

      <button className="btn desktop-login">Login <FaArrowRight /></button>
    </header>
  );
}

export default Header;
