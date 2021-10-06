import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { BsArrowDownCircle } from "react-icons/bs";

import './styles.scss';

export default function Presentation() {
  return (
    <div className='presentation'>
      <h1>Qui suis-je ?</h1>
      <div className="button__back">
        <Link
          to="projects"
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
