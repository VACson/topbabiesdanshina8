import React from 'react';
import GirlCard from '../../components/girlcard/GirlCard';
import TopGirlCard from '../../components/girlcard/TopGirlCard';
import { useSelector } from 'react-redux';

function TopPage() {
  // const { data, error, isLoading } = useGetAllBabiesQuery();
  const data = [];
  const sortedBabies = data.sort((a, b) => (a.likes > b.likes ? 1 : -1)).reverse();

  // console.log(data);
  return (
    <div className="toppage">
      <>
        <TopGirlCard data={sortedBabies.slice(0, 3)} />
        {sortedBabies.map(
          (girl, index) =>
            index > 2 && (
              <GirlCard rating={girl.likes} place={index + 1} key={girl.id} img={girl.image} />
            ),
        )}
      </>
    </div>
  );
}

export default TopPage;
