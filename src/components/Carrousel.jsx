import React, { useState } from 'react';
import arrowRight from '../assets/arrowRight.svg';
import arrowLeft from '../assets/arrowLeft.svg';
import '../styles/carrousel.css';

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return slides.length > 1 ? (
    <div className="CarrouselContainer">
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
    </div>
  ) : (
    <div className="CarrouselContainer">
      <div className="slidesNumber">
        <img className="slideStyle" src={slides[currentIndex]} alt="" />

        <p className="textSlides">
          {currentIndex + 1}/{slides.length}
        </p>
      </div>
    </div>
  );
}

export default Carrousel;
