// == Import
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Projects from 'src/components/Projects';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import { animateScroll as scroll } from "react-scroll";
import './styles.scss';

// == Composant
export default function Portfolio() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const button = document.querySelector('.button__return__top');
      if (window.scrollY > 100) {
        button.style.display = 'block';
      }
      else {
        button.style.display = 'none';
      }
    });
  }, []);
  return (
  <div className="portfolio">
    <Presentation />
    <Projects />
    <Contact />
  </div>

  )
};


