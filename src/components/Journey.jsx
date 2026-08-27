// src/components/Journey.jsx
import React, { useEffect } from "react";
import "./Journey.css";

const journeySteps = [
  {
    number: "at",
    title: "Holy Family Convent- Bambalapitiya ",
    description: "(2011- 2024)",
    detail:"Schooling"
  },
  {
    number: "at",
    title: "University of Kelaniya",
    description: "2022",
    detail: "Graphic Designing Course"
  },
  {
    number: "at",
    title: "Informatics Institute of Technology (IIT)",
    description: "2025",
    detail: "Information Techonology Course"
  },
  {
    number: "at",
    title: "British Council",
    description: "2025",
    detail: "Completed 60 credits"
  },
   {
    number: "at",
    title: "General Sir John Kotelawala Defence University",
    description: "2026- Present",
    detail: "BSc (Hons) in Software Engineering"
  }
];

function Journey() {
  useEffect(() => {
    const cards = document.querySelectorAll(".journey-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // add staggered delay
            entry.target.style.animationDelay = `${i * 200}ms`;
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <section className="journey-section" id="section2">
      <h2 className="journey-heading">My Journey</h2>
      <div className="journey-container">
        {journeySteps.map((step, index) => (
          <div key={index} className="journey-card">
            <div className="journey-number">{step.number}</div>
            <h3 className="journey-title">{step.title}</h3>
            <p className="journey-description">{step.description}</p>

            {/* Hidden detail box */}
            <div className="journey-detail">{step.detail}</div>

            {index < journeySteps.length - 1 && <div className="connector-line" />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Journey;
