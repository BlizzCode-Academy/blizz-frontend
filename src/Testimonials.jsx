import React from "react";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h3 className="blizz-b-950">See What Learners Are Saying</h3>

      <div className="testimonial-card">
        <blockquote>
          “Joining Blizzcode was a turning point for my career — I built real
          projects, got mentorship, and landed a role I’m proud of. The
          instructors were supportive and the community kept me motivated.”
        </blockquote>
        <div className="testimonial-author">
          <div className="avatar" />
          <div className="author-info">
            <strong>Jane Doe</strong>
            <div className="neutral-500">Frontend Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
