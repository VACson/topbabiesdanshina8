import React, { useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import styles from './header.module.scss';
import LogoutButton from '../../components/login/Logout';
import { gapi } from 'gapi-script';

const clientId = '567770545795-om6kfdteals4shm8vrf6qoimottrcb9r.apps.googleusercontent.com';

function Header() {
  const headerItems = ['battle', 'top', 'donaters'];

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
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} className={styles.logo__img} alt="logo" />
          <span className={styles.logo__text}>TOP BABIES DANSHINA 8</span>
        </div>
        <ul className={styles.navbar}>
          {headerItems.map((item, index) => (
            <li className={styles.navbar__item} key={index}>
              <NavLink
                to={`/${item}`}
                key={index}
                className={({ isActive }) => (isActive ? styles.active : '')}>
                {item}
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
