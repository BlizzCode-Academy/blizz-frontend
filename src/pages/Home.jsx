import React, { useState } from "react";
import {
  FaArrowRight,
  FaServer,
  FaLaptopCode,
  FaBrain,
  FaPlay,
  FaChartPie,
  FaPenNib,
  FaMobileAlt,
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
} from "react-icons/fa";

import hero1 from "../assets/Images/hero1.png";
import hero2 from "../assets/Images/hero2.png";
import hero3 from "../assets/Images/hero3.png";

import pathright from "../assets/Images/pathright.png";
import pathleft from "../assets/Images/pathleft.png";
import dashboard from "../assets/Images/dashboard.png";
import partners from "../assets/Images/partners.png";

import svg1 from "../assets/Images/svg1.png";
import svg2 from "../assets/Images/svg2.png";
import svg3 from "../assets/Images/svg3.png";
import svg4 from "../assets/Images/svg4.png";
import courseImg from "../assets/Images/courseImg.png";
import homeG from "../assets/Images/homeG.png"
import "../styles/home.css";

function Home() {
  const courses = [
    {
      title: "UI/UX Design",
      desc: "Craft user-centric interfaces for web and mobile applications.",
      badge: "Beginner",
      duration: "3 Months",
      img: courseImg,
    },
    {
      title: "Frontend Web Development",
      desc: "Build responsive interfaces with HTML, CSS, JavaScript and React.",
      badge: "Intermediate",
      duration: "4 Months",
      img: courseImg,
    },
    {
      title: "Backend Web Development",
      desc: "APIs, databases and server-side architecture with Node.js.",
      badge: "Intermediate",
      duration: "4 Months",
     img: courseImg,
    },
    {
      title: "Mobile Development",
      desc: "Become an expert in creating engaging and functional mobile applications.",
      badge: "Beginner",
      duration: "3 Months",
      img: courseImg,
    },
     {
      title: "Data Analysis",
      desc: "Become an expert in creating engaging and functional mobile applications.",
      badge: "Beginner",
      duration: "3 Months",
      img: courseImg,
    },
     {
      title: "Graphic Design",
      desc: "Develop visually compelling graphics that communicate and captivate audiences.",
      badge: "Beginner",
      duration: "3 Months",
      img: courseImg,
    },
  ];

  const faqs = [
    {
      q: "What is Blizzcode Academy?",
      a: "Blizzcode Academy is a learning platform focused on practical skills and mentorship to help learners launch tech careers.",
    },
    {
      q: "Is Blizzcode Academy free?",
      a: "We offer both free and paid programs. Check each course for pricing and scholarship opportunities.",
    },
    {
      q: "Do I need any prior experience to enroll in your courses?",
      a: "We offer courses for all experience levels, from beginner to advanced. Browse our course catalog to find the right fit for your current skills and goals.",
    },
    {
      q: "How does mentorship work?",
      a: "Learners are paired with mentors who provide guidance on projects, code reviews, and career advice.",
    },
  ];

  const tags = [
    "General",
    "Registration/Learning",
    "Courses",
    "Community/Support",
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <img src={hero1} alt="Hero 1" className="hero-img-1" />
        <img src={hero2} alt="Hero 2" className="hero-img-2" />
        <img src={hero3} alt="Hero 3" className="hero-img-3" />

        <h1>Ignite your potential. Land your Dream Job</h1>
        <p>
          Blizzcode Academy empowers you with the skills and guidance to thrive
          in the Tech Industry
        </p>
        <div className="hero-btn">
          <button className="hero-btn-1">
            Get Started for Free <FaArrowRight style={{ marginRight: "8px" }} />
          </button>
          <button className="hero-btn-2">
            Continue Learning <FaArrowRight style={{ marginRight: "8px" }} />
          </button>
        </div>
      </section>

      {/* Section1 / Dashboard with tags */}
      <section className="courses-section">
        <div className="section1-img-wrapper">
          <img src={pathleft} alt="path" className="path-img-left" />
          <img src={dashboard} alt="dashboard" className="dashboard-img" />
          <img src={pathright} alt="path" className="path-img-right" />

          <div className="tag tag-1">
            <span className="tag-icon" style={{ backgroundColor: "#007D69" }}>
              <FaServer color="#fff" size={14} />
            </span>
            Backend Web Development
          </div>

          <div className="tag tag-2">
            <span className="tag-icon" style={{ backgroundColor: "#CBB327" }}>
              <FaLaptopCode color="#fff" size={14} />
            </span>
            Frontend Web Development
          </div>

          <div className="tag tag-3">
            <span className="tag-icon" style={{ backgroundColor: "#145990" }}>
              <FaBrain color="#fff" size={14} />
            </span>
            Artificial Intelligence
          </div>

          <div className="tag tag-4">
            <span className="tag-icon" style={{ backgroundColor: "#F9A8AF" }}>
              <FaPenNib color="#fff" size={14} />
            </span>
            Graphic Design
          </div>

          <div className="tag tag-5">
            <span className="tag-icon" style={{ backgroundColor: "#145990" }}>
              <FaChartPie color="#fff" size={14} />
            </span>
            Data Analysis
          </div>

          <div className="tag tag-6">
            <span className="tag-icon" style={{ backgroundColor: "#007D69" }}>
              <FaMobileAlt color="#fff" size={14} />
            </span>
            Mobile Development
          </div>

          <div className="tag tag-7">
            <span className="tag-icon" style={{ backgroundColor: "#CBB237" }}>
              <FaPlay color="#fff" size={14} />
            </span>
            Backend Web Development
          </div>
        </div>

        <div className="section1-partners">
          <p>Our Partners</p>
          <img src={partners} alt="partners" className="img-partners" />
        </div>
      </section>

      {/* Section2 / Cards */}
      <section className="section2-container">
        <div className="section2-header">
          <h3 className="blizz-b-950">
            Personalized learning that gets results
          </h3>
          <p>
            Empower your learning journey with our data-driven approach and
            supportive community. Here's why you should choose us:
          </p>
        </div>

        <div className="section2-cards">
          <div className="card card-1">
            <div className="card1-img">
              <img src={svg1} alt="svg1-img" className="" />
            </div>
            <h3>Vibrant Community of Learners</h3>
            <p>
              Connect and collaborate with like-minded individuals, fostering a
              sense of belonging and enriching your learning experience
            </p>
          </div>
          <div className="card card2">
            <h3>Expert Guidance & Mentorship</h3>
            <p>
              Gain direct support and motivation from experienced tutors through
              our live classes
            </p>
            <div className="card2-img">
              <img src={svg2} alt="svg2-img" />
            </div>
          </div>
          <div className="card card3">
            <h3>Personalized Learning Paths</h3>
            <p>
              Our platform adapts to your individual needs, ensuring you
              progress at your own pace and maximize your learning potential
            </p>
            <div className="card3-img">
              <img src={svg3} alt="svg3-img" />
            </div>
          </div>
          <div className="card card4">
            <img src={svg4} alt="svg4-img" />
            <h3>Structured Learning Environment</h3>
            <p>
              Access a well-organized LMS with all the resources you need,
              including clear course structures, recordings, and learning
              trackers
            </p>
          </div>
        </div>
        <button className="section2-btn">Begin your learning journey</button>
      </section>

      {/* Courses list */}
      <section className="courses-list-section">
        <div className="courses-header">
          <h3 className="blizz-b-950">Our Courses</h3>
          <p className="neutral-500">
            Empower your learning journey with our data-driven approach and
            supportive community. Here's why you should choose us:.
          </p>
          <button className="btn explore-courses">Start Learning</button>
        </div>

        <div className="courses-list">
          {courses.map((c, i) => (
            <div className="course-card" key={i}>
              <div className="course-card-left">
                <h4 className="course-title">{c.title}</h4>
                <p className="course-desc">{c.desc}</p>

                <div className="course-meta-row">
                  <span className="badge">{c.badge}</span>
                  <span className="duration">{c.duration}</span>
                </div>
              </div>

              <div className="course-card-right">
                <img className="course-thumb" src={c.img} alt={c.title} />
                <button
                  className="course-action"
                  aria-label={`open ${c.title}`}
                >
                  <FaArrowRight color="#145990" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="section2-btn">Explore more Courses</button>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h3 className="blizz-b-950">See What Learners Are Saying</h3>
        <p className="testimonial-subtitle">
          Don't just take our word for it! Here's what our students are
          achieving
        </p>

        <div className="testimonial-card">
          <blockquote>
            I came to Blizzcode with zero coding experience, and now I can
            confidently build websites thanks to the structured learning path
            and mentorship from my instructor. This course completely
            transformed my career options!
          </blockquote>
          <div className="testimonial-author">
            <div className="author-info">
              <p> -- Amaka Okafor</p>
              <span className="author-role">Frontend Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="image-gallery-section">
        <div className="gallery-header">
          <h3 className="blizz-b-950">Image Gallery</h3>
          <p className="neutral-500">
            A selection of moments captured from our community events.
          </p>
        </div>

        <div className="gallery-wrapper">
          <button className="gallery-arrow left " aria-label="prev">
            <FaChevronLeft />
          </button>
          <div className="gallery-image">
            <img
              src={homeG}
              alt="Community"
            />
          </div>
          <button className="gallery-arrow right " aria-label="next">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Connect */}
      <section className="connect-section">
        <div className="connect-content">
          <h3 className="blizz-b-950">Connect, Collaborate, and Thrive</h3>
          <p className="neutral-500">
            Meetups, team-based projects, and study cohorts — experience
            learning with the Blizz community.
          </p>
          <button className="btn explore-courses">View Events</button>
        </div>

        <div className="connect-decor">
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section faq-grid">
        <div className="faq-left">
          <h3 className="blizz-b-950">Blizzcode Academy FAQs</h3>
          <p className="neutral-500">
            Here are some frequently asked questions (FAQs) and answers for
            Blizzcode Academy
          </p>

          <button className="btn have-questions">
            Have other Questions? ➜
          </button>
        </div>

        <div className="faq-right">
          <div className="faq-tags">
            {tags.map((t) => (
              <button key={t} className="tag-pill-filter">
                {t}
              </button>
            ))}
          </div>

          <div className="faq-list">
            {faqs.map((f, i) => (
              <div
                className={`faq-item ${openIndex === i ? "open" : ""}`}
                key={i}
              >
                <div className="faq-row">
                  <div className="faq-question-text">{f.q}</div>
                  <button
                    className={`faq-toggle-btn ${
                      openIndex === i ? "open" : ""
                    }`}
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                  >
                    <FaChevronDown />
                  </button>
                </div>
                {openIndex === i && <div className="faq-answer">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
