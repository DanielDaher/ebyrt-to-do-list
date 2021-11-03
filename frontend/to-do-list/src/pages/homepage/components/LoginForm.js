import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../css/LoginForm.css';

export default function LoginForm(props) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setShowError] = useState(false);

  const saveTokenAndLocalStorage = (token) => {
    localStorage.setItem("toDoListToken", token);
  };

  const renderizeSubmitButton = () => {
    return (
      <button
        type="submit"
        onSubmit={(e) => makeLogin(e)} >
        Login
      </button>
    );
  };

  const showLoginError = () => {
    return (
      <div>
        <p className="login-error-message">{showError}</p>
        <button type="button"
        onClick={() => setShowError(false)}
        >
          OK
        </button>
      </div>
    );
  };

  const redirectToTasks = () => {
    setUser('');
    setPassword('');
    window.location.href = `${window.origin}/tasks`;
  };

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

    const APIresponse = await requisition.json();
    if (APIresponse.message) return setShowError(APIresponse.message);

    saveTokenAndLocalStorage(APIresponse.token);
    redirectToTasks();
  };

  return (
    <form onSubmit={(e) => makeLogin(e)}>
      <label>
        User
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <label>
        Password
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      {showError ? showLoginError() : renderizeSubmitButton()}
      <Link to="/characters" className="login-form-link">
        <p>Not registered yet? Click here!</p>
      </Link>
    </form>
  );
};
