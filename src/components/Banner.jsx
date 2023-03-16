import '../styles/Banner.css';

export default function Banner({ src, text, alt }) {
  //state
  //comportement
  //affichage (render)
  return (
    <div className="banner">
      <img src={src} alt={alt} className="imgBanner" />
      <div className="text"> {text} </div>
    </div>
  );
}
