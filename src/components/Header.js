import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <Link to="/" className="app-title-link">
        <h1 className="app-title">APPSTRACCION STUDIO</h1>
      </Link>
      <p className="app-subtitle">Consultora de IA aplicada para el proyecto que necesitas</p>
      <nav className="app-nav">
        <ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
