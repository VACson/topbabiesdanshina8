import React from 'react';
import top2 from '../../../assets/img/top2.jpg';
import top3 from '../../../assets/img/top3.jpg';
import heart from '../../../assets/img/heart.svg';
import styles from './battle.module.scss';

function BattlePage() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.photo__container}>
          <img className={styles.photo__blur} src={top2} alt="" />
          <div className={styles.photowrapper}>
            <img src={heart} className={styles.photo__heart} alt="" />
            <img className={styles.photo} src={top2} alt="" />
          </div>
        </div>
        <div className={styles.photo__container}>
          <img className={styles.photo__blur} src={top3} alt="" />
          <div className={styles.photowrapper}>
            <img src={heart} className={styles.photo__heart} alt="" />
            <img className={styles.photo} src={top3} alt="" />
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BattlePage;
