import { useState } from 'react';
import iconOpenClose from '../../assets/iconOpenClose.svg';
import './section.css';

//composant Section utilisé sur les pages à propos et fiche logement//
export default function Section({ title, description }) {
  //state
  const [open, setOpen] = useState(false);

  //comportement
  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  //render
  return open ? (
    <section className="section-close" onClick={handleOpen}>
      <div className="title-icon">
        {title}
        <img src={iconOpenClose} alt="icon pour fermer" />
      </div>
      <div className="section-open">{description}</div>
    </section>
  ) : (
    <section className="section-close" onClick={handleOpen}>
      <div className="title-icon">
        {title}
        <img className="icon-open" src={iconOpenClose} alt="icon pour ouvrir" />
      </div>
    </section>
  );
}
