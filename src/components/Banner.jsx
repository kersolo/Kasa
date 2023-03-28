import React from 'react';
import '../styles/Banner.css';
import ImgBannerAPropos from '../assets/bannerAPropos.svg';

function Banner({ src, text, alt }) {
  return src !== ImgBannerAPropos ? (
    <div className="banner">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
      <div className="text"> {text} </div>
    </div>
  ) : (
    <div className="banner-APropos">
      <img className="img-banner" key={src.id} src={src} alt={alt} />
    </div>
  );
}

export default Banner;

////////////////////////////////
// import React from 'react';
// import '../styles/Banner.css';
// import ImgBannerAPropos from '../assets/bannerAPropos.svg';

// function Banner({ src, text, alt }) {
//   if (src !== ImgBannerAPropos) {
//     return (
//       <div className="banner">
//         <img className="img-banner" key={src.id} src={src} alt={alt} />
//         <div className="text"> {text} </div>
//       </div>
//     );
//   }
//   return (
//     <div className="banner-APropos">
//       <img className="img-banner" key={src.id} src={src} alt={alt} />
//     </div>
//   );
// }

// export default Banner;
