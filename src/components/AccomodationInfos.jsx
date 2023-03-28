import { useParams } from 'react-router-dom';
import logementList from '../Datas/Logements.json';
import Tags from './Tags';
import Stars from './Stars';
import '../styles/accomodationInfos.css';

export default function SectionLoc() {
  const params = useParams();
  const infos = logementList.find(({ id }) => id === params.id);

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

////////////////////////////////////
// import { useParams } from 'react-router-dom';
// import logementList from '../Datas/Logements.json';
// import Tags from './Tags';
// import Stars from './Stars';
// import '../styles/accomodationInfos.css';

// export default function SectionLoc() {
//   const params = useParams();
//   const infos = logementList.find(({ id }) => id === params.id);

//   return (
//     <div className="sectionloc-container">
//       <div className="infosLoc">
//         <div className="title-and-loc">
//           <h2>{infos.title}</h2>
//           <p>{infos.location} </p>
//         </div>
//         <div className="owner">
//           <p className="owner-name"> {infos.host.name}</p>
//           <img className="owner-photo" src={infos.host.picture} alt="" />
//         </div>
//         <div className="tags-and-stars">
//           <Tags infos={infos} />
//           <Stars starsnumber={infos.rating} />
//         </div>
//       </div>
//     </div>
//   );
// }
