import React from 'react';
import '../styles/Banner.css';

function Banner({ src, text, alt }) {
  return (
    <div className="banner">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
      <div className="text"> {text} </div>
    </div>
  );
}

export default Banner;
