import React from 'react';
import '../styles/accomodationInfos.css';

function Tags({ infos }) {
  const Tags = infos.tags.map((text, index) => (
    <li key={index} className="tag">
      {text}
    </li>
  ));

  return (
    <div>
      <ul className="tags-container">{Tags}</ul>
    </div>
  );
}

export default Tags;
