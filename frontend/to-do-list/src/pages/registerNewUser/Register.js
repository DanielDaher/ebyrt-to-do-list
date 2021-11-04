import React, { useContext, useState } from 'react';
import loginContext from '../../context/LoginContext';

export default function Register() {
  const { token } = useContext(loginContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showNewUser, setShowNewUser] = useState('');

  const createUser = async (event, { userName, password }) => {
    event.preventDefault();
    try {
      const url = 'http://localhost:3000/users/';
    
      const registerUser = await fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          userName,
          password,
        }),
      });
      const registerInfo = await registerUser.json();
      setShowNewUser(registerInfo); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="login-form">
      <label>
        Choose your username
        <input type="text" onChange={(e) => setUserName(e.target.value)} />
      </label>
      <label>
        Choose your password
        <input type="password" onChange={(e) => setPassword(e.target.value)}/>
      </label>
        <button type="submit" onClick={(e) => createUser(e, { userName, password })}>Register</button>
        {showNewUser === '' ? null : <p>{showNewUser}</p>}
    </form>
  );
};