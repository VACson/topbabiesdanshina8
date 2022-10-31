import React, { useState, useEffect } from 'react';
import { ALL__BABIES } from '../../../assets/img/babies/ALLBABIES';
import heart from '../../../assets/img/heart.svg';

import classNames from 'classnames/bind';

import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updateBabie } from '../../../store/babiesTopTest/babiesTop';

function BattlePage() {
  const navigate = useNavigate();
  const photos = ALL__BABIES.sort(() => Math.random() - 0.5);
  const [likeCount, setLikeCount] = useState(0);
  const [currentBabies, setCurrentBabies] = useState([photos[likeCount], photos[likeCount + 1]]);
  const [likedBabies, setLikedBabies] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [photoIsAnimating, setPhotoIsAnimatin] = useState({ first: false, second: false });
  const dispatch = useDispatch();

  const likeBabie = (id, babieID) => {
    setIsAnimating(true);
    dispatch(updateBabie({ babieID, likes: 1 }));
    setPhotoIsAnimatin({
      ...photoIsAnimating,
      [id]: true,
    });
    setTimeout(() => {
      setCurrentBabies((currentBabies) => [photos[likeCount], photos[likeCount + 1]]);
      setLikedBabies((likedBabies) => [...likedBabies, id]);
      setLikeCount((likeCount) => likeCount + 2);
      setPhotoIsAnimatin({
        ...photoIsAnimating,
        [id]: false,
      });
      setIsAnimating(false);
    }, 1000);
  };
  const onLikeClick = (id, babieID) => (isAnimating ? undefined : likeBabie(id, babieID));
  useEffect(
    () => {
      likedBabies.length > 14 || likedBabies.length === 15 ? navigate('/top') : null;
    }, // eslint-disable-next-line
    [likedBabies],
  );
  return (
    <div>
      {likeCount < 30 && (
        <div className="wrapper">
          <div className="battlePage__container">
            <img className="photo__blur" src={currentBabies[0]} alt="" />
            <img
              className={classNames(`photo__main`, {
                'photo__main--active': photoIsAnimating.first,
              })}
              src={currentBabies[0]}
              alt=""
            />
            <img
              src={heart}
              className={classNames(`heart`, { 'heart--active': photoIsAnimating.first })}
              onClick={() => onLikeClick('first', currentBabies[0])}
              alt=""
            />
          </div>
          <div className="battlePage__container">
            <img className="photo__blur" src={currentBabies[1]} alt="" />
            <img
              className={classNames(`photo__main`, {
                'photo__main--active': photoIsAnimating.second,
              })}
              src={currentBabies[1]}
              alt=""
            />
            <img
              src={heart}
              className={classNames(`heart`, { 'heart--active': photoIsAnimating.second })}
              onClick={() => onLikeClick('second', currentBabies[1])}
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default BattlePage;
