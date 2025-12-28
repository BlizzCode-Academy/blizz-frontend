import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function ConnectComponent() {
  return (
    <section className="connect-section">
      <div className="connect-content">
        <h3>Connect, Collaborate, and Thrive</h3>
        <p>
          Network, learn from mentors, and stay motivated with our thriving community.
        </p>

        <Link to="/event" className="connect-btn">
          View More Events
        </Link>
      </div>
    </section>
  );
}
