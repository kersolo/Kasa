import { Navigate, useParams } from 'react-router-dom';
import logementList from '../Datas/Logements.json';
import '../styles/sectionloc.css';
import VectorRed from '../assets/VectorRed.svg';
import Tags from '../components/Tags';
import Stars from '../components/Stars';

export default function SectionLoc() {
  const params = useParams();
  const infos = logementList.find(({ id }) => id === params.id);

  return (
    <div className="sectionloc">
      <div>
        <h2>{infos.title}</h2>
        <h5>{infos.location} </h5>
        <Tags />
      </div>
      <div>
        <div className="nomphoto">
          <p className="nomPerson"> {infos.host.name}</p>
          <img className="imageperson" src={infos.host.picture} alt="" />
        </div>

        <div>
          <Stars starsnumber={infos.rating} />
        </div>
      </div>
    </div>
  );
}
///////////////////////////////////
// import logementList from '../Datas/Logements.json';
// import '../styles/sectionloc.css';

// export default function SectionLoc() {
//   for (let i = 0; i < logementList.length; i++) {
//     const loc = logementList[i];
//     console.log(loc);
//     return (
//       <div className="sectionloc">
//         <h2>{loc.title} </h2>
//       </div>
//     );
//   }
// }
