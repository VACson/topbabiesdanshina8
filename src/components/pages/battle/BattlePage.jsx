import React from 'react';
import { ALL__BABIES } from '../../../assets/img/babies/ALLBABIES';
import heart from '../../../assets/img/heart.svg';
// import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { updateBabie } from '../../../store/babiesTopTest/babiesTop';

function BattlePage() {
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
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const likeBabie = (id, babieID) => {
    setTimeout(() => {
      dispatch(updateBabie({ babieID, likes: 1 }));
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
    }, 1500);
    setTimeout(() => {
      setActiveHeartClick({ ...activeHeartClick, [id]: `` });
    }, 3000);
  };

  React.useEffect(() => {
    // console.log('stylesArr', stylesArr, photos);
    likedBabies.length > 14 || likedBabies.length === 15
      ? window.location.reload(false)
      : console.log('liked', likedBabies, 'style', activeHeartClick);
  }, []);
  return (
    <div>
      {likeCount < 30 && (
        <div className="wrapper">
          <div className="photo__container">
            <img className="photo__blur" src={currentBabies[0]} alt="" />
            <img
              src={heart}
              className={`photo__heart ${activeHeartClick.first}`}
              onClick={() => likeBabie('first', currentBabies[0])}
              alt=""
            />
            <img className={`photo ${activePhotoClick.first}`} src={currentBabies[0]} alt="" />
          </div>
          <div className="photo__container">
            <img className="photo__blur" src={currentBabies[1]} alt="" />
            <img
              src={heart}
              className={`photo__heart ${activeHeartClick.second}`}
              onClick={() => likeBabie('second', currentBabies[1])}
              alt=""
            />
            <img className={`photo ${activePhotoClick.second}`} src={currentBabies[1]} alt="" />
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BattlePage;
