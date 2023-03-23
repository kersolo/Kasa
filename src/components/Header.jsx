import React from 'react';
import { Link } from 'react-router-dom';
import logoHeader from '../assets/logoHeader.svg';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <img className="logo-header" src={logoHeader} alt="Kasa" />
      <nav className="nav-container">
        <Link to="/" className="nav-link">
          Accueil
        </Link>
        <Link to="/APropos" className="nav-link">
          A Propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
