import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <section className="about-section" id="about">
      <h1 className="about-heading">About Us</h1>
      <p className="about-text">
        <strong>Navodya Interlock & Landscaping</strong> has proudly served Sri Lanka for over <strong>15 years</strong>, 
        delivering exceptional craftsmanship in interlocking paving and innovative landscaping solutions. 
        Our expert team is dedicated to enhancing outdoor spaces with durability, beauty, and functionality in mind.
        <br /><br />
        Whether you're looking to upgrade your garden, driveway, or commercial property, we bring creativity, 
        precision, and a passion for perfection to every project. Let us help you create the outdoor environment you’ve always envisioned.
      </p>
    </section>
  );
}

export default About;
