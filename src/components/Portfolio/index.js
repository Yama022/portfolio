// == Import
import React, { useEffect, useState } from 'react';
import Projects from 'src/components/Projects';
import Presentation from 'src/components/Presentation';
import Accueil from 'src/components/Accueil';
import Contact from 'src/components/Contact';
import Welcome from 'src/components/Welcome';
import { IoIosArrowUp } from 'react-icons/io';
import './styles.scss';

// == Composant
export default function Portfolio() {

  const [loader, setLoader] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const button = document.querySelector('.button__top');
      if (window.scrollY > 200) {
        button.classList.add("button__top--active");
      }
      else {
        button.classList.remove("button__top--active");
      }
    });
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, [loader]);
  return (
    loader ? 
      <Welcome />
    : 
    <div className="portfolio">
      <Accueil />
      <Presentation />
      <Projects />
      <Contact />
      <div className="button__top">
        <button
            type="button"
            className="button__top__return__top"
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
    </div>
    
  )
};


