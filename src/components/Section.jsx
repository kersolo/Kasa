import { useState } from 'react';
import iconsection from '../assets/Vector.svg';
import '../styles/section.css';

export default function Section({ title, description }) {
  const [open, setOpen] = useState(false);

  return open ? (
    <div className="close" onClick={() => setOpen(false)}>
      <div className="title-img">
        {title} <img className="iconopen" src={iconsection} alt="iconSection" />
      </div>
      <div className="open">{description}</div>
    </div>
  ) : (
    <div className="close" onClick={() => setOpen(true)}>
      <div className="title-img">
        {title} <img src={iconsection} alt="iconSection" />
      </div>
    </div>
  );
}

////////////////////////////////

// import '../styles/section.css';
// import { useState } from 'react';
// import PropTypes from 'prop-types';
// import iconCollapse from '../assets/Vector.svg';

// function Collapse({ title, description }) {
//   const [isOpen, setIsOpen] = useState(false);
//   return isOpen ? (
//     <div className={'containerCollapse'}>
//       <div className={'titleCollapse'} onClick={() => setIsOpen(false)}>
//         {title}
//         <img src={iconCollapse} className={'iconOpen'} alt="" />
//       </div>
//       <div className={'contentCollapse'}>{description}</div>
//     </div>
//   ) : (
//     <div className={'containerCollapse'}>
//       <div className={'titleCollapse'} onClick={() => setIsOpen(true)}>
//         {title}
//         <img src={iconCollapse} className={'icon'} alt="" />
//       </div>
//     </div>
//   );
// }

// Collapse.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
// };
// export default Collapse;
