import { useState, useEffect } from 'react';
import Data from '../../Datas/Data';
import Thumb from '../Thumb/Thumb';
import './gallery.css';

export default function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await Data();
      setData(res);
    };
    getData();
  }, []);

  return (
    <article className="gallery-container">
      {data.map((accommodations) => (
        <Thumb key={accommodations.id} accommodations={accommodations} />
      ))}
    </article>
  );
}
