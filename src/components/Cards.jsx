import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

function Cards({ accommodations }) {
  return (
    <div className="card">
      <Link to={'/FicheLogement/' + accommodations.id} className="card-link">
        <img className="img-card" src={accommodations.cover} alt="" />
        <li className="accommodation-title">{accommodations.title}</li>
      </Link>
    </div>
  );
}

export default Cards;
