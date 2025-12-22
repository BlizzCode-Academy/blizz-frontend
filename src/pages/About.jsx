import React from "react";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.png";
import hero3 from "../assets/Images/hero3.png";
import aboutImg from "../assets/images/aboutImg.png"

import '../styles/about.css';

const team = [
  {
    name: "Edidiong Francis",
    role: "Founder, CEO",
    img: "https://via.placeholder.com/140",
  },
  {
    name: "Amina Yusuf",
    role: "Head of Curriculum",
    img: "https://via.placeholder.com/140",
  },
  {
    name: "Sam Ade",
    role: "Lead Instructor",
    img: "https://via.placeholder.com/140",
  },
  {
    name: "Rita Okeke",
    role: "Mentor",
    img: "https://via.placeholder.com/140",
  },
  {
    name: "Chike Obi",
    role: "Community Lead",
    img: "https://via.placeholder.com/140",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page-container">
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-title">Blizzcode Academy</h1>
          <p className="about-sub">
            Empowering Your Future Through Tech Education
          </p>
        </div>
        <div className="about-hero-images">
          <img
            className="circle-img img1"
            src={hero1}
            alt="student"
          />
          <img
            className="circle-img img2"
            src={hero2}
            alt="student"
          />
          <img
            className="circle-img img3"
            src={hero3}
            alt="student"
          />
          <img
            className="circle-img img4"
            src={aboutImg}
            alt="student"
          />
        </div>
      </section>

      {/* Mission */}

      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-image">
            <img src={hero1} alt="mission" />
          </div>
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to bridge the skills gap by providing a
              comprehensive and accessible learning platform for individuals
              seeking to enter or advance their careers in tech. We offer a
              diverse range of training programs and resources designed to
              empower learners of all backgrounds and experience levels.
            </p>
          </div>
        </div>
      </section>
      <section className="mission-section">
        <div className="mission-inner">
          <div className="mission-image">
            <img src={hero1} alt="mission" />
          </div>
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              Our mission is to bridge the skills gap by providing a
              comprehensive and accessible learning platform for individuals
              seeking to enter or advance their careers in tech. We offer a
              diverse range of training programs and resources designed to
              empower learners of all backgrounds and experience levels.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h3 className="values-title">Our Values</h3>
        <div className="values-grid">
          <div className="value-card value-1">
            <h4>Quality</h4>
            <p>
              We deliver well-structured programs, expert instruction, and
              up-to-date curricula.
            </p>
          </div>
          <div className="value-card value-2">
            <h4>Accessibility</h4>
            <p>
              Affordable and readily available education, removing barriers for
              aspiring learners.
            </p>
          </div>
          <div className="value-card value-3">
            <h4>Community</h4>
            <p>
              Our supportive learning environment where students can connect and
              learn from each other.
            </p>
          </div>
          <div className="value-card value-4">
            <h4>Impact</h4>
            <p>
              We focus on measurable career outcomes and meaningful impact in
              learners' lives.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Meet the Team */}
      <section className="team-section">
        <h3 className="team-title">Meet the Team</h3>
        <div className="team-list">
          {team.map((member, idx) => (
            <div className="team-member" key={idx}>
              <div className="team-avatar-wrap">
                <img
                  className="team-avatar"
                  src={member.img}
                  alt={member.name}
                />
              </div>
              <div className="team-meta">
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Connect / CTA banner */}
       <section className="connect-section">
        <div className="connect-content">
          <h3>Connect, Collaborate, and Thrive</h3>
          <p>
            Network, learn from mentors, and stay motivated with our thriving community.
          </p>
          <button>View Events</button>
        </div>

      </section>
    </main>
  );
}
