// import logoKasa from '../assets/logo_footer.svg';
import logoKasa from '../assets/logo_footer.svg';
import logoCopyright from '../assets/copyright_kasa.svg';
import '../styles/Footer.css';

export default function Footer() {
  //state
  //comportement
  //affichage (render)
  return (
    <footer className="footer-container">
      <img className="logo-footer" src={logoKasa} alt="Kasa" />
      <img
        className="copyright_kasa"
        src={logoCopyright}
        alt="Kasa-copyright"
      />
    </footer>
  );
}

// export default function Footer() {
//   //state
//   //comportement
//   //affichage (render)
//   return (
//     <footer className="footer-container">
//       <img className="logo-footer" src={logoKasa} alt="Kasa" />
//       <img
//         className="copyright_kasa"
//         src={logoCopyright}
//         alt="Kasa-copyright"
//       />
//     </footer>
//   );
// }
