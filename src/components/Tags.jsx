import React from 'react';
import '../styles/sectionloc.css';

function Tags({ infos }) {
  const Tags = infos.tags.map((text, index) => (
    <li key={index} className="tags">
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
