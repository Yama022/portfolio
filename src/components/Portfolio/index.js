// == Import
import React, { useEffect } from 'react';
import Projects from 'src/components/Projects';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import { IoIosArrowUp } from 'react-icons/io';
import './styles.scss';

// == Composant
export default function Portfolio() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const button = document.querySelector('.button__return__top');
      if (window.scrollY > 200) {
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
    <button
        type="button"
        className="button__return__top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }}
      >
        <IoIosArrowUp />
      </button>    
  </div>


  )
};


