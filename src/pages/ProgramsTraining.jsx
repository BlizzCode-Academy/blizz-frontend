import React from "react";
import { Link } from "react-router-dom";

export default function ProgramsTraining() {
  return (
    <main className="programs-page" style={{ padding: 40 }}>
      <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <nav className="breadcrumbs" style={{ marginBottom: 12 }}>
          <Link to="/">Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Programs</span>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Training Programs</span>
        </nav>

        <h1 style={{ color: "#145990" }}>Training Programs</h1>
        <p style={{ color: "#374151" }}>
          Explore our available training programs.
        </p>

        <section style={{ marginTop: 24 }}>
          <div
            className="course-card"
            style={{ display: "flex", gap: 16, padding: 20 }}
          >
            <div style={{ flex: 1 }}>
              <h3 className="course-title">UI/UX Design</h3>
              <p className="course-desc">
                A comprehensive UI/UX program to help you design and prototype.
              </p>
              <div className="course-meta-row">
                <span className="badge">3 months</span>
                <span className="duration">Begins Oct, 2024</span>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Link
                to="/courses/responsive-webdesign"
                className="btn blizz-b-400"
              >
                View Course
              </Link>
              <button className="explore-courses">Register</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
