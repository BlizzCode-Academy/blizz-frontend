import React from "react";
import {
  FaServer,
  FaLaptopCode,
  FaBrain,
  FaPlay,
  FaChartPie,
  FaPenNib,
  FaMobileAlt,
} from "react-icons/fa";

import pathright from "./assets/Images/pathright.png";
import pathleft from "./assets/Images/pathleft.png";
import dashboard from "./assets/Images/dashboard.png";
import partners from "./assets/Images/partners.png";

function CoursesGrid() {
  return (
    <section className="courses-section">
      <div className="section1-img-wrapper">

        {/* Background Waves + Dashboard */}
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
      <img src={partners} alt="path" className="img-partners" />
      </div>

    </section>
  );
}

export default CoursesGrid;
