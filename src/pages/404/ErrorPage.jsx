import { Link, useLocation, useNavigate } from 'react-router-dom';
import './errorPage.css';
import { useEffect } from 'react';

//composant ErrorPage qui précise que la page demandée n'existe pas//
function ErrorPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== '/404') {
      navigate('/404');
    }
  });

  return (
    <main className="error-container">
      <h1 className="title-error">404</h1>
      <p className="text-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="Link-error">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default ErrorPage;
