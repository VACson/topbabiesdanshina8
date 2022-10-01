import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

import styles from './login.module.scss';

const clientId = '567770545795-om6kfdteals4shm8vrf6qoimottrcb9r.apps.googleusercontent.com';

function Login() {
  const navigate = useNavigate();
  const onSuccess = (res) => {
    console.log('Login Success. Current user: ', res.profileObj);
    return navigate('/userrole');
  };
  const onFailure = (res) => {
    console.log('Login Success. Current user: ', res);
  };
  return (
    <div id="signInButton" className={styles.logincontainer}>
      <GoogleLogin
        className={styles.loginbutton}
        clientId={clientId}
        buttonText="Почати баттл"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
