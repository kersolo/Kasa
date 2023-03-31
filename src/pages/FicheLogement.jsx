import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Data from '../Datas/Data';
import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import AccomodationInfos from '../components/AccomodationInfos';
import Section from '../components/Section';
import Footer from '../components/Footer';
import '../styles/Pages.css';

function FicheLogement() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await Data();
      res.map(() => setData(data));
      const infos = res.find(({ id }) => id === params.id);
      setData(infos);
      if (infos === undefined) {
        navigate('/*', { state: { message: "Can't get data" } });
      }
    };
    getData();
  });

  return (
    data && (
      <div>
        <div className="page">
          <Header />
          <Carrousel slides={data.pictures} />
          <AccomodationInfos infos={data} />
          <div className="section-ficheLogement">
            <Section title="Description" description={data.description} />
            <Section
              title="Équipements"
              description={data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            />
            ;
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}

export default FicheLogement;

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
// import React from 'react';
// import { Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Data from '../Datas/Data';
// import Header from '../components/Header';
// import Carrousel from '../components/Carrousel';
// import AccomodationInfos from '../components/AccomodationInfos';
// import Section from '../components/Section';
// import Footer from '../components/Footer';
// import '../styles/Pages.css';
// import accomodationList from '../Datas/Logements.json';
// import axios from 'axios';

// function FicheLogement() {
//   const params = useParams();
//   const navigate = useNavigate();

//   const [data, setData] = useState();
//   useEffect(() => {
//     const getData = async () => {
//       const res = await axios.get('/Logements.json');
//       const infos = res.data.find(({ id }) => id === params.id);
//       res.data.map(() => setData(infos));
//       if (infos === undefined) {
//         navigate('/404', { state: { message: "Can't get data" } });
//       }
//     };
//     getData();
//   }, []);

//   console.log(data);
//   // const infos = accomodationList.find(({ id }) => id === params.id);
//   // const infos = data.find(({ id }) => id === params.id);

//   return (
//     data && (
//       <div>
//         <div className="page">
//           <Header />
//           <Carrousel slides={data.pictures} />
//           <AccomodationInfos infos={data} />
//           <div className="section-ficheLogement">
//             <Section title="Description" description={data.description} />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     )
//   );
// }

// export default FicheLogement;

////////////////////////////////
// /FicheLogement/c67ab8a7
////////////////////////////////
// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Data from '../Datas/Data';
// import Header from '../components/Header';
// import Carrousel from '../components/Carrousel';
// import AccomodationInfos from '../components/AccomodationInfos';
// import Section from '../components/Section';
// import Footer from '../components/Footer';
// import '../styles/Pages.css';
// import accomodationList from '../Datas/Logements.json';

// function FicheLogement() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await Data();
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   console.log(data);

//   const params = useParams();
//   const infos = accomodationList.find(({ id }) => id === params.id);
//   // const infos = data.find(({ id }) => id === params.id);

//   if (!infos) {
//     return <Navigate to="/*"></Navigate>;
//   } else {
//     const equipmentList = infos.equipments.map((equipment, index) => (
//       <li key={index}>{equipment}</li>
//     ));
//     return (
//       <div>
//         <div className="page">
//           <Header />
//           <Carrousel slides={infos.pictures} />
//           <AccomodationInfos infos={infos} />
//           <div className="section-ficheLogement">
//             <Section title="Description" description={infos.description} />
//             <Section title="Équipements" description={equipmentList} />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default FicheLogement;
////////////////////////////////
////////////////////////////////
// import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import Header from '../components/Header';
// import Carrousel from '../components/Carrousel';
// import AccomodationInfos from '../components/AccomodationInfos';
// import Section from '../components/Section';
// import Footer from '../components/Footer';
// import '../styles/Pages.css';
// import accomodationList from '../Datas/Logements.json';

// // import Data from '../Datas/Data';

// function FicheLogement() {
//   const params = useParams();
//   const infos = accomodationList.find(({ id }) => id === params.id);

//   if (!infos) {
//     return <Navigate to="/*"></Navigate>;
//   } else {
//     const equipmentList = infos.equipments.map((equipment, index) => (
//       <li key={index}>{equipment}</li>
//     ));
//     return (
//       <div>
//         <div className="page">
//           <Header />
//           <Carrousel slides={infos.pictures} />
//           <AccomodationInfos />
//           <div className="section-ficheLogement">
//             <Section title="Description" description={infos.description} />
//             <Section title="Équipements" description={equipmentList} />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// export default FicheLogement;

/////////////////////////

// import React from 'react';
// import { Navigate, useParams, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Data from '../Datas/Data';
// import Header from '../components/Header';
// import Carrousel from '../components/Carrousel';
// import AccomodationInfos from '../components/AccomodationInfos';
// import Section from '../components/Section';
// import Footer from '../components/Footer';
// import '../styles/Pages.css';
// import accomodationList from '../Datas/Logements.json';

// function FicheLogement() {
//   const navigate = useNavigate();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await Data();
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   console.log(data);

//   const params = useParams();
//   // const infos = accomodationList.find(({ id }) => id === params.id);
//   const infos = data.find(({ id }) => id === params.id);

//   if (infos === undefined) {
//     navigate('/*', { state: { message: "Can't get data" } });
//   }

//   console.log(infos);

//   return (
//     infos && (
//       <div>
//         <div className="page">
//           <Header />
//           <Carrousel slides={infos.pictures} />
//           <AccomodationInfos infos={infos} />
//           <div className="section-ficheLogement">
//             <Section title="Description" description={infos.description} />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     )
//   );
// }

// export default FicheLogement;
