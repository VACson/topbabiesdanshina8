import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/components/header/Header';
import AddCard from './components/components/login/AddCard';
import UserRole from './components/components/login/UserRole';
import { Home, BattlePage, TopPage, DonatersPage } from './components/pages';
import './scss/app.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="battle" element={<BattlePage />} />
        <Route path="top" element={<TopPage />} />
        <Route path="donaters" element={<DonatersPage />} />
        <Route path="addcard" element={<AddCard />} />
        <Route path="userrole" element={<UserRole />} />
      </Route>
    </Routes>
  );
}

export default App;
