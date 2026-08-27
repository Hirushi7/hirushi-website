import React, { useState } from "react";
import "./Experience1.css";
import Navbar from "../components/Navbar";

// ✅ Import images
import experience2 from "../assets/experience4.jpeg";
import experience4 from "../assets/experiencee4.jpg";
import experience10 from "../assets/experience10.jpeg";
import experience11 from "../assets/experience11.jpeg";
import experience8 from "../assets/experience8.jpeg";
import experience7 from "../assets/experience7.jpeg";
import experience9 from "../assets/experience9.jpeg";
import experience6 from "../assets/experience6.jpeg";
import experiencee1 from "../assets/experiencee1.jpeg";
import experience3 from "../assets/experience3.png";
import experience5 from "../assets/experience5.jpeg";

// ✅ Import background video
import bgVideo from "../assets/experience1.mp4"; // place your video file in src/assets
import Footer from "../components/Footer";

const experiences = [
  { title: "Internship at Victory Information", description: "Worked as an UI/UX Designing and software engineering Intern. (2025)", category: "career", image: experiencee1 },
  { title: "KDU Toastmastpers", description: "Started my Toastmasters journey from KDU Toastmasters club in 2026.", category: "toastmasters", image: experience2 },
  { title: "Arts by Hirushi", description: "Started my own business 'Arts by Hirushi' in 2021.", category: "art", image: experience3 },
  { title: "at Holy Family Convent Bambalapitiya", description: "Got engaged in both academic and extra curricular activities.", category: "academic", image: experience4,   details: [
      "President of the AOD (Academy of Design), Science Union and Familian Outreach in 2024.",
      "Vice President of the Teen Art Club in 2024. ",
      "Secretary of the Sinhala Union in 2024.",
      "Awarded as the 'Artist of the Year' in 2018."
    ]},
  { title: "Impression' 23", description: "Participated in 'Impressions' at Holy Family Convent Bambalapitiya in 2023.", category: "art", image: experience5 },
  { title: "Impression' 25", description: "Participated in 'Impressions' at Holy Family Convent Bambalapitiya in 2025.", category: "art", image: experience6 },
  { title: "Kalapola'26", description: "Had my first ever stall at Kalapola in 2026.", category: "art", image: experience7 },
  { title: "Art Exhibition at Lionel Vendt", description: "Displayed my Art pieces at Lionel Vendt Art Gallery in 2026.", category: "art", image: experience8 },
  { title: "Warna'26", description: "Participated in 'Warna' at General Sir John Kotelawala Defence University in 2026.", category: "art", image: experience9 },
  { title: "Grapich Designing FreeLancer", description: "Since 2021.", category: "career", image: experience10 },
  { title: "Automated Fish Tank", description: "University First Year Hardware Project (2026).", category: "projects", image: experience11 },


];

const categories = ["all", "career", "art", "academic", "toastmasters","projects"];

export default function Experience() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredExperiences =
    selectedCategory === "all"
      ? experiences
      : experiences.filter((exp) => exp.category === selectedCategory);

  return (
    <div className="experience-page ">
      <Navbar />

      {/* ✅ Video background heading */}
      <div className="experience-hero">
        <video className="hero-video" autoPlay muted loop>
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay">
          <h2 className="experience-heading">My Experience</h2>
        </div>
      </div>

      {/* ✅ Category nav bar */}
      <nav className="experience-nav">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`nav-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* ✅ Experience grid */}
      <div className="experience-grid">
        {filteredExperiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="experience-image">
              <img src={exp.image} alt={exp.title} />
            </div>
            <div className="experience-content">
  <h3>{exp.title}</h3>
  <p>{exp.description}</p>
  <ul>
    {exp.details && exp.details.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
</div>

          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
}
