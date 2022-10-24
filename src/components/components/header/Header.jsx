import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';

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
          <span className="logo__text">TOP BABIES DANSHINA 8</span>
        </div>
        <ul className="navbar">
          {headerItems.map((item, index) => (
            <li className="navbar__item" key={index}>
              <NavLink
                to={`/${item.url}`}
                key={index}
                className={({ isActive }) => (isActive ? 'active' : '')}>
                {item.value}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
    </>
  );
}

export default Header;
