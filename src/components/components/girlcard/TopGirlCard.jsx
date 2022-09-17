import React from 'react';
import top1 from '../../../assets/img/top1.jpg';
import top2 from '../../../assets/img/top2.jpg';
import top3 from '../../../assets/img/top3.jpg';
import styles from './girlcard.module.scss';

function TopGirlCard({ top }) {
  return (
    <div className={styles.topgirls}>
      <div className={`${styles.girlcard} ${styles.girlcard__gold}`}>
        <div className={styles.girlcard__jumbotron}>
          <img className={styles.girlcard__photo} src={top1} alt={top[0].rating}></img>
          <span className={styles.girlcard__description}>{top[0].description}</span>
          <span className={styles.girlcard__place}>#1</span>
          <span className={styles.girlcard__rating}>{top[0].rating}</span>
        </div>
      </div>
      <div className={`${styles.girlcard} ${styles.girlcard__silver}`}>
        <div className={styles.girlcard__jumbotron}>
          <img className={styles.girlcard__photo} src={top2} alt={top[1].rating}></img>
          <span className={styles.girlcard__description}>{top[1].description}</span>
          <span className={styles.girlcard__place}>#2</span>
          <span className={styles.girlcard__rating}>{top[1].rating}</span>
        </div>
      </div>
      <div className={`${styles.girlcard} ${styles.girlcard__bronze}`}>
        <div className={styles.girlcard__jumbotron}>
          <img className={styles.girlcard__photo} src={top3} alt={top[2].rating}></img>
          <span className={styles.girlcard__description}>{top[2].description}</span>
          <span className={styles.girlcard__place}>#3</span>

          <span className={styles.girlcard__rating}>{top[2].rating}</span>
        </div>
      </div>
    </div>
  );
}

export default TopGirlCard;
