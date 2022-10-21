import React, { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import { gapi } from 'gapi-script';

const clientId = '567770545795-om6kfdteals4shm8vrf6qoimottrcb9r.apps.googleusercontent.com';

function Header() {
  const headerItems = [
    { url: 'battle', value: 'Голосування' },
    { url: 'top', value: 'Топ дівчат Очка' },
    { url: 'donaters', value: 'Спонсори' },
  ];

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });
  return (
    <>
      <header className="header">
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
