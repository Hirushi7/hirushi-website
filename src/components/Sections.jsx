import React from "react";
import "./Sections.css";

export default function Sections() {
  const sections = [
    {
      title: "ART",
      kicker: "Explore it and see where I am at.",
      
      href: "/paintings",
    },
    {
      title: "CONTACT ME",
      kicker: "Let's connect.",
      
      href: "/contact",
    },

  ];

  return (
    <section className="sections-block">
      <div className="sections-container">
        {sections.map((s, idx) => (
          <div className="section-item" key={s.title}>
            <article className="section-content">
              <h2 className="headline">{s.title}</h2>
              <p className="kicker">{s.kicker}</p>
              <p className="body">{s.body}</p>
              <a className="learn-more" href={s.href} aria-label="Learn more">
                LEARN MORE →
              </a>
            </article>

            {idx < sections.length - 1 && (
              <span className="divider" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
