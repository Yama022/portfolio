// == Import
import React, { useEffect } from 'react';
import Projects from 'src/components/Projects';
import Presentation from 'src/components/Presentation';
import Contact from 'src/components/Contact';
import Welcome from 'src/components/Welcome';
import { IoIosArrowUp } from 'react-icons/io';
import './styles.scss';

// == Composant
export default function Portfolio() {
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
      return (
        <Welcome />
      )
    }, 1000);
  }, []);
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
  return (
  <div className="portfolio">
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


