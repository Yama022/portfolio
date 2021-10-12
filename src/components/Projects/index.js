import React from 'react';
import {Animated} from 'react-animated-css';
import { Link } from 'react-router-dom';
import ButtonDown from 'src/components/ButtonDown';
import { BsLinkedin, BsGithub } from "react-icons/bs";

import 'animate.css';
import './styles.scss';

export default function Projects() {
  return (
    <div className='projects'>
      <div className="project__title">
        <h1>Mes Projets</h1>
      </div>

        <div className="projects__container">
        <Animated animationIn="rotateInDownRight" animationOut="rotateOutDownLeft" animationInDuration={800} animationOutDuration={800} isVisible={true}>
          <div className="projects__container__list">
                <h2>EXPLORASTRO</h2>
            <a href="https://www.explorastro.com" target="_blank" className="projects__container__list__project">
              <div className="projects__container__list__project__content">
                <p>ExplorAstro est le premier réseau social qui vous permet de participer à des observations astronomiques organisées par la communauté. 
                  Apprenez à observer et reconnaître les constellations!
                </p>
              </div>
            </a>
          </div>
          </Animated>


          <div className="projects__container__list">
                <h2>EXPLORASTRO</h2>
            <a href="https://www.github.remijacquemin.fr" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
                <p>ExplorAstro est le premier réseau social qui vous permet de participer à des observations astronomiques organisées par la communauté. 
                  Apprenez à observer et reconnaître les constellations!
                </p>
              </div>
            </a>
          </div>

          <div className="projects__container__list">
                <h2>EXPLORASTRO</h2>
            <a href="https://www.explorastro.com" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
                <p>ExplorAstro est le premier réseau social qui vous permet de participer à des observations astronomiques organisées par la communauté. 
                  Apprenez à observer et reconnaître les constellations!
                </p>
              </div>
          </a>
          </div>

          <div className="projects__container__list">
                <h2>EXPLORASTRO</h2>
            <a href="https://www.explorastro.com" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
                <p>ExplorAstro est le premier réseau social qui vous permet de participer à des observations astronomiques organisées par la communauté. 
                  Apprenez à observer et reconnaître les constellations!
                </p>
              </div>
          </a>
          </div>

        </div>
      <ButtonDown page={2} />
    
    </div>
  );
}
