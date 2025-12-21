import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

function FAQ() {
  const faqs = [
    {
      q: "What is Blizzcode Academy?",
      a: "Blizzcode Academy is a learning platform focused on practical skills and mentorship to help learners launch tech careers.",
    },
    {
      q: "Is Blizzcode Academy free?",
      a: "We offer both free and paid programs. Check each course for pricing and scholarship opportunities.",
    },
    {
      q: "Do I need any prior experience to enroll in your courses?",
      a: "We offer courses for all experience levels, from beginner to advanced. Browse our course catalog to find the right fit for your current skills and goals.",
    },
    {
      q: "How does mentorship work?",
      a: "Learners are paired with mentors who provide guidance on projects, code reviews, and career advice.",
    },
  ];

  const tags = [
    "General",
    "Registration/Learning",
    "Courses",
    "Community/Support",
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section faq-grid">
      <div className="faq-left">
        <h3 className="blizz-b-950">Blizzcode Academy FAQs</h3>
        <p className="neutral-500">
          Here are some frequently asked questions (FAQs) and answers for
          Blizzcode Academy
        </p>

        <button className="btn have-questions">Have other Questions? ➜</button>
      </div>

      <div className="faq-right">
        <div className="faq-tags">
          {tags.map((t) => (
            <button key={t} className="tag-pill-filter">
              {t}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              key={i}
            >
              <div className="faq-row">
                <div className="faq-question-text">{f.q}</div>
                <button
                  className={`faq-toggle-btn ${openIndex === i ? "open" : ""}`}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <FaChevronDown />
                </button>
              </div>
              {openIndex === i && <div className="faq-answer">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
