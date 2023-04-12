import Tags from '../Tags/Tags';
import Stars from '../Stars/Stars';
import './accomodationInfos.css';

//composant AccomodationInfos affichant certaines informations du logement (situé entre le carrousel et les section sur la fiche logement)//
export default function AccomodationInfos({ infos }) {
  return (
    <article className="accomodation-container">
      <section className="infos-and-tags">
        <p className="infos-title">{infos.title}</p>
        <p className="infos-location">{infos.location} </p>
        <Tags infos={infos} />
      </section>
      <section className="owner-and-starsnumber">
        <div className="owner">
          <p className="owner-name"> {infos.host.name}</p>
          <img className="owner-photo" src={infos.host.picture} alt="" />
        </div>
        <Stars starsnumber={infos.rating} />
      </section>
    </article>
  );
}
