import { Link } from 'react-router-dom';
import './thumb.css';

//composant Thumb représentant chaque logmements//
export default function Thumb({ accommodations }) {
  const id = accommodations.id;

  return (
    <Link to={`/Fiche-Logement/${id}`} className="thumb">
      <img className="img-thumb" src={accommodations.cover} alt="" />
      <p className="accommodation-title">{accommodations.title}</p>
    </Link>
  );
}
