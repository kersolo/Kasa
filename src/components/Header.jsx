import logo from '../assets/logo.svg';
import '../styles/Header.css';

export default function Header() {
  //state
  //comportement
  //affichage (render)
  return (
    <header className="header-container">
      <img className="logo" src={logo} alt="Kasa" />
      <nav className="nav-container">
        <li className="accueil">Accueil</li>
        <li className="A-Propos">A Propos</li>
      </nav>
    </header>
  );
}
