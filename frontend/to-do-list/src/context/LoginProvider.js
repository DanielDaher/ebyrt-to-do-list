import React from 'react';
import LoginContext from './LoginContext';

export default function LoginProvider(props) {
  const { children } = props;
  const contextValue = {};

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};