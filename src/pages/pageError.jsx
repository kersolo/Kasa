import Header from '../components/Header';
import '../styles/Pages.css';

import React from 'react';
import { Link } from 'react-router-dom';

function PageError() {
  return (
    <div className="page">
      <Header />
      <div className="PageError">
        <h1 className="titleError">404</h1>
        <p className="textError">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="LinkError">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default PageError;
