import React, { useState } from "react";

import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import './styles/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">Blizzcode Logo</div>
      <div className="mobile-logo">Blizzcode</div>

      {/* HAMBURGER ICON */}
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`navbar ${isOpen ? "nav-menu active" : "nav-menu"}`}>
        <ul>
          <li>
            <Link to="/" className="neutral-500">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="neutral-500">
              About Us
            </Link>
          </li>

          <li>
            <Link to="/events/responsive-webdesign" className="neutral-500">
              Events
            </Link>
          </li>

          <li className="programs-menu">
            <div className="programs-label neutral-500">Programs ▾</div>
            <ul className="programs-dropdown">
              <li>
                <Link to="/programs/training-programs" className="neutral-500">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/programs/internships" className="neutral-500">
                  Internships
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact" className="neutral-500">
              Contact Us
            </Link>
          </li>

          <li>
            <a href="#Events" className="blizz-b-300">
              Already a Learner?
            </a>
          </li>

          {/* LOGIN BUTTON ON MOBILE */}
          <button className=" mobile-login">
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
