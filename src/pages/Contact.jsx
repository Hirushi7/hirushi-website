import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_rae69rg",     // from EmailJS dashboard
      "template_mha5eca",    // from EmailJS dashboard
      formData,
      "CZLdKur2TAVsrsUAV"      // from EmailJS dashboard
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      alert("Error sending message. Please try again.");
    });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <section className="contact-hero">
        <h1 className="heading-animated">Contact Me</h1>
      </section>

      <section className="contact-section">
        <div className="contact-info">
          <div><FaMapMarkerAlt /> 274A, Galedanda, Gonawala, Kelaniya, Sri Lanka</div>
          <div><FaEnvelope /> hirushind7@gmail.com</div>
          <div><FaPhone /> +94 753936937</div>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /> LinkedIn
            </a>
            <a href="https://www.instagram.com/artsby_hirushi/">
              <FaInstagram /> Instagram
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
            <button type="submit" className="send-btn">Send</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
