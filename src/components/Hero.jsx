import React from 'react';
import './Hero.css';
import logoImg from '../assets/logo.jpg';  // your logo image path
import gardenBg from '../assets/garden.jpg'; // your background image path

function Hero() {
  return (
    <>
      <nav className="navbar">
        <div className="brand">
          <div className="logo">
            <img src={logoImg} alt="Navodya Logo" className="logo-img" />
            Navodya Garden Services & Interlock
          </div>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-btn">Home</a>
<a href="#services" className="nav-btn">Services</a>
<a href="#about" className="nav-btn">About</a>
<a href="#contact" className="nav-btn">Contact</a>

        </div>
      </nav>

      <section
        className="hero" id="home"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 80, 0, 0.15), rgba(0, 80, 0, 0.15)), url(${gardenBg})`,
        }}
      >
        <div className="hero-content">
          <h1>Navodya Garden Services & Interlock</h1>
          <p>Transforming outdoor spaces with creativity, care, and quality interlock solutions.</p>
          <button className="hero-btn">Explore Our Services</button>
        </div>
      </section>
    </>
  );
}

export default Hero;
