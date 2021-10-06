// == Import
import React from 'react';
import { Link } from 'react-router-dom';
import Projects from 'src/components/Projects';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import { animateScroll as scroll } from "react-scroll";
import './styles.scss';

// == Composant
export default function Portfolio() {
  return (
  <div className="portfolio">
    <Presentation />
    <Projects />
    <Contact />
  </div>

  )
};


