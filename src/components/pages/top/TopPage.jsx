import React from 'react';
import GirlCard from '../../components/girlcard/GirlCard';
import TopGirlCard from '../../components/girlcard/TopGirlCard';
import styles from './toppage.module.scss';
import { useGetAllBabiesQuery } from '../../../store/babiesAPI';

function TopPage() {
  const { data, error, isLoading } = useGetAllBabiesQuery();
  console.log(data, error, isLoading);
  return (
    <div className={styles.toppage}>
      {error ? (
        console.log(error)
      ) : isLoading ? (
        <div>Loading...</div>
      ) : data ? (
        <>
          <TopGirlCard data={data.babies_remain.slice(0, 4)} />
          {data.babies_remain.map(
            (girl, index) =>
              index > 2 && (
                <GirlCard
                  rating={girl.rating}
                  place={index + 1}
                  key={girl.baby.id}
                  img={girl.baby.get_image}
                />
              ),
          )}
          {data.babies_leave.map(
            (girl, index) =>
              index > 2 && (
                <GirlCard
                  rating={girl.rating}
                  place={''}
                  key={girl.baby.id}
                  img={girl.baby.get_image}
                />
              ),
          )}
        </>
      ) : null}
    </div>
  );
}

export default TopPage;
