import React from 'react';
import '../styles/Banner.css';
import ImgBannerAPropos from '../assets/bannerAPropos.svg';

function Banner({ src, text, alt }) {
  return src !== ImgBannerAPropos ? (
    <section className="banner">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
      <div className="text"> {text} </div>
    </section>
  ) : (
    <section className="banner-APropos">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
    </section>
  );
}

export default Banner;
