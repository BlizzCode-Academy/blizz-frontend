// src/components/EventHero.jsx
import React from "react";
import "../styles/event.css";

export default function EventHero({ title, subtitle }) {
  return (
    <section className="events-hero">
      <div className="events-hero-inner">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
