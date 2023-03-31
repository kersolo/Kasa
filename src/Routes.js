import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import ErrorPage from './pages/ErrorPage';

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default Router;
