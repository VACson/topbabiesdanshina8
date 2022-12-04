import React, { useEffect } from 'react';
// import LoginButton from '../../components/login/Login';
import { gapi } from 'gapi-script';
import home1 from '../../../assets/img/home1.jpg';
import home2 from '../../../assets/img/home2.jpg';
import home3 from '../../../assets/img/home3.jpg';
import telegramIcon from '../../../assets/img/telegramIcon.svg';
import instagramIcon from '../../../assets/img/instagramIcon.svg';
import { useNavigate, Link } from 'react-router-dom';

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
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/addcard');
  };

  // const accessToken = gapi.auth.getToken().access_token;

  return (
    <div className="homepage font-roboto">
      <div className="homepage__container homepage__container--background">
        <img src={home1} className="homepage__photo" alt="" />
        <img src={home2} className="homepage__photo homepage__photo__desktop" alt="" />
        <img src={home3} className="homepage__photo" alt="" />
      </div>
      <div className="homepage__container">
        <div className="homepage__jumbotron">DANSHINA 8</div>
        <div className="homepage__jumbotron__second">
          Завантажуй, оцінюй, знайомся, будь у тренді
        </div>
        <div className="buttonblock">
          <Link to="/addcard" className="loginbutton">
            Увійти
          </Link>
          {/* <LoginButton className="button__login"></LoginButton> */}
        </div>
        <div className="homepage__contacts font-roboto">
          <Link to="/" className="homepage__contacts__link">
            <img src={telegramIcon} alt="" />
            Telegram
          </Link>
          <Link to="/" className="homepage__contacts__link">
            <img src={instagramIcon} alt="" />
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
