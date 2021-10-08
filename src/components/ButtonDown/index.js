import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BsArrowDownCircle } from "react-icons/bs";


import './styles.scss';

export default function ButtonDown({ page }) {
  const handleOnClick = () => {
    window.scrollBy({
        top: page * window.innerHeight - window.scrollY,
        left: 0,
        behavior: 'smooth'
    });
}
  return (
    <div className="footer">
      <div className="button__back">
        <span onClick={handleOnClick}>
          <BsArrowDownCircle />
        </span>
      </div>
    </div>
  );
}

ButtonDown.propTypes = {
  page: PropTypes.number.isRequired,
};
