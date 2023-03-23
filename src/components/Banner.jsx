import React from 'react';
import '../styles/Banner.css';

function Banner({ src, text, alt }) {
  return (
    <div className="banner">
      <img key={src.id} src={src} alt={alt} className="img-banner" />
      <div className="text"> {text} </div>
    </div>
  );
}

export default Banner;
