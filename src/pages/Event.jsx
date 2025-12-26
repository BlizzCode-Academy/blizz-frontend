
import React from "react";
import EventHero from "../pages/EventHero";
import EventIntro from "../pages/EventIntro";
import  eventImg1 from "../assets/Images/eventImg1.png";
import eventImg2 from "../assets/Images/eventImg2.png";
import eventImg3 from "../assets/Images/eventImg3.png";


import "../styles/event.css";

export default function Event() {
  const upcomingEvents = [
    {
      title: "Workshop: Building a Responsive Web Design",
      date: "Tuesday, August 18th",
      time: "12:00 PM WAT",
      img: eventImg3,
    },
    {
      title: "Workshop: Introduction to Data Structures and Algorithms in Python",
      date: "Wednesday, July 24th",
      time: "10:00 AM WAT",
      img: eventImg1,
    },
    {
      title: "Webinar: Introduction to Cybersecurity",
      date: "Thursday, May 30th",
      time: "1:00 PM WAT",
      img: eventImg2,
    },
  ];

  return (
    <main className="events-page">
      <EventHero />
      <EventIntro />

      {/* Upcoming Events */}
      <section className="events-section">
        <h3 className="section-title">Our Upcoming Events</h3>

        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-image">
                <img src={event.img} alt={event.title} />
              </div>

              <div className="event-content">
                <h4>{event.title}</h4>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="events-section">
        <h3 className="section-title">Our Past Events</h3>

        <div className="events-grid">
          {upcomingEvents.map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-image">
                <img src={event.img} alt={event.title} />
              </div>

              <div className="event-content">
                <h4>{event.title}</h4>
                <p className="event-date">{event.date}</p>
                <p className="event-time">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
