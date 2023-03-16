import Header from '../components/Header';
import Carrousel from '../components/Carrousel';
import SectionLoc from '../components/SectionLoc';
import Section from '../components/Section';
import '../styles/Pages.css';

import logementList from '../Datas/Logements.json';
import { Navigate, useParams } from 'react-router-dom';

export default function FicheLogement() {
  const params = useParams();
  const infos = logementList.find(({ id }) => id === params.id);

  if (!infos) {
    return <Navigate to="/*"></Navigate>;
  }
  //state
  //comportement
  //affichage (render)
  else
    return (
      <div className="page">
        <Header />
        <Carrousel />
        <SectionLoc />
        <div className="sectionFicheLoc">
          <Section title="Description" description={infos.description} />
          <Section title="Equipements" description={infos.equipments} />
        </div>
      </div>
    );
}
