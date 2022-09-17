import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import styles from "./header.module.scss";

function Header() {
  const headerItems = ['battle', "top", "donaters"];
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
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
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
