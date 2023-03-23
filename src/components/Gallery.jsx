import React from 'react';
import Cards from './Cards';
import '../styles/Gallery.css';
const accommodationList = require('../Datas/Logements.json');

function Gallery() {
  const data = accommodationList;
  return (
    <div className="gallery-container">
      {data.map((accommodations) => (
        <Cards key={accommodations.id} accommodations={accommodations} />
      ))}
    </div>
  );
}

export default Gallery;
