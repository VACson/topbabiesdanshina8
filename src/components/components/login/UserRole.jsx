import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserRole() {
  const navigate = useNavigate();

  const userBabie = () => {
    return navigate('/addcard');
  };
  const userViewer = () => {
    return navigate('/battle');
  };

  return (
    <div>
      <button onClick={() => userBabie()}>Я бейба</button>
      <button onClick={() => userViewer()}>Я не бейба</button>
    </div>
  );
}

export default UserRole;
