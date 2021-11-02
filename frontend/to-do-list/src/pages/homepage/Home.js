import '../../css/Home.css';
import React from 'react';
import LoginForm from './components/LoginForm';

export default function Home() {
  return (
    <div>
      <h1 className="home-title">To Do List</h1>
      <p className="home-subtitle">ADD NOTES TO YOUR LIFE!</p>
      <LoginForm />
    </div>
  );
};