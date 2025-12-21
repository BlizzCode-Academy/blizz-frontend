import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Course() {
  const [openIndex, setOpenIndex] = useState(null);

  const curriculum = [
    {
      title: "Design Fundamentals",
      body: "Master the core principles of visual design, UI and UX.",
    },
    {
      title: "User Research & Empathy",
      body: "Learn how to conduct user research and synthesize findings.",
    },
    {
      title: "Information Architecture & Interaction Design",
      body: "Structure content and design useful interactions.",
    },
    {
      title: "Wireframing & Prototyping",
      body: "Create low and high-fidelity prototypes to validate ideas.",
    },
    {
      title: "UI Design Tools & Techniques",
      body: "Hands-on with industry tools and workflows.",
    },
  ];

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <main className="course-page">
      <div className="container course-container">
        <nav className="breadcrumbs">
          <Link to="/" className="neutral-500">
            Home
          </Link>
          <span className="sep">/</span>
          <Link to="/courses/responsive-webdesign" className="neutral-500">
            Programs/ Training Programs/
          </Link>
          <span className="sep">/</span>
          <span className="neutral-700">UI/UX Design</span>
        </nav>

        <section className="course-hero">
          <div className="course-hero-left">
            <div className="hero-media">
              <img
                src="/src/assets/Images/course-hero.jpg"
                alt="course"
                className="course-hero-img"
              />
            </div>

            <div className="course-meta">
              <div className="badges">
                <span className="badge">3 months</span>
                <span className="badge muted">Begins Oct, 2024</span>
              </div>

              <h1 className="course-title">UI/UX Design</h1>

              <p className="course-intro">
                Become a highly sought-after UI/UX designer with Blizzcode
                Academy's comprehensive training program. This program equips
                you with the skills and knowledge to craft user-centric
                interfaces for websites and mobile applications.
              </p>

              <div className="course-benefits">
                <h4>What you'll get</h4>
                <ul className="benefit-list">
                  <li>
                    <span className="check">✔</span>
                    <div>
                      <strong>Career-Ready Curriculum:</strong> Gain the
                      practical skills and knowledge needed to succeed in the
                      UI/UX design industry.
                    </div>
                  </li>
                  <li>
                    <span className="check">✔</span>
                    <div>
                      <strong>Expert Instruction:</strong> Learn from
                      experienced UI/UX professionals who are passionate about
                      design education.
                    </div>
                  </li>
                  <li>
                    <span className="check">✔</span>
                    <div>
                      <strong>Project-Based Learning:</strong> Apply your skills
                      through real-world project work and build a strong design
                      portfolio.
                    </div>
                  </li>
                  <li>
                    <span className="check">✔</span>
                    <div>
                      <strong>Flexible Learning:</strong> Study at your own pace
                      with our self-paced program format.
                    </div>
                  </li>
                  <li>
                    <span className="check">✔</span>
                    <div>
                      <strong>Supportive Community:</strong> Connect with fellow
                      learners and instructors through our online community.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="course-hero-right">
            <div className="enroll-card">
              <div className="enroll-inner">
                <p className="enroll-text">
                  Enroll into this program with a small token of
                </p>
                <div className="price">#20,000</div>
                <div className="enroll-actions">
                  <button className="btn primary">Enroll Now</button>
                  <button className="btn outline">Download Brochure</button>
                </div>
              </div>
            </div>

            <div className="what-you-learn">
              <h4>What you'll learn</h4>
              <div className="accordion">
                {curriculum.map((item, i) => (
                  <div
                    className={`accordion-item ${
                      openIndex === i ? "open" : ""
                    }`}
                    key={i}
                  >
                    <button
                      className="accordion-toggle"
                      onClick={() => toggle(i)}
                    >
                      <span>{item.title}</span>
                      <span className="chev">
                        {openIndex === i ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === i && (
                      <div className="accordion-content">{item.body}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="student-testimonials">
          <h3>Student Testimonials</h3>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="quote">“</div>
              <p className="testimonial-text">
                After taking the UI/UX Design course, I landed my dream job as a
                product designer at a tech startup. The course equipped me with
                the necessary skills and portfolio to impress potential
                employers. Thank you for helping me achieve my career goals!
              </p>
              <div className="testimonial-meta">
                <div className="author">– Amaka Okafor</div>
                <div className="cohort">May 2023 Cohort</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
