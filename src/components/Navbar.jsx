import React, { useState } from "react";
import "./Navbar.css"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        {/* Hamburger toggle button (only visible on mobile) */}
        <button 
          className="menu-toggle" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Navigation links */}
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li><a href="/">Home</a></li>
          <li><a href="/paintings">Paintings</a></li>
          <li><a href="/experience1">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
