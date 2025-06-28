import React from 'react';
import backgroundImage from '../assets/garden.jpg';

function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
        <h1 style={styles.title}>Navodya Garden Services 🌿</h1>
        <p style={styles.subtitle}>
          We bring your garden to life with care, creativity, and passion.
        </p>
        <a href="/services" style={styles.button}>View Our Services</a>
      </section>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '90vh',
    color: '#fff',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
  },
  hero: {
    backgroundColor: 'rgba(109, 112, 109, 0.6)',
    padding: '3rem',
    borderRadius: '20px',
    maxWidth: '700px',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.3rem',
    marginBottom: '2rem',
  },
  button: {
    textDecoration: 'none',
    backgroundColor: '#A5D6A7',
    color: '#1b5e20',
    padding: '0.8rem 1.5rem',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default Home;
