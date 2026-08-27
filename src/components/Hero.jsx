import React from "react";
import eye from "../assets/eye.png";
import eye2 from "../assets/eye2.png";
import "./Hero.css"; 

export default function Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-content">
        <h1 className="name">
          <span className="hir">HIR</span>
          <span className="ushi">USHI</span>
        </h1>
       
        <h1 className="name-right">DHARMASIRI</h1>
        <img src={eye2} alt="Eye Graphic" className="eye" />
      </div>
      {/* Curve element at the bottom */}
      <div className="curve"></div>


    </section>
    
    </>
  );
}
