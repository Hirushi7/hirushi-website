import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Eclipse from "../components/Eclipse";
import "./Home.css"; 
import sectionBg from "./section1.png";
import journey1 from "../assets/journey1.jpeg";
import journey2 from "../assets/journey2.jpeg";
import journey3 from "../assets/journey3.png";
import journey4 from "../assets/journey4.png";
import sectionBg1 from "./section2.png";
import Journey from '../components/Journey';
import SplitFeatures from "../components/Skills";
import Experience from "../components/Experience";
import Sections from "../components/Sections";
import Ex from "../components/Ex";
import Footer from "../components/Footer";


// Import AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // animation speed + run once
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [journey1, journey2, journey3, journey4];
   useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  

  return (
    <>
      <Navbar />
      <Hero />
      <Eclipse />
      <Gallery />

      <section 
  id="section1"
  className="art-section"
  style={{ 
    background: "linear-gradient(135deg, #525252, #0b0b0a)", 
    backgroundSize: "cover", 
    backgroundPosition: "center" 
  }}
>
  <div className="art-left" data-aos="fade-down">
    <h2>ABOUT ME</h2>

    {/* Profile image directly below heading */}
    <div className="profile-image">
      <img src={require("../assets/myphoto.jpeg")} alt="Hirushi Dharmasiri" />
    </div>

    <p>"you look around, you find ART"</p>
  </div>

  <div className="art-right" data-aos="fade-up">
    <h3>Hirushi Dharmasiri</h3>
    <p>
      Artist | Graphic Designer | Tech Enthusiast | Founder of Arts by Hirushi<br /><br/>
      Hirushi Dharmasiri is a passionate visual artist and graphic designer based in Sri Lanka. 
      Her creative journey is rooted in emotional expression, the natural world and the beauty of the human experience. 
      She specializes in portraiture, landscapes, figurative paintings and digital art, blending both traditional and digital mediums to craft unique visual stories.
      <br /><br />
      Currently, her work explores themes inspired by life experiences and nature, using color, texture and movement to spark connection and reflection in her viewers. 
      Whether through expressive charcoal sketches or modern digital compositions, she seeks to capture what words often cannot. 
      In parallel with her art, Hirushi is deeply interested in the intersection of creativity and technology.
      <br /><br />
      With a strong background in math and science from her A/Ls, she has ventured into graphic design, web development and scripting tools
      building projects such as email automation systems and e-commerce features for her brand. 
      She is the creative mind behind "Arts by Hirushi", where she offers original artwork, personalized commissions, digital design services and curated merchandise 
      for a growing community of art and design lovers.
    </p>

    {/* Button moved after paragraphs */}
 <a href="/paintings" className="art-button">
  MY WORK
</a>

  </div>
</section>


      
<section 
  id="section2"
  className="journey-section"
  style={{ 
    background: "linear-gradient(135deg, #020202 0%, #232323 50%, #242424 100%)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <Journey />
</section>

<SplitFeatures />
<Ex/>
<Sections />

<Footer/>



    </>
  );
}
