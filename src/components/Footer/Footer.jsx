import logoFooter from '../../assets/logoFooter.svg';
import logoCopyright from '../../assets/copyrightKasa.svg';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      <img className="logo-footer" src={logoFooter} alt="Kasa" />
      <img className="copyright-kasa" src={logoCopyright} alt="Copyright" />
    </footer>
  );
}