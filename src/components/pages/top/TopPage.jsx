import React from 'react';
import GirlCard from '../../components/girlcard/GirlCard';
import TopGirlCard from '../../components/girlcard/TopGirlCard';
// import { useGetAllBabiesQuery } from '../../../store/babiesAPI';
import { useSelector } from 'react-redux';

function TopPage() {
  // const { data, error, isLoading } = useGetAllBabiesQuery();
  // const data = useSelector((state) => state.babiesTop);
  let unsortedBabies = [...useSelector((state) => state.babiesTop)];
  const sortedBabies = unsortedBabies.sort((a, b) => (a.likes > b.likes ? 1 : -1)).reverse();

  // console.log(data);
  return (
    <div className="toppage">
      {
        // error ? (
        //   console.log(error)
        // ) : isLoading ? (
        //   <div>Loading...</div>
        // ) : data ?
        <>
          {/* <TopGirlCard data={data.babies_remain.slice(0, 4)} /> */}

          {/* {data.babies_remain.map(
            (girl, index) =>
              index > 2 && (
                <GirlCard
                  rating={girl.rating}
                  place={index + 1}
                  key={girl.baby.id}
                  img={girl.baby.get_image}
                />
              ),
          )} */}
          {/* {data.babies_leave.map(
            (girl, index) =>
              index > 2 && (
                <GirlCard
                  rating={girl.rating}
                  place={''}
                  key={girl.baby.id}
                  img={girl.baby.get_image}
                />
              ),
          )} */}
          <TopGirlCard data={sortedBabies.slice(0, 3)} />
          {sortedBabies.map(
            (girl, index) =>
              index > 2 && (
                <GirlCard
                  rating={girl.likes}
                  place={index + 1}
                  key={girl.babieID}
                  img={girl.babieID}
                />
              ),
          )}
        </>
        //  : null
      }
    </div>
  );
}

export default TopPage;
