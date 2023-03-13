import { useState } from 'react';
import Cart from './Cart';
import '../styles/Gallery.css';
const logementList = require('../Datas/Logements.json');

// const copie = [];
// logementList.forEach((logement) => copie.push(logement.title));

// console.log(copie);

// let logmentTitle = [...new Set(copie)];

// console.log(logmentTitle);

export default function Gallery() {
  const [data, setData] = useState(logementList);
  return (
    <div className="gallery">
      {data.map((loc) => (
        <Cart loc={loc} />
      ))}
    </div>
  );
}

// export default function Gallery() {
//   return (
//     <div className="gallery">
//       <div className="gal">
//         {logementList.map((loc) => (
//           <li key={loc.id} className="cart">
//             {loc.title}
//           </li>
//         ))}
//       </div>
//     </div>
//   );
// }
