import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from './Cards';
import '../styles/Gallery.css';

function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('/Logements.json')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="gallery-container">
      {data.map((accommodations) => (
        <Cards key={accommodations.id} accommodations={accommodations} />
      ))}
    </div>
  );
}

export default Gallery;
