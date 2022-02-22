import React from 'react';

import './styles.scss';

export default function ButtonNav() {
  const buttonHome = () => {
    window.scrollTo({
      top: document.querySelector('.accueil').offsetTop,
      behavior: 'smooth',
    });
  };
  const buttonPresentation = () => {
    window.scrollTo({
      top: document.querySelector('.presentation').offsetTop,
      behavior: 'smooth',
    });
  };
  const buttonProjects = () => {
    window.scrollTo({
      top: document.querySelector('.projects').offsetTop,
      behavior: 'smooth',
    });
  };

  const buttonContact = () => {
    window.scrollTo({
      top: document.querySelector('.contact-form').offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className="buttonNav">
        <button onClick={buttonHome} >Home</button>
        <button onClick={buttonPresentation} >About Me</button>
        <button onClick={buttonProjects} >Projects</button>
        <button onClick={buttonContact} >Contact</button>
      </div>
  );
}
