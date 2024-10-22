import React, { useState } from 'react';

import LoginPage from './LoginPage';


const FirstComponent = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleButtonClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="first-component">
      <button onClick={handleButtonClick}>Show Login</button>
      {showLogin && <LoginPage />}
    </div>
  );
};

export default FirstComponent;
