import React, { useEffect } from 'react';
import home3 from '../../../assets/img/home3.jpg';
import { Start } from '../../../assets/img/Start.jsx';
import { Link } from 'react-router-dom';
import { MouseParallaxContainer, MouseParallaxChild } from 'react-parallax-mouse';

function Home() {
  return (
    <MouseParallaxContainer
      className="homepage font-roboto"
      globalFactorX={0.1}
      globalFactorY={0.1}>
      <MouseParallaxChild factorX={0.3} factorY={0.3} className="homepage__container">
        <img src={home3} className="homepage__photo" alt="" />
      </MouseParallaxChild>
      <div className="homepage__jumbotron">TOP BABIES DANSHINA 8</div>
      <div className="homepage__jumbotron homepage__jumbotron__second">
        Бери участь, оцінюй, насолоджуйся
      </div>
      <Link to="/battle" className="loginbutton font-roboto">
        СТАРТ <Start />
      </Link>
    </MouseParallaxContainer>
  );
}

export default Home;
