import React from 'react';
import styles from './girlcard.module.scss';

function TopGirlCard({ data }) {
  const top1 = 'gold';
  return (
    <div className={styles.topgirls}>
      <div className={`${styles.girlcard} ${styles.girlcard__[top1]}`}>
        <div className={styles.girlcard__jumbotron}>
          <img
            className={styles.girlcard__photo}
            src={data[0].get_image}
            alt={data[0].rating}></img>
          <span className={styles.girlcard__description}>{data[0].description}</span>
          <span className={styles.girlcard__place}>#1</span>
          <span className={styles.girlcard__rating}>{data[0].rating}</span>
        </div>
      </div>
      <div className={`${styles.girlcard} ${styles.girlcard__silver}`}>
        <div className={styles.girlcard__jumbotron}>
          <img
            className={styles.girlcard__photo}
            src={data[1].get_image}
            alt={data[1].rating}></img>
          <span className={styles.girlcard__description}>{data[1].description}</span>
          <span className={styles.girlcard__place}>#2</span>
          <span className={styles.girlcard__rating}>{data[1].rating}</span>
        </div>
      </div>
      <div className={`${styles.girlcard} ${styles.girlcard__bronze}`}>
        <div className={styles.girlcard__jumbotron}>
          <img
            className={styles.girlcard__photo}
            src={data[2].get_image}
            alt={data[2].rating}></img>
          <span className={styles.girlcard__description}>{data[2].description}</span>
          <span className={styles.girlcard__place}>#3</span>

          <span className={styles.girlcard__rating}>{data[2].rating}</span>
        </div>
      </div>
    </div>
  );
}

export default TopGirlCard;
