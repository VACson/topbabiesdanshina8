import React from 'react';
import styles from './homepage.module.scss';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.homepage}>
      <span className={styles.homepage__jumbotron}>
        ПРИВІТ, ЦЕ ПЕРШИЙ СТАРТАП ПРОЄКТ ДАНЬШИНА 8, ЯКИЙ ПОЗВОЛИТЬ ВИБРАТИ ТОП БЕЙБУ ГУРТОЖИТКА,
        АБО СТАТИ НЕЮ...
      </span>
      <div className={styles.buttonblock}>
        <button className={styles.button}>
          <Link to="/battle">ПОЧАТИ БАТТЛ</Link>
        </button>
        <button className={`${styles.button} ${styles.button__addButton}`}>ДОДАТИ СЕБЕ</button>
      </div>
    </div>
  );
}

export default Home;
