import React, { useEffect } from "react";
import eyeball1 from "../assets/eyeball1.png";
import eyeball2 from "../assets/eyeball2.png";
import eyeball3 from "../assets/eyeball3.png";
import eyeball4 from "../assets/eyeball4.png";
import "./Gallery.css"; 

export default function Gallery() {
  useEffect(() => {
    const items = document.querySelectorAll(".gallery-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target.querySelector("img");
            const caption = entry.target.querySelector("p");
            img.classList.add("slide-in-active");
            caption.classList.add("fade-in-active");
            observer.unobserve(entry.target); // animate once per item
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );
    

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section className="gallery">
      <div className="gallery-item">
      <a
  href="#section1"
  onClick={() => {
    const section = document.getElementById("section1");
    if (section) {
      section.classList.add("animate-section");
      setTimeout(() => section.classList.remove("animate-section"), 1200);
    }
  }}
>
  <img src={eyeball1} alt="My journey graphic" className="slide-in" />
  <p className="fade-in">ABOUT ME</p>
</a>

      </div>
      <div className="gallery-item">
        <a
  href="#section2"
  onClick={(e) => {
    e.preventDefault(); // prevent default jump
    const section = document.getElementById("section2");
    if (section) {
      section.classList.add("animate-section");
      section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
      setTimeout(() => section.classList.remove("animate-section"), 1200); // remove after animation
    }
  }}
>
  <img src={eyeball2} alt="Design and tech interests graphic" className="slide-in" />
  <p className="fade-in">MY JOURNEY</p>
</a>

      </div>
      <div className="gallery-item">
        <a
  href="#section3"
  onClick={(e) => {
    e.preventDefault(); // stop default jump
    const section = document.getElementById("section3");
    if (section) {
      section.classList.add("animate-section");
      section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
      setTimeout(() => section.classList.remove("animate-section"), 1200); // remove after animation
    }
  }}
>
  <img src={eyeball3} alt="Experience graphic" className="slide-in" />
  <p className="fade-in">SKILLS</p>
</a>

      </div>
      <div className="gallery-item">
        <a
  href="#demo"
  onClick={(e) => {
    e.preventDefault(); // stop default jump
    const section = document.getElementById("section3");
    if (section) {
      section.classList.add("animate-section");
      section.scrollIntoView({ behavior: "smooth" }); // smooth scroll
      setTimeout(() => section.classList.remove("animate-section"), 1200); // remove after animation
    }
  }}
>
          <img src={eyeball4} alt="Work with me graphic" className="slide-in" />
          <p className="fade-in">EXPERIENCE</p>
        </a>
      </div>
    </section>
  );
}
