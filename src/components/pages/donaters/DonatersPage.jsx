import React from 'react';
import styles from './donaterspage.module.scss';

function DonatersPage() {
  const ALL_DONATERS = [
    { name: 'a', sum: 101 },
    { name: 'a', sum: 100 },
    { name: 'a', sum: 44 },
    { name: 'a', sum: 100 },
    { name: 'a', sum: 20 },
    { name: 'a', sum: 38 },
  ];
  const topdonater = ALL_DONATERS.reduce(
    (max, donater) => (+donater.sum > +max.sum ? donater : max),
    ALL_DONATERS[0],
  );
  const lastdonation = ALL_DONATERS.pop();
  return (
    <div className={styles.donaterspage}>
      <div
        className={`${styles.donater__block} ${styles.donater__block__jumbotron} ${styles.donater__block__jumbotron__topdonat}`}>
        <span>НАЙБІЛЬШИЙ ДОНАТ</span>
        <span className={styles.donater__item}>{topdonater.name}</span>
        <span className={styles.donater__item}>{topdonater.sum}</span>
      </div>
      <div className={`${styles.donater__block} ${styles.donater__block__jumbotron}`}>
        <span>ОСТАННІЙ ДОНАТ</span>
        <span className={styles.donater__item}>{lastdonation.name}</span>
        <span className={styles.donater__item}>{lastdonation.sum}</span>
      </div>
      {ALL_DONATERS.map((person, index) => (
        <div className={styles.donater__block} key={index}>
          <span className={styles.donater__item}>{person.name}</span>
          <span className={styles.donater__item}>{person.sum}</span>
        </div>
      ))}
    </div>
  );
}

export default DonatersPage;
