import React from 'react';
import logo from '../../../assets/img/logo.png'
import styles from './girlcard.module.scss'

function GirlCard({ place, rating }) {
  return <div className={styles.girlcard}>
    <div className={styles.girlcard__jumbotron}>
      <img className={styles.girlcard__photo} src={logo} alt={rating}></img>
      <span className={styles.girlcard__place}>#{place}</span>
    </div>
    <span className={styles.girlcard__rating}>{rating}</span>
  </div>;
}

export default GirlCard;
