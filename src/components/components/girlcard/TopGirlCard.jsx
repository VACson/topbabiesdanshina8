import React from 'react';

function TopGirlCard({ data }) {
  console.log(data);
  const stylesArr = ['girlcard__gold', 'girlcard__silver', 'girlcard__bronze'];
  return (
    <div className="topgirls">
      {data.map((girl, index) => (
        // <div className={`'girlcard' ${stylesArr[index]}`} key={girl.baby.id}>
        <div className={`girlcard ${stylesArr[index]}`} key={girl.babieID}>
          <div className="girlcard__jumbotron">
            {/* <img
              className='girlcard__photo'
              src={girl.baby.get_image}
              alt={girl.rating}></img>
            <span className='girlcard__description'>{girl.baby.description}</span>
            <span className='girlcard__place'>#1</span>
            <span className='girlcard__rating'>{girl.rating}</span> */}
            <img className="girlcard__photo" src={girl.babieID} alt={girl.babieID}></img>
            <span className="girlcard__rating">{girl.likes}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopGirlCard;
