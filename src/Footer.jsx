import React from "react";
import { FaLinkedin, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <strong>Blizzcode Academy</strong>
          <div className="neutral-500">Learn. Build. Launch.</div>
        </div>
        <div className="footer-links">
          <a href="#">Courses</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-social">
          <FaLinkedin />
          <FaTwitter />
          <FaYoutube />
          <FaGithub />
        </div>
      </div>

      <div className="footer-bottom">
        <div>© {new Date().getFullYear()} Blizzcode Academy</div>
        <div className="neutral-500">Terms · Privacy</div>
      </div>
    </footer>
  );
}

export default Footer;
