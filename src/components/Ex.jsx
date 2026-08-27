import React from "react";
import { motion } from "framer-motion";
import "./Ex.css";
import { Link } from "react-router-dom";


export default function Ex({ ctaHref, title = "EXPERIENCE" }) {
  const link = ctaHref ?? "#";

  return (
    <section id="demo" className="ex-section" aria-labelledby="ex-heading">
      {/* Background gradient fills entire section */}
      <div className="ex-gradient"></div>

      {/* Right: text and CTA */}
      <div className="ex-right">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="ex-subtitle"
        >
          MY
        </motion.p>

        <motion.h1
          id="ex-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="ex-title"
        >
          {title}
        </motion.h1>

        <Link to="/experience1" className="ex-button">
  VIEW MORE
  <svg className="ex-icon" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 12h12m0 0-5-5m5 5-5 5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</Link>
      </div>
    </section>
  );
}
