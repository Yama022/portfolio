import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { BsArrowUpCircle, BsLinkedin, BsGithub } from "react-icons/bs";

import './styles.scss';

export default function Contact() {
  return (
    <div className='contact'>
      <div className="title">
        <h1>Contact</h1>
      </div>

      <div className="contact --content">
        <h2>Si vous souhaitez me joindre :
          <span>rjacquemin019@gmail.com</span>
        </h2>
        <BsLinkedin />
        <BsGithub />
      </div>

      <div className="footer">
        <div className="button__back">
          <Link
            to="presentation"
            smooth={true}
            spy={true}
            duration={700}
          >
            <BsArrowUpCircle />
          </Link>
        </div>
      </div>
    </div>
  );
}
