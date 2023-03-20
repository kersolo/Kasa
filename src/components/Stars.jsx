import React from 'react';
import VectorRed from '../assets/VectorRed.svg';
import VectorGrey from '../assets/VectorGrey.svg';

function Stars({ starsnumber }) {
  const stars = [1, 2, 3, 4, 5];
  return (
    <div>
      {stars.map((level) =>
        starsnumber >= level ? (
          <img src={VectorRed} alt="" />
        ) : (
          <img src={VectorGrey} alt="" />
        )
      )}
    </div>
  );
}

export default Stars;

//////////////////////////////////////////////
// import React from 'react';
// import VectorRed from '../assets/VectorRed.svg';
// import VectorGrey from '../assets/VectorGrey.svg';
// import { Navigate, useParams } from 'react-router-dom';
// import logementList from '../Datas/Logements.json';

// function Stars(props) {
//   const params = useParams();
//   const infos = logementList.find(({ id }) => id === params.id);
//   const starsnumber = infos.rating;
//   const stars = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       {stars.map((level) =>
//         starsnumber >= level ? (
//           <img src={VectorRed} alt="" />
//         ) : (
//           <img src={VectorGrey} alt="" />
//         )
//       )}
//     </div>
//   );
// }

// export default Stars;
