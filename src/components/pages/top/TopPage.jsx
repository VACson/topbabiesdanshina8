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
          <TopGirlCard data={data.slice(0, 4)} />
          {data.map(
            (babie, index) =>
              index > 2 && (
                <GirlCard
                  rating={babie.rating}
                  place={index + 1}
                  key={index}
                  img={babie.get_image}
                />
              ),
          )}
        </>
      ) : null}
    </div>
  );
}

export default TopPage;
