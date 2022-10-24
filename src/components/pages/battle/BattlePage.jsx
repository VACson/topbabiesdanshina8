import React from 'react';
import { ALL__BABIES } from '../../../assets/img/babies/ALLBABIES';
import heart from '../../../assets/img/heart.svg';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { updateBabie } from '../../../store/babiesTopTest/babiesTop';

function BattlePage() {
  const navigate = useNavigate();
  const photos = ALL__BABIES.sort(() => Math.random() - 0.5);
  const [likeCount, setLikeCount] = React.useState(0);
  const [currentBabies, setCurrentBabies] = React.useState([
    photos[likeCount],
    photos[likeCount + 1],
  ]);
  const [likedBabies, setLikedBabies] = React.useState([]);
  const [activeHeartClick, setActiveHeartClick] = React.useState({
    first: ``,
    second: ``,
  });
  const [activePhotoClick, setActivePhotoClick] = React.useState({
    first: ``,
    second: ``,
  });
  const dispatch = useDispatch();
  const likeBabie = (id, babieID) => {
    dispatch(updateBabie({ babieID, likes: 1 }));
    setTimeout(() => {
      setActiveHeartClick({
        ...activeHeartClick,
        [id]: `photo__heart__active`,
      });
      setActivePhotoClick({
        ...activePhotoClick,
        [id]: `photo__active`,
      });
    }, 100);

    setTimeout(() => {
      setCurrentBabies((currentBabies) => [photos[likeCount], photos[likeCount + 1]]);
      setLikedBabies((likedBabies) => [...likedBabies, id]);
      setActivePhotoClick({ ...activePhotoClick, [id]: `` });
      setLikeCount((likeCount) => likeCount + 2);
      setActiveHeartClick({ ...activeHeartClick, [id]: `` });
    }, 1500);
    setTimeout(() => {}, 3000);
  };
  React.useEffect(
    () => {
      likedBabies.length > 14 || likedBabies.length === 15 ? navigate('/top') : null;
    }, // eslint-disable-next-line
    [likedBabies],
  );
  return (
    <div>
      {likeCount < 30 && (
        <div className="wrapper">
          <div className="photo__container">
            <img className="photo__blur" src={currentBabies[0]} alt="" />
            <div className={`photo__container__block ${activePhotoClick.first}`}>
              <img className="photo" src={currentBabies[0]} alt="" />
              <img
                src={heart}
                className={`photo__heart ${activeHeartClick.first}`}
                onClick={() => likeBabie('first', currentBabies[0])}
                alt=""
              />
            </div>
          </div>
          <div className="photo__container">
            <img className="photo__blur" src={currentBabies[1]} alt="" />
            <div className={`photo__container__block ${activePhotoClick.second}`}>
              <img className="photo" src={currentBabies[1]} alt="" />
              <img
                src={heart}
                className={`photo__heart ${activeHeartClick.second}`}
                onClick={() => likeBabie('second', currentBabies[1])}
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BattlePage;
