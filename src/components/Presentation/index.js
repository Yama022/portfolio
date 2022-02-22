import React from 'react';
import ButtonDown from 'src/components/ButtonDown';
import ButtonNav from 'src/components/ButtonNav';
import { ImHtmlFive } from "react-icons/im";
import { FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiCss3, SiJavascript, SiReact, SiSass, SiPostgresql } from "react-icons/si";

import './styles.scss';

export default function Presentation() {
  return (
    <div className='presentation'>
      <ButtonNav />
      <div className="presentation__content">
        <h3>My stack : </h3>
        <div className="presentation__content__stack">
          <div className="presentation__content__stack__language">
            <ImHtmlFive />
            <span className="presentation__content__stack__language__name">HTML5</span>
          </div>
          <div className="presentation__content__stack__language">
            <SiCss3 />
            <span className="presentation__content__stack__language__name">CSS3</span>
          </div>
          <div className="presentation__content__stack__language">
            <SiJavascript />
            <span className="presentation__content__stack__language__name">JavaScript</span>
          </div>
          <div className="presentation__content__stack__language">
            <SiReact />
            <span className="presentation__content__stack__language__name">React</span>
          </div>
          <div className="presentation__content__stack__language">
            <FaVuejs />
            <span className="presentation__content__stack__language__name">VueJS</span>
          </div>
          <div className="presentation__content__stack__language">
            <SiSass />
            <span className="presentation__content__stack__language__name">SASS</span>
          </div>
          <div className="presentation__content__stack__language">
            <FaNodeJs />
            <span className="presentation__content__stack__language__name">NodeJS</span>
          </div>
          <div className="presentation__content__stack__language">
            <SiPostgresql />
            <span className="presentation__content__stack__language__name">Postgresql</span>
          </div>
          
        </div>
      </div>

      
      <ButtonDown page={2} />
    </div>
  );
}
