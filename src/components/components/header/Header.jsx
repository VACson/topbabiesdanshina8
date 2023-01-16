import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import { BattleIcon } from '../../../assets/img/Battle.jsx';
import { TopIcon } from '../../../assets/img/Top.jsx';
import { DonateIcon } from '../../../assets/img/Donate';

function Header() {
  const headerItems = [
    { url: 'battle', value: 'Голосування' },
    { url: 'top', value: 'Топ дівчат Очка' },
    { url: 'donaters', value: 'Спонсори' },
  ];

  return (
    <>
      <header className="header font-inter">
        <div className="logo">
          <img src={logo} className="logo__img" alt="logo" />
        </div>
        <div className="navbar">
          <NavLink to={`/battle`} className="navbar__item">
            <BattleIcon />
          </NavLink>
          <NavLink to={`/top`} className="navbar__item">
            <TopIcon />
          </NavLink>
          <NavLink to={`/donaters`} className="navbar__item">
            <DonateIcon />
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
