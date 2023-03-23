import React from 'react';
import StarsRed from '../assets/starsRed.svg';
import StarsGrey from '../assets/starsGrey.svg';

function Stars({ starsnumber }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((level) =>
        starsnumber >= level ? (
          <img key={level.toString()} src={StarsRed} alt="" />
        ) : (
          <img key={level.toString()} src={StarsGrey} alt="" />
        )
      )}
    </div>
  );
}

export default Stars;
