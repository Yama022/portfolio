import React from 'react';
import ButtonDown from 'src/components/ButtonDown';
import ButtonNav from 'src/components/ButtonNav';
import pcDev from 'src/assets/images/pcDev.jpeg';
import './styles.scss';

export default function Accueil() {
  return (
    <div className="accueil">

      <ButtonNav />

      <div className="accueil__title">
        <p>My name is</p> <h1>Rémi Jacquemin</h1>
        <h2>I'm a <strong>FullStack JS</strong> developper</h2>
      </div>

      <div className="accueil__image">
        <img src={pcDev} alt="pcDev" />
      </div>
    
    <ButtonDown page={1} />
    </div>
  );
}

