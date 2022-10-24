import React, { useEffect } from 'react';
import LoginButton from '../../components/login/Login';
import { gapi } from 'gapi-script';
import home1 from '../../../assets/img/home1.jpg';
import home2 from '../../../assets/img/home2.jpg';
import home3 from '../../../assets/img/home3.jpg';

const clientId = '567770545795-om6kfdteals4shm8vrf6qoimottrcb9r.apps.googleusercontent.com';

function Home() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    }
    gapi.load('client:auth2', start);
  });

  // const accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="homepage">
      <div className="homepage__container">
        <img src={home1} className="homepage__photo" alt="" />
        <img src={home2} className="homepage__photo homepage__photo__desktop" alt="" />
        <img src={home3} className="homepage__photo" alt="" />

        <div className="homepage__jumbotron">DANSHINA 8</div>
        <div className="homepage__jumbotron__second">
          Завантажуй, оцінюй, знайомся, будь у тренді
        </div>
        <div className="buttonblock">
          <LoginButton className="button__login"></LoginButton>
        </div>
      </div>
    </div>
  );
}

export default Home;
