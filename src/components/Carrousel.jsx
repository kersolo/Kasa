import logementList from '../Datas/Logements.json';
import '../styles/carrousel.css';

export default function Carrousel() {
  for (let i = 0; i < logementList.length; i++) {
    const loc = logementList[i];

    return <div className="carrousel"></div>;
  }
}

// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import logementList from '../Datas/Logements.json';
// import '../styles/carrousel.css';

// export default function Carrousel() {
//   const { id } = useParams();
//   const [data, setData] = useState(logementList);
//   const test = data + id;
//   console.log(test);

//   return (
//     <div className="carrousel">
//       <h1>hello{data.title} </h1>
//     </div>
//   );
// }

//////////////////////////////
// import { useState } from 'react';
// import logementList from '../Datas/Logements.json';
// import '../styles/carrousel.css';

// console.log(logementList);

// export default function Carrousel() {
//   const [data, setData] = useState(logementList);
//   return (
//     <div className="carrousel">
//       {data.map((loc) => (
//         <img src={loc.cover} />
//       ))}
//     </div>
//   );
// }
