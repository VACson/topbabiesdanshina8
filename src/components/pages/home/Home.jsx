import React, { useEffect } from 'react';
import styles from './homepage.module.scss';
import LoginButton from '../../components/login/Login';
import { gapi } from 'gapi-script';

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

  // var accessToken = gapi.auth.getToken().access_token;

  return (
    <div className={styles.homepage}>
      <span className={styles.homepage__jumbotron}>
        ПРИВІТ, ЦЕ ПЕРШИЙ СТАРТАП ПРОЄКТ ДАНЬШИНА 8, ЯКИЙ ПОЗВОЛИТЬ ВИБРАТИ ТОП БЕЙБУ ГУРТОЖИТКА,
        АБО СТАТИ НЕЮ...
      </span>
      <div className={styles.buttonblock}>
        <LoginButton className={styles.button__login}></LoginButton>
      </div>
    </div>
  );
}

export default Home;
