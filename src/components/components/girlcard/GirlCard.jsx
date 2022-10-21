import React from 'react';

function GirlCard({ place, rating, img }) {
  return (
    <div className="girlcard">
      <div className="girlcard__jumbotron">
        <img className="girlcard__photo" src={img} alt={rating}></img>
        <span className="girlcard__place">#{place}</span>
      </div>
      <span className="girlcard__rating">{rating}</span>
    </div>
  );
}

export default GirlCard;
