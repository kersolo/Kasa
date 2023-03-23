import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Pages.css';

function ErrorPage() {
  return (
    <div className="page">
      <Header />
      <div className="error-container">
        <h1 className="title-error">404</h1>
        <p className="text-error">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="Link-error">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
