import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/LoginForm.css';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const makeLogin = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/login';
    const requisition = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        userName: user,
        password,
      }),
    });
    const json = await requisition.json();
    console.log(json);
  };

  return (
    <form onSubmit={(e) => makeLogin(e)}>
      <label>
        User
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <label>
        Password
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button
        type="submit"
        onSubmit={(e) => makeLogin(e)} >
        Login
      </button>
      <Link to="/characters" className="login-form-link">
        <p>Not registered yet? Click here!</p>
      </Link>
    </form>
  );
};