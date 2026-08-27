import React, { useState } from "react";
import { Link } from "react-router-dom";   // <-- import Link
import "./Navbar.css"; 
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <Link to="/">   {/* <-- use Link instead of <a> */}
            <img src={logo} alt="Logo" />
          </Link>
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/paintings">Paintings</Link></li>
          <li><Link to="/experience1">About Me</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
