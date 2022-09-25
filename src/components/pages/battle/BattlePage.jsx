import React from 'react';
import top1 from '../../../assets/img/top1.jpg';
import top2 from '../../../assets/img/top2.jpg';
import top3 from '../../../assets/img/top3.jpg';
import styles from './battle.module.scss';

function BattlePage() {
  return (
      <div>
        <div className={styles.wrapper}>
            <div>
                <img className={styles.photo} src={top3} alt=""/>
                <div></div>
            </div>
            <div>
                <img className={styles.photo} src={top2} alt=""/>
                <div></div>
            </div>
        </div>
      </div>
  );
}

export default BattlePage;
