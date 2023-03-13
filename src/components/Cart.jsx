import '../styles/Gallery.css';

export default function Cart({ loc }) {
  return (
    <div className="card">
      <img className="img" src={loc.cover} alt="" />
      <li className="li">{loc.title}</li>
    </div>
  );
}

// export default function Cart({ loc }) {
//   return (
//     <div className="gal">
//       <img className="cart" src={loc.cover} alt="" />
//       <li className="cart-title">{loc.title}</li>
//     </div>
//   );
// }
