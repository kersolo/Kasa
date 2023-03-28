import React from 'react';
import StarsRed from '../assets/starsRed.svg';
import StarsGrey from '../assets/starsGrey.svg';
import '../styles/accomodationInfos.css';

function Stars({ starsnumber }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div className="stars-container">
      {stars.map((level) =>
        starsnumber >= level ? (
          <img className="star" key={level.toString()} src={StarsRed} alt="" />
        ) : (
          <img className="star" key={level.toString()} src={StarsGrey} alt="" />
        )
      )}
    </div>
  );
}

export default Stars;
