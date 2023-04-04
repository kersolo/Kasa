import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Data from '../Datas/Data';
import Carrousel from '../components/Carrousel/Carrousel';
import AccomodationInfos from '../components/AccomodationInfos/AccomodationInfos';
import Section from '../components/Section/Section';

function FicheLogement() {
  const [data, setData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await Data();
      res.map(() => setData(data));
      const infos = res.find(({ id }) => id === params.id);
      setData(infos);
      if (infos === undefined) {
        navigate('/404');
      }
    };
    getData();
  });

  return (
    data && (
      <main>
        <Carrousel slides={data.pictures} />
        <AccomodationInfos infos={data} />
        <article className="section-ficheLogement">
          <Section title="Description" description={data.description} />
          <Section
            title="Équipements"
            description={data.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          />
        </article>
      </main>
    )
  );
}

export default FicheLogement;
