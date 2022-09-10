import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/components/header/Header';
import { Home, BattlePage, TopPage, DonatersPage } from './components/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="battle" element={<BattlePage />} />
          <Route path="top" element={<TopPage />} />
          <Route path="donaters" element={<DonatersPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
