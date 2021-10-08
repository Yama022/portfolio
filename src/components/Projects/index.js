import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { BsArrowDownCircle, BsLinkedin, BsGithub } from "react-icons/bs";

import './styles.scss';

export default function Projects() {
  return (
    <div className='projects'>
      <div className="project__title">
        <h1>Mes Projets</h1>
      </div>

      <div className="projects__box">

        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
        <div className="projects__box__content">
          <h2>Si vous souhaitez me joindre :
            <span>rjacquemin019@gmail.com</span>
          </h2>
          <BsLinkedin />
          <BsGithub />
        </div>
      </div>
      <div className="footer">
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
    
    </div>
  );
}
