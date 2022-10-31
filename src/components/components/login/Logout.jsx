import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '567770545795-om6kfdteals4shm8vrf6qoimottrcb9r.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    // console.log('Log out');
  };
  return (
    <div id="signInButton">
      <GoogleLogin clientId={clientId} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Logout;
