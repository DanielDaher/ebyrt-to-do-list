import React, { useContext } from 'react';
import loginContext from '../../context/LoginContext';
import '../../css/Tasks.css';

export default function Tasks(props) {
  const { token, setToken } = useContext(loginContext);
  return (
    <div>
      <h1>Tasks</h1>
      <div className="boards-content">
        <div className="first-board">
          <h3>Pending</h3>
          <p>Tarefa1</p>
          <p>Tarefa1</p>
          <p>Tarefa1</p>
        </div>
        <div className="second-board">
          <h3>In progress</h3>
          <p>Tarefa1</p>
          <p>Tarefa1</p>
        </div>
        <div className="third-board">
          <h3>concluded</h3>
          <p>Tarefa1</p>
          <p>Tarefa1</p>
          <p>Tarefa1</p>
        </div>
      </div>
    </div>
  );
};