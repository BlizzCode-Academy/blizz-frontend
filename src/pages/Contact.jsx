import React from "react";
import '../styles/contact.css';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h1>Need Help? We're Here to Assist You</h1>
        <p className="contact-sub">
          Having trouble with a course? Need technical assistance? Our support
          team is ready to help you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-left">
          <h3>Let's Get in Touch!</h3>
          <p className="neutral-500">
            Have a question or need assistance? Reach out and we'll respond as
            soon as possible.
          </p>

          <div className="contact-decor">
            <div className="decor-blob d1" />
            <div className="decor-blob d2" />
            <div className="decor-blob d3" />
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Category
            <select>
              <option>General</option>
              <option>Technical</option>
              <option>Billing</option>
              <option>Partnerships</option>
            </select>
          </label>

          <label>
            Name
            <input type="text" placeholder="Your full name" />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <label>
            Message
            <textarea placeholder="How can we help?" rows={6} />
          </label>

          <div style={{ textAlign: "right" }}>
            <button className="btn cta-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>

      <footer className="contact-footer">
        <div className="contact-footer-inner">
          <div className="logo">Blizzcode Logo</div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Programs</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
