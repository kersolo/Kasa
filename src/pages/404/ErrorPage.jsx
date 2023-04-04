import { Link } from 'react-router-dom';
import './errorPage.css';

function ErrorPage() {
  return (
    <main className="error-container">
      <h1 className="title-error">404</h1>
      <p className="text-error">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="Link-error">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
}

export default ErrorPage;

//////////////////////////////////////////
// import { Link } from 'react-router-dom';
// import './errorPage.css';

// function ErrorPage() {
//   return (
//     <main>
//       <article className="error-container">
//         <h1 className="title-error">404</h1>
//         <p className="text-error">
//           Oups! La page que vous demandez n'existe pas.
//         </p>
//         <Link to="/" className="Link-error">
//           Retourner sur la page d'accueil
//         </Link>
//       </article>
//     </main>
//   );
// }

// export default ErrorPage;
