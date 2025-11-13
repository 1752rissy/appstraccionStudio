import React from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const HomeButton = () => {
  return (
    <div className="home-button-container">
      <Link to="/" className="home-button">
        <span className="home-button-icon">🏠</span> Volver al Inicio
      </Link>
    </div>
  );
};

export default HomeButton;
