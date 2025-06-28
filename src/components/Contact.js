
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">We’d love to hear from you!</p>
        
        <div className="contact-info">
          <div className="contact-card">
            <i className="fas fa-phone-alt"></i>
            <p><strong>Phone</strong><br /> <a href="tel:+94771234567">+94 77 200 0024</a></p>
          </div>
          <div className="contact-card">
            <i className="fas fa-envelope"></i>
            <p><strong>Email</strong><br /> <a href="mailto:info@navodyagarden.lk">ranjithkumara0468@gmail.com</a></p>
          </div>
          <div className="contact-card">
            <i className="fas fa-map-marker-alt"></i>
            <p><strong>Location</strong><br /> Kandy, Sri Lanka</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
