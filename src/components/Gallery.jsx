import { useState } from 'react';
import Cart from './Cart';
import '../styles/Gallery.css';
const logementList = require('../Datas/Logements.json');

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
