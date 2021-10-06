import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

import './styles.scss';

export default function Projects() {
  return (
    <div className='projects'>
      <h1>Mes Projets</h1>
    <div className="button__back">
      <Link
        to="contact"
        smooth={true}
        spy={true}
        duration={700}
      >
        < BsArrowDownCircle />
      </Link>
    </div>
    </div>
  );
}
