import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import LoginContext from './LoginContext';

export default function LoginProvider(props) {
  const [token, setToken] = useState('');

  useEffect(() => {
    const newToken = localStorage.getItem('toDoListToken');
    setToken(newToken);
  }, []);


  const { children } = props;
  const contextValue = {
    token,
    setToken,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};