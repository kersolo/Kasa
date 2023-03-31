import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

function Cards({ accommodations }) {
  const id = accommodations.id;

  return (
    <div className="card">
      <Link to={'/FicheLogement/' + id} className="card-link">
        <img className="img-card" src={accommodations.cover} alt="" />
        <div className="accommodation-title">{accommodations.title}</div>
      </Link>
    </div>
  );
}

export default Cards;
