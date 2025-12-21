import React from "react";
import svg1 from "./assets/Images/svg1.png";
import svg2 from "./assets/Images/svg2.png";
import svg3 from "./assets/Images/svg3.png";
import svg4 from "./assets/Images/svg4.png";
import './styles/home.css';

function StudentGuide() {
  return (
    <section className="section2-container">
      <div className="section2-header"> 
      <h3 className="blizz-b-950">Personalized learning that gets results</h3>
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
            Our platform adapts to your individual needs, ensuring you progress
            at your own pace and maximize your learning potential
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
            including clear course structures, recordings, and learning trackers
          </p>
        </div>
      </div>
      <button className="section2-btn">Begin your learning journey</button>
    </section>
  );
}

export default StudentGuide;
