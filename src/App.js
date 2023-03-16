import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import PageError from './pages/pageError';

function App() {
  //state
  //comportement
  //affichage (render)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/*" element={<PageError />} />
      </Routes>
    </div>
  );
}

export default App;
