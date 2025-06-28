import React from 'react';
import './Services.css';

function Services() {
  return (
    <section className="services" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Garden Design</h3>
          <p>Creative and customized garden layouts that bring life and harmony to your outdoor space.</p>
        </div>
        <div className="service-card">
          <h3>Garden Maintenance</h3>
          <p>Regular pruning, cleaning, pest control, and plant care to keep your garden vibrant and healthy.</p>
        </div>
        <div className="service-card">
          <h3>Interlock Paving</h3>
          <p>Durable and stylish interlock paving for driveways, paths, patios, and landscaping.</p>
        </div>
        <div className="service-card">
          <h3>Australian & Malaysian Carpet Grass</h3>
          <p>Supply and installation of premium quality grass for a smooth, green, and luxurious lawn.</p>
        </div>
        <div className="service-card">
          <h3>Lawn Setup & Planting</h3>
          <p>Professional lawn layout and tree/flower planting services to enhance beauty and greenery.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
