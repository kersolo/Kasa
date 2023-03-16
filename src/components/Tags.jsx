import React from 'react';

import { useParams } from 'react-router-dom';
import logementList from '../Datas/Logements.json';
import '../styles/sectionloc.css';

function Tags(props) {
  const params = useParams();
  const infos = logementList.find(({ id }) => id === params.id);

  const Tags = infos.tags.map((text) => <li className="liloc">{text} </li>);

  return (
    <div>
      <ul className="ulLoc">{Tags}</ul>
    </div>
  );
}

export default Tags;
