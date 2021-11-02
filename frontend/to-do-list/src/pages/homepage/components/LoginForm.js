import React from 'react';

export default function LoginForm() {
  return (
    <form>
      <label>
        User
        <input type="text" />
      </label>
      <label>
        Password
        <input type="text" />
      </label>
    </form>
  );
};