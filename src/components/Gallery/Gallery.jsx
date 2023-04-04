import { useState, useEffect } from 'react';
import Data from '../../Datas/Data';
import Thumb from '../Thumb/Thumb';
import './gallery.css';

export default function Gallery() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Data();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <article className="gallery-container">
      {data.map((accommodations) => (
        <Thumb key={accommodations.id} accommodations={accommodations} />
      ))}
    </article>
  );
}
