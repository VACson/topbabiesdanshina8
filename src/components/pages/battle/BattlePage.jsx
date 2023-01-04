import React, { useState, useEffect } from 'react';
import heart from '../../../assets/img/heart.svg';
import classNames from 'classnames/bind';

function BattlePage() {
  const getBabies = [
    {
      id: 'id1',
      name: 'girl',
      description: 'desc',
      image: 'https://touch-magazine.eu/persons/dossier/img/miss-top-model-ukraine-1.jpg',
      likes: 0,
    },
    {
      id: 'id2',
      name: 'girl',
      description: 'desc',
      image: 'https://touch-magazine.eu/persons/dossier/img/miss-top-model-ukraine-1.jpg',
      likes: 0,
    },
  ];
  const [babies, setBabies] = getBabies;
  let iterator = 0;
  const [currentBabies, setCurrentBabies] = [babies[iterator], babies[iterator + 1]];
  const [isAnimating, setIsAnimating] = useState(false);
  const [photoIsAnimating, setPhotoIsAnimatin] = useState({ first: false, second: false });
  let likedBabies = [];
  const likeBabie = (number, id) => {
    setIsAnimating(true);
    setPhotoIsAnimatin({
      ...photoIsAnimating,
      [number]: true,
    });
    likedBabies = [...likedBabies, id];

    setTimeout(() => {
      // iterator = +2;
      setPhotoIsAnimatin({
        ...photoIsAnimating,
        [number]: false,
      });
      setIsAnimating(false);
    }, 1000);
  };
  const onLikeClick = (number, id) => (isAnimating ? undefined : likeBabie(number, id));
  useEffect(() => {
    likedBabies.length > 14 ? postBabies([likedBabies]) : null;
  }),
    [likedBabies];
  return (
    <div>
      {likedBabies.length < 30 && (
        <div className="wrapper">
          <div className="battlePage__container">
            <img className="photo__blur" src={getBabies[0].image} alt="" />
            <img
              className={classNames(`photo__main`, {
                'photo__main--active': photoIsAnimating.first,
              })}
              src={getBabies[0].image}
              alt=""
            />
            <img
              src={heart}
              className={classNames(`heart`, { 'heart--active': photoIsAnimating.first })}
              onClick={() => onLikeClick('first', getBabies[0].id)}
              alt=""
            />
          </div>
          <div className="battlePage__container">
            <img className="photo__blur" src={getBabies[1].image} alt="" />
            <img
              className={classNames(`photo__main`, {
                'photo__main--active': photoIsAnimating.second,
              })}
              src={getBabies[1].image}
              alt=""
            />
            <img
              src={heart}
              className={classNames(`heart`, { 'heart--active': photoIsAnimating.second })}
              onClick={() => onLikeClick('second', getBabies[1].id)}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BattlePage;
