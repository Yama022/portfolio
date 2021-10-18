import React from 'react';
import ButtonDown from 'src/components/ButtonDown';
import github from 'src/assets/images/github.png';
import oFig from 'src/assets/images/oFig.png';
import spotify from 'src/assets/images/spotify.png';
import explorastro from 'src/assets/images/explorastro.png';
import { SiCss3, SiJavascript, SiReact, SiSass, SiPostgresql } from "react-icons/si";

import 'animate.css';
import './styles.scss';

export default function Projects() {
  return (
    <div className='projects'>
      <div className="projects__title">
        <h1>Mes Projets</h1>
      </div>

      <div className="projects__container">

        <div className="projects__container__list">
          <a href="https://www.explorastro.com" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
              <h2>EXPLORASTRO</h2>
              <p>ExplorAstro est le premier réseau social qui vous permet de participer à des observations astronomiques organisées par la communauté. 
                Apprenez à observer et reconnaître les constellations!
              </p>
              <span>
              <SiReact /><SiCss3 /><SiJavascript /><SiSass /><SiPostgresql />
              </span>
            </div>
            <div className="projects__container__list__project__image">
              <img src={explorastro} />
            </div>
          </a>
        </div>

        <div className="projects__container__list">
          <a href="https://www.mario.remijacquemin.fr" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
              <h2>MARIO</h2>
              <p>Projet construit autour de l'univers de Nintendo</p>
              <span>
              <SiReact /><SiCss3 /><SiJavascript /><SiSass />
              </span>
            </div>
              <div className="projects__container__list__project__image">
                <img src={oFig} />
              </div>
          </a>
        </div>

        <div className="projects__container__list">
          <a href="https://www.github.remijacquemin.fr" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
              <h2>GITHUB</h2>
              <p>Projet contruit autour de l'API de Github</p>
              <span>
              <SiReact /><SiCss3 /><SiJavascript /><SiSass />
              </span>
            </div>
            <div className="projects__container__list__project__image">
              <img src={github} />
            </div>
          </a>
        </div>

        <div className="projects__container__list">
          <a href="https://www.spotify.remijacquemin.fr" target="_blank" className="projects__container__list__project">
            <div className="projects__container__list__project__content">
              <h2>SPOTIFY</h2>
              <p>Projet construit autour de l'univers de Spotify</p>
              <span>
              <SiReact /><SiCss3 /><SiJavascript /><SiSass />
              </span>
            </div>
            <div className="projects__container__list__project__image">
              <img src={spotify} />
            </div>
          </a>
        </div>

        </div>
      <ButtonDown page={2} />
    
    </div>
  );
}
