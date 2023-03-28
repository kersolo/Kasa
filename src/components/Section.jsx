import React from 'react';
import { useState } from 'react';
import iconOpenClose from '../assets/iconOpenClose.svg';
import '../styles/section.css';

function Section({ title, description }) {
  const [open, setOpen] = useState(false);

  return open ? (
    <div className="section-close" onClick={() => setOpen(false)}>
      <div className="title-icon">
        {title}
        <img src={iconOpenClose} alt="icon pour fermer" />
      </div>
      <div className="section-open">{description}</div>
    </div>
  ) : (
    <div className="section-close" onClick={() => setOpen(true)}>
      <div className="title-icon">
        {title}
        <img className="icon-open" src={iconOpenClose} alt="icon pour ouvrir" />
      </div>
    </div>
  );
}

export default Section;

///////////////////////////
// import React from 'react';
// import { useState } from 'react';
// import iconOpenClose from '../assets/iconOpenClose.svg';
// import '../styles/section.css';

// function Section({ title, description }) {
//   const [open, setOpen] = useState(false);

//   return open ? (
//     <div className="section-container">
//       <div className="section-close" onClick={() => setOpen(false)}>
//         <div className="title-icon">
//           {title}
//           <img
//             className="icon-open"
//             src={iconOpenClose}
//             alt="icon pour fermer"
//           />
//         </div>
//         <div className="section-open">{description}</div>
//       </div>
//     </div>
//   ) : (
//     <div className="section-container">
//       <div className="section-close" onClick={() => setOpen(true)}>
//         <div className="title-icon">
//           {title} <img src={iconOpenClose} alt="icon pour ouvrir" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Section;
