import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

function Thumb({ accommodations }) {
  const id = accommodations.id;

  return (
    <div className="thumb">
      <Link to={`/FicheLogement/${id}`} className="thumb-link">
        <img className="img-thumb" src={accommodations.cover} alt="" />
        <div className="accommodation-title">{accommodations.title}</div>
      </Link>
    </div>
  );
}

export default Thumb;
