import React from 'react';
import { useEffect, useState } from 'react';
import Data from '../Datas/Data';
import Cards from './Cards';
import '../styles/Gallery.css';

function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Data();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="gallery-container">
      {data.map((accommodations) => (
        <Cards key={accommodations.id} accommodations={accommodations} />
      ))}
    </div>
  );
}

export default Gallery;

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cards from './Cards';
// import '../styles/Gallery.css';

// import Data from '../components/Data';

// function Gallery() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await Data();
//       setData(data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="gallery-container">
//       {data.map((accommodations) => (
//         <Cards key={accommodations.id} accommodations={accommodations} />
//       ))}
//     </div>
//   );
// }

// export default Gallery;
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// import React from 'react';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Cards from './Cards';
// import '../styles/Gallery.css';

// function Gallery() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get('/Logements.json')
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="gallery-container">
//       {data.map((accommodations) => (
//         <Cards key={accommodations.id} accommodations={accommodations} />
//       ))}
//     </div>
//   );
// }

// export default Gallery;
