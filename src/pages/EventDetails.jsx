import React from "react";
import { useParams } from "react-router-dom";
import "../styles/eventDetails.css";
import eventImg3 from "../assets/Images/eventImg3.png";
import team1 from "../assets/Images/team1.png";
import team2 from "../assets/Images/team2.png";
import team3 from "../assets/Images/team3.png";
import team4 from "../assets/Images/team4.png";
export default function EventDetails() {
  const { slug } = useParams();

  return (
    <main className="event-details-page">
      <div className="breadcrumb">
        Events / Upcoming Events / <span>Responsive Web Design</span>
      </div>

      <section className="event-details-hero">
        <div className="event-details-text">
          <h1>Workshop: Building a Responsive Web Design</h1>

          <div className="event-meta">
            <span className="tag">6 Weeks</span>
            <span>Begins Aug, 2024</span>
          </div>

          <p>
            Take your web development skills to the next level by learning how
            to create websites that adapt to any screen size in the interactive
            workshop.
          </p>

          <p>
            This program equips you with the skills and knowledge to craft
            user-centric interfaces for websites and mobile applications.
          </p>

          <button className="register-btn">Register Now →</button>
        </div>

        <div className="event-details-image">
          <img src={eventImg3} alt="Responsive Web Design" />
        </div>
      </section>

      {/* Instructors */}
      <section className="instructors-section">
        <h3>Instructors</h3>

        <div className="instructors">
          <div className="instructor-card">
            <img src={team1} alt="Instructor" />
            <p>Marcus Thompson</p>
          </div>

          <div className="instructor-card">
            <img src={team3} alt="Instructor" />
            <p>Beatrice Agyemang</p>
          </div>
        </div>
      </section>

      {/* What you'll learn + Partners */}
<section className="event-learning-section">
  <div className="learning-grid">
    
    {/* Left: What you'll learn */}
    <div className="learning-content">
      <h3>What you’ll learn</h3>

      <div className="learning-item active">
        <div className="learning-header">
          <h4>Design Fundamentals</h4>
          <span className="toggle-icon">⌃</span>
        </div>
        <p>
          Master the core principles of visual design, user interface (UI)
          design, and user experience (UX) design.
        </p>
      </div>

      <div className="learning-item">
        <div className="learning-header">
          <h4>User Research & Empathy</h4>
          <span className="toggle-icon">⌄</span>
        </div>
      </div>

      <div className="learning-item">
        <div className="learning-header">
          <h4>Information Architecture & Interaction Design</h4>
          <span className="toggle-icon">⌄</span>
        </div>
      </div>

      <div className="learning-item">
        <div className="learning-header">
          <h4>Wireframing & Prototyping</h4>
          <span className="toggle-icon">⌄</span>
        </div>
      </div>

      <div className="learning-item">
        <div className="learning-header">
          <h4>UI Design Tools & Techniques</h4>
          <span className="toggle-icon">⌄</span>
        </div>
      </div>

      <div className="learning-item">
        <div className="learning-header">
          <h4>Design Thinking & Problem-Solving</h4>
          <span className="toggle-icon">⌄</span>
        </div>
      </div>
    </div>

    {/* Right: Partners / Sponsors */}
    <aside className="partners-section">
      <div className="partner-logo">Logoipsum</div>
      <div className="partner-logo">Logoipsum</div>
      <div className="partner-logo">Logoipsum</div>
      <div className="partner-logo">Logoipsum</div>
      <div className="partner-logo large">LOQO</div>
    </aside>

  </div>
</section>

    </main>
  );
}
