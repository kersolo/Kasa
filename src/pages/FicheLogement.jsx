import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import AccomodationInfos from '../components/AccomodationInfos';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../styles/Pages.css';
import accomodationList from '../Datas/Logements.json';

function FicheLogement() {
  const params = useParams();
  const infos = accomodationList.find(({ id }) => id === params.id);

  if (!infos) {
    return <Navigate to="/*"></Navigate>;
  } else {
    const equipmentList = infos.equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    ));
    return (
      <div className="page">
        <Header />
        <Carrousel slides={infos.pictures} />
        <AccomodationInfos />
        <Section title="Description" description={infos.description} />
        <Section title="Equipements" description={equipmentList} />
        <Footer />
      </div>
    );
  }
}

export default FicheLogement;

////////////////////////////////////
// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import Header from '../components/Header';
// import Carrousel from '../components/Carrousel';
// import SectionLoc from '../components/SectionLoc';
// import Section from '../components/Section';
// import Footer from '../components/Footer';
// import '../styles/Pages.css';
// import accomodationList from '../Datas/Logements.json';

// function FicheLogement() {
//   const params = useParams();
//   const infos = accomodationList.find(({ id }) => id === params.id);

//   if (!infos) {
//     return <Navigate to="/*"></Navigate>;
//   } else {
//     const equipment = infos.equipments.map((inf, index) => (
//       <li className="inf" key={index}>
//         {inf}
//       </li>
//     ));
//     return (
//       <div className="page">
//         <Header />
//         <Carrousel slides={infos.pictures} />
//         <SectionLoc />
//         <Section title="Description" description={infos.description} />
//         <Section title="Equipements" description={equipment} />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default FicheLogement;
