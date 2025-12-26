import React from "react";
import "../styles/event.css";

export default function EventIntroCards() {
  return (
    <section className="events-benefits">
      <p className="events-intro">
        We offer a variety of workshops, webinars, and meetups designed to help you:
      </p>

      <div className="benefits-grid">
        <div className="benefit-card green">
          <h3>Master in-demand skills</h3>
          <p>Learn from industry experts in various fields</p>
        </div>

        <div className="benefit-card blue">
          <h3>Gain practical experience</h3>
          <p>Apply your knowledge to real-world projects</p>
        </div>

        <div className="benefit-card yellow">
          <h3>Advance your career</h3>
          <p>Become a valuable asset to potential employers</p>
        </div>
      </div>
    </section>
  );
}
