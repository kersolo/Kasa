// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/Gallery.css';

// function Cards({ accommodations }) {
//   return (
//     <div className="card">
//       <Link to={'/FicheLogement/' + accommodations.id} className="card-link">
//         {/* <img className="img-card" src={accommodations.cover} alt="" /> */}

//         <div className="cardtest">
//           {accommodations.title}
//           <img className="img-card" src={accommodations.cover} alt="" />
//         </div>
//       </Link>
//     </div>
//   );
// }

// export default Cards;

////////////////
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

function Cards({ accommodations }) {
  return (
    <div className="card">
      <Link to={'/FicheLogement/' + accommodations.id} className="card-link">
        <img className="img-card" src={accommodations.cover} alt="" />
        <div className="accommodation-title">{accommodations.title}</div>
      </Link>
    </div>
  );
}

export default Cards;
////////////////
