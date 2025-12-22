import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaSlack,
} from "react-icons/fa";
import "./styles/footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <p className="footer-logo">Blizzcode Logo</p>
      
          <div className="footer-social">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedin />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter />
  </a>
  <a href="https://slack.com" target="_blank" rel="noopener noreferrer">
    <FaSlack />
  </a>
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </a>
</div>

        <button className="footer-btn">Join Community</button>
        </div>
        <div className="footer-links">
        <p>Quick Links</p>
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-links">
        <p>Community</p>
          <a href="#">Volunteer</a>
          <a href="#">Partners</a>
          <a href="#">Programs</a>
          <a href="#">Blog</a>
        </div>
        
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Blizzcode Academy. All rights reserved.</p>
       
      </div>

      
    </footer>
  );
}

export default Footer;
