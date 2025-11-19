import React, { useState } from "react";

import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">Blizzcode Logo</div>
      <div className="mobile-logo">Blizzcode </div>
      {/* HAMBURGER ICON */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      ;
      <nav className={`navbar ${isOpen ? "nav-menu active" : "nav-menu"}`}>
        <ul>
          <li>
            <a href="#home" className="neutral-500">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="neutral-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#Events" className="neutral-500">
              Events
            </a>
          </li>
          <li>
            <select className="neutral-500">
              <option>Programs</option>
              <option>Training Programs</option>
              <option>Internships</option>
            </select>
          </li>
          <li>
            <a href="#contact" className="neutral-500">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#Events" className="blizz-b-300">
              Already a Learner?
            </a>
          </li>

          {/* LOGIN BUTTON ON MOBILE */}
          <button className="btn mobile-login">
            Login <FaArrowRight />
          </button>
        </ul>
      </nav>
      <button className="btn desktop-login">
        Login <FaArrowRight style={{ marginRight: "8px" }} />
      </button>
    </header>
  );
}

export default Header;
