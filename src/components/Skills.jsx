import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";  // <-- new stylesheet

const features = [
  { title: "Industry Knowledge", intro: "• User Interface Design | Creative Writing | Proposal Writing | Project Management | Cybersecurity | Literature | Information Technology | Art | Graphic Design | Web Development | Web Design " },
  { title: "Tools & Technologies", intro: "• React | node.js | Figma(software) | Adobe Illustrator | Adobe Photoshop | HTML | Cascading Style Sheets(CSS) | Microsoft Excel | Microsoft Powerpoint | Python(Programming Language) | SQL | JavaScript " },
  { title: "Interpersonal Skills", intro: "• Team Leadership | Public Speaking" },
  { title: "Languages", intro: "• Sinhalese | English | Tamil " },
  
];

export default function SplitFeatures() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const left = features.slice(0, 2);
  const right = features.slice(2);

  const renderColumn = (items, offset = 0) =>
    items.map((item, idx) => {
      const index = idx + offset;
      const isActive = index === activeIndex;

      return (
        <div key={index} className="feature-wrapper" data-aos="fade-up" data-aos-delay={index * 100}>
          <div className={`feature-card ${isActive ? "active" : ""}`}>
            <button className="feature-button" onClick={() => toggle(index)}>
              <span className={`arrow ${isActive ? "rotated" : ""}`}>›</span>
              <span className="title">{item.title}</span>
            </button>
            <div className={`feature-intro ${isActive ? "show" : ""}`}>
              {item.intro}
            </div>
          </div>
        </div>
      );
    });


return (
  <section className="split-features" id="section3">
    <div className="column">{renderColumn(left)}</div>

    <div className="heading desktop">
      <h2>DEVELOPED <br /> SKILLS</h2>
    </div>

    <div className="heading mobile">
      <h2>SKILLS</h2>
    </div>

    <div className="column">{renderColumn(right, 4)}</div>

    <div className="bottom-gradient"></div>
  </section>
);

}
