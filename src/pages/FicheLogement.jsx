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
      <body className="page">
        <Header />
        <section>
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
          </div>
        </section>

        <Footer />
      </body>
    )
  );
}

export default FicheLogement;
