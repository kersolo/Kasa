import { Link, useLocation } from 'react-router-dom';
import logoHeader from '../../assets/logoHeader.svg';
import './header.css';

export default function Header() {
  const location = useLocation();
  return (
    <header className="header-container">
      <img className="logo-header" src={logoHeader} alt="Kasa" />
      <nav className="nav-container">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link
          to="/A-Propos"
          className={location.pathname === '/A-Propos' ? 'active' : ''}
        >
          A Propos
        </Link>
      </nav>
    </header>
  );
}
