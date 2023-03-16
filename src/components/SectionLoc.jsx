import { Navigate, useParams } from 'react-router-dom';
import logementList from '../Datas/Logements.json';
import '../styles/sectionloc.css';
import VectorRed from '../assets/VectorRed.svg';

export default function SectionLoc() {
  const params = useParams();
  const infos = logementList.find(({ id }) => id === params.id);

  console.log(infos);

  return (
    <div className="sectionloc">
      <h2>{infos.title}</h2>
      <h3>{infos.location} </h3>
      <ul> {infos.tags} </ul>
      <div>
        {infos.host.name}
        <img src={infos.host.picture} alt="" />
      </div>
      ///// placer dans un composant avec condition
      <div>
        <img src={VectorRed} alt="" />
        {infos.rating}
      </div>
      ///// placer dans un composant avec condition
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
