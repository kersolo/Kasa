import { useParams } from 'react-router-dom';
import logementList from '../Datas/Logements.json';
import Tags from './Tags';
import Stars from './Stars';
import '../styles/sectionloc.css';

export default function SectionLoc() {
  const params = useParams();
  const infos = logementList.find(({ id }) => id === params.id);

  return (
    <div className="sectionloc-container">
      <div>
        <h2>{infos.title}</h2>
        <h5>{infos.location} </h5>
        <Tags infos={infos} />
      </div>
      <div>
        <div className="owner">
          <p className="owner-name"> {infos.host.name}</p>
          <img className="owner-photo" src={infos.host.picture} alt="" />
        </div>

        <div>
          <Stars starsnumber={infos.rating} />
        </div>
      </div>
    </div>
  );
}
