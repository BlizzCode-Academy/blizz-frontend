import React from "react";
import EventHero from "../pages/EventHero";
import EventIntro from "../pages/EventIntro";
import ConnectComponent from "../pages/connectComponent";

import trainingProImg from "../assets/Images/trainingProImg.png";


import "../styles/trainingPrograms.css"; 

export default function ProgramsTraining() {
  const trainingPrograms = [
    {
      id: 1,
      title: "Frontend Web Development",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Bring websites and applications to life with interactive coding.",
      img: trainingProImg,
    },
    {
      id: 2,
      title: "UI/UX Design",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Craft user-centric web and mobile interfaces.",
      img: trainingProImg,
    },
    {
      id: 3,
      title: "Backend Web Development",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Build the powerful foundation that drives websites and applications.",
      img: trainingProImg,
    },
    {
      id: 4,
      title: "Mobile Development",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Become an expert in creating functional mobile applications.",
     img: trainingProImg,
    },
    {
      id: 5,
      title: "Data Analysis",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Transform data into actionable insights and informed decisions.",
      img: trainingProImg,
    },
    {
      id: 6,
      title: "Graphic Design",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Develop visually compelling graphics that communicate and captivate audiences.",
     img: trainingProImg,
    },
     {
      id: 7,
      title: "Frontend Web Development",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Bring websites and applications to life with interactive coding.",
      img: trainingProImg,
    },
    {
      id: 8,
      title: "UI/UX Design",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Craft user-centric web and mobile interfaces.",
      img: trainingProImg,
    },
    {
      id: 9,
      title: "Backend Web Development",
      level: "Beginner",
      duration: "3 Months",
      price: "₦120,000",
      description: "Build the powerful foundation that drives websites and applications.",
      img: trainingProImg,
    },
  ];

  return (
    <div className="training-programs-page">
      {/* Hero Section */}
      <EventHero
  title="Empower Your Future with Our Training Programs"
  subtitle="Blizzcode Academy offers a comprehensive selection of training programs designed to help you thrive in today’s job market."
/>

      {/* Intro Cards Section */}
      <EventIntro />

      {/* Training Programs Grid */}
      <section className="programs-section">
        <div className="programs-header">
          <h2>Our Training Programs</h2>
          <div className="search-bar">
            <input type="text" placeholder="Search programs..." />
            <button>🔍</button>
          </div>
        </div>

        <div className="programs-grid">
          {trainingPrograms.map((program) => (
            <div key={program.id} className="program-card">
              <img src={program.img} alt={program.title} />
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <div className="program-info">
                <span>{program.level}</span>
                <span>{program.duration}</span>
              </div>
              <div className="program-price">{program.price}</div>
            </div>
          ))}
        </div>
      </section>
      <ConnectComponent/>
    </div>
  );
}
