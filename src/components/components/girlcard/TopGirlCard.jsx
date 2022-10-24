import React from 'react';

function TopGirlCard({ data }) {
  const stylesArr = ['girlcard__gold', 'girlcard__silver', 'girlcard__bronze'];
  return (
    <div className="topgirls font-inter">
      {data.map((girl, index) => (
        <div className={`girlcard ${stylesArr[index]}`} key={girl.babieID}>
          <div className="girlcard__jumbotron">
            <img className="girlcard__photo" src={girl.babieID} alt={girl.babieID}></img>
          </div>
          <div className="girlcard__jumbotron">
            <span className="girlcard__place">#{index + 1}</span>
            <span className="girlcard__rating">{girl.likes} лайків</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopGirlCard;
