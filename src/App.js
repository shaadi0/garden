import React from 'react';
import './App.css';

import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  return (
    <div>
      
      <Hero />
      <Services/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
