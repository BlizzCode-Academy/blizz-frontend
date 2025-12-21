import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Courses() {
  const courses = [
    {
      title: "UI/UX Design",
      desc: "Craft user-centric interfaces for web and mobile applications.",
      badge: "Beginner",
      duration: "3 Months",
      img: "https://via.placeholder.com/120x84.png?text=UI+Design",
    },
    {
      title: "Frontend Web Development",
      desc: "Build responsive interfaces with HTML, CSS, JavaScript and React.",
      badge: "Intermediate",
      duration: "4 Months",
      img: "https://via.placeholder.com/120x84.png?text=Frontend",
    },
    {
      title: "Backend Web Development",
      desc: "APIs, databases and server-side architecture with Node.js.",
      badge: "Intermediate",
      duration: "4 Months",
      img: "https://via.placeholder.com/120x84.png?text=Backend",
    },
  ];

  return (
    <section className="courses-list-section">
      <div className="courses-header">
        <h3 className="blizz-b-950">Our Courses</h3>
        <p className="neutral-500">
          Programs designed to help you land a job or level up your skills.
        </p>
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
              <button className="course-action" aria-label={`open ${c.title}`}>
                <FaArrowRight color="#145990" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Courses;
