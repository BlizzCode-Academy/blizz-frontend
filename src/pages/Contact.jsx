import React from "react";
import "../styles/contact.css";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <h3>Need Help? We're Here to Assist You</h3>
        <p className="contact-sub">
          Having trouble with a course? Need technical assistance? Our support
          team is ready to help you.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-left">
          <h3>Let's Get in <span>Touch!</span></h3>
          <p>
            Have a question or need assistance? Reach out to us via email,
            phone, or by filling the contact form . We're eager to assist you.
          </p>
          <p>Nice hearing from you!</p>
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

          <div>
            <button className="btn cta-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
