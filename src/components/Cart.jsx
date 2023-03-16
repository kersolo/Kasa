import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

export default function Cart({ loc }) {
  return (
    <div className="card">
      {/* <Link to="/FicheLogement/:id" className="card-link"> */}
      <Link to={'/FicheLogement/' + loc.id} className="card-link">
        <img className="imgCard" src={loc.cover} alt="" />
        <li className="loc-title">{loc.title}</li>
      </Link>
    </div>
  );
}
