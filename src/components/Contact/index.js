import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

import './styles.scss';

export default function Contact() {
  return (
    <div className='contact'>
      <div className="contact__title">
        <h1>Contact</h1>
      </div>

      <div className="contact__content">
        <div className="contact__content__mail">
          <h2>Si vous souhaitez me joindre : </h2>
            <span className="contact__content__mail__adress">rjacquemin019@gmail.com</span>
        </div>
        <div className="contact__content__logo">
          <a href="https://www.linkedin.com/in/remi-jacquemin/" target="_blank" className="contact__content__logo__1">
            <BsLinkedin />
          </a>
          <a href="https://github.com/Yama022" target="_blank" className="contact__content__logo__2">
            <BsGithub />
          </a>

        </div>
        
      </div>

    </div>
  );
}
