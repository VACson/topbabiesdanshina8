import React from 'react';

function GirlCard({ place, rating, img }) {
  const likes = [' лайк', ' лайка', ' лайків'];
  const dynamicLikesCounter = rating < 2 ? likes[0] : rating < 5 ? likes[1] : likes[2];
  return (
    <div className="girlcard  font-inter">
      <div className="girlcard__jumbotron">
        <img className="girlcard__photo" src={img} alt={rating}></img>
        <span className="girlcard__place">#{place}</span>
      </div>
      <div className="girlcard__jumbotron">
        <span className="girlcard__rating">
          {rating}
          {dynamicLikesCounter}
        </span>
      </div>
    </div>
  );
}

export default GirlCard;
