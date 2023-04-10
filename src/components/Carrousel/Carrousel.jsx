import { useState } from 'react';
import arrowRight from '../../assets/arrowRight.svg';
import arrowLeft from '../../assets/arrowLeft.svg';
import './carrousel.css';

export default function Carrousel({ slides }) {
  //state
  const [currentIndex, setCurrentIndex] = useState(0);

  //comportement
  const goToPrevious = () => {
    const isFristSlide = currentIndex === 0;
    const newIndex = isFristSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  //render
  return slides.length > 1 ? (
    <article className="CarrouselContainer">
      <div className="arrows">
        <img
          className="arrowLeft"
          src={arrowLeft}
          alt=""
          onClick={goToPrevious}
        />
        <img
          className="arrowRight"
          src={arrowRight}
          alt=""
          onClick={goToNext}
        />
      </div>
      <div className="slidesNumber">
        <img className="slideStyle" src={slides[currentIndex]} alt="" />
        <p className="textSlides">
          {currentIndex + 1}/{slides.length}
        </p>
      </div>
    </article>
  ) : (
    <article className="CarrouselContainer">
      <div className="slidesNumber">
        <img className="slideStyle" src={slides[currentIndex]} alt="" />

        <p className="textSlides">
          {currentIndex + 1}/{slides.length}
        </p>
      </div>
    </article>
  );
}
