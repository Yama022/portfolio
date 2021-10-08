import React from 'react';
import { BsLinkedin, BsGithub } from "react-icons/bs";

import './styles.scss';

export default function Contact() {
  return (
    <div className='contact'>
      <div className="title">
        <h1>Contact</h1>
      </div>

      <div className="contact__content">
        <h2>Si vous souhaitez me joindre :
          <span>rjacquemin019@gmail.com</span>
        </h2>
        <BsLinkedin />
        <BsGithub />
      </div>

    </div>
  );
}
