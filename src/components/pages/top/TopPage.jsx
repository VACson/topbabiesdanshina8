import React from 'react';
import GirlCard from '../../components/girlcard/GirlCard';
import TopGirlCard from '../../components/girlcard/TopGirlCard';
import styles from './toppage.module.scss';

function TopPage() {
  const ALL_BABIES = [
    {
      rating: 1488,

      description:
        'ТОП 1  БЕЙБОЧКА НАЙКРАЩОГО ГУРТОЖИТКА ІН ЗЕ ВОРДЛ, ТУТ ПОВИННО БУТИ НАПИСАНО ЩОСЬ ПРО НЕЇ, АЛЕ ПОКИ ЩО НЕВІДОМО ХТО Ж ЦЯ ОСОБА)',
    },
    {
      rating: 1440,
      description:
        'ДРУГЕ МІСЦЕ ЦЕ НЕ СИНОНІМ ПОРАЗКИ, ЦЕ ЛИШЕ ОЗНАЧАЄ, ЩО У КІЛЬКОХ ЛЮДЕЙ ПОГАНИЙ СМАК, І ЦЕ ТОЧНО НЕ ТІ, ХТО ГОЛОСУВАВ ЗА ЦЮ БЕЙБУ',
    },
    {
      rating: 1400,
      description:
        'НАЙКРАЩІ ЛЮДИ ЗАВЖДИ ОТРИМУВАЛИ ТРІЙКИ, ТОМУ ЩО ПІСЛЯ НИХ ВОНИ ЗАДУМУЮТЬСЯ І РОБЛЯЬ СЕБЕ КРАЩЕ)',
    },
    { rating: 322 },
    { rating: 288 },
    { rating: 228 },
    { rating: 220 },
    { rating: 200 },
    { rating: 188 },
    { rating: 160 },
    { rating: 100 },
  ];
  const topGirls = ALL_BABIES.slice(0, 4);
  return (
    <div className={styles.toppage}>
      <TopGirlCard top={topGirls} />
      {ALL_BABIES.map(
        (babie, index) =>
          index > 2 && <GirlCard rating={babie.rating} place={index + 1} key={index} />,
      )}
    </div>
  );
}

export default TopPage;
