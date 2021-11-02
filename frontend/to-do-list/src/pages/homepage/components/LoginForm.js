import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/LoginForm.css';

export default function LoginForm() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const makeLogin = (e) => {
    e.preventDefault();
    console.log(user, password);
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