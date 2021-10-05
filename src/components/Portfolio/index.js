// == Import
import React from 'react';
import Projects from 'src/components/Projects';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import './styles.scss';

// == Composant
export default function Portfolio() {
  return (
  <div className="portfolio">
    <h1>Portfolio</h1>
    <Presentation />
    <Projects />
    <Contact />
  </div>

  )
};


