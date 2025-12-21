import React from "react";
import { Link } from "react-router-dom";

export default function ProgramsInternships() {
  return (
    <main className="programs-page" style={{ padding: 40 }}>
      <div className="container" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <nav className="breadcrumbs" style={{ marginBottom: 12 }}>
          <Link to="/">Home</Link>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Programs</span>
          <span style={{ margin: "0 8px" }}>/</span>
          <span>Internships</span>
        </nav>

        <h1 style={{ color: "#145990" }}>Internships</h1>
        <p style={{ color: "#374151" }}>
          Internship opportunities will be posted here when available.
        </p>

        <section style={{ marginTop: 24 }}>
          <p style={{ color: "#4b5563" }}>
            Check back soon for internship listings and application details.
          </p>
        </section>
      </div>
    </main>
  );
}
