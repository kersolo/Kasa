import Tags from './Tags';
import Stars from './Stars';
import '../styles/accomodationInfos.css';

function AccomodationInfos({ infos }) {
  return (
    <div className="accomodation-container">
      <div className="infos-and-tags">
        <div className="title-and-loc">
          <p className="infos-title">{infos.title}</p>
          <p className="infos-location">{infos.location} </p>
        </div>
        <Tags infos={infos} />
      </div>
      <div className="owner-and-starsnumber">
        <div className="owner">
          <p className="owner-name"> {infos.host.name}</p>
          <img className="owner-photo" src={infos.host.picture} alt="" />
        </div>
        <Stars starsnumber={infos.rating} />
      </div>
    </div>
  );
}
export default AccomodationInfos;
