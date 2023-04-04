import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import ErrorPage from './pages/404/ErrorPage';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/A-Propos" element={<APropos />} />
      <Route path="/Fiche-Logement/:id" element={<FicheLogement />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default Router;
