import React from 'react';
import styles from './girlcard.module.scss';

function TopGirlCard({ data }) {
  console.log(data);
  const stylesArr = Object.entries(styles)?.map(([_, value]) => {
    return value;
  });
  return (
    <div className={styles.topgirls}>
      {data.map((girl, index) => (
        <div className={`${styles.girlcard} ${stylesArr[index + 1]}`} key={girl.baby.id}>
          <div className={styles.girlcard__jumbotron}>
            <img
              className={styles.girlcard__photo}
              src={girl.baby.get_image}
              alt={girl.rating}></img>
            <span className={styles.girlcard__description}>{girl.baby.description}</span>
            <span className={styles.girlcard__place}>#1</span>
            <span className={styles.girlcard__rating}>{girl.rating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopGirlCard;
