import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { BsArrowUpCircle } from "react-icons/bs";

import './styles.scss';

export default function Contact() {
  return (
    <div className='contact'>
      <h1>Contact</h1>
      <div className="button__back">
        <Link
          to="presentation"
          smooth={true}
          spy={true}
          duration={700}
        >
          < BsArrowUpCircle />
        </Link>
      </div>
    </div>
  );
}
