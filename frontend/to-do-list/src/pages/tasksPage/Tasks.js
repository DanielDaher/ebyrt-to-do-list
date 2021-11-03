import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import loginContext from '../../context/LoginContext';
import '../../css/Tasks.css'; 

export default function Tasks(props) {
  const { token, separateTasksByStatus } = useContext(loginContext);

  const [tasks, setTasks] = useState(null);
  const tokenRef = useRef(token);
  const separateTasks = useRef(separateTasksByStatus);

  const getAllTasks = async () => {
    try {
      const url = 'http://localhost:3000/tasks';
    
      const requisition = await fetch(url, {
        method: "GET",
        headers: new Headers({
          'Authorization': tokenRef.current,
          'Content-Type': 'application/json',
        }),
      });
      const APIresponse = await requisition.json();
  
      const allTasks = separateTasks.current(APIresponse);
      setTasks(allTasks);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <div className="boards-content">
        <div className="first-board">
          <h3>Pending</h3>
          {!tasks ?
            null : tasks.pending.map(({ task }, index) => <p key={index} >{task}</p>)}
        </div>
        <div className="second-board">
          <h3>In progress</h3>
          {!tasks ?
            null : tasks.inProgress.map(({ task }, index) => <p key={index} >{task}</p>)}
        </div>
        <div className="third-board">
          <h3>Concluded</h3>
          {!tasks ?
            null : tasks.concluded.map(({ task }, index) => <p key={index} >{task}</p>)}
        </div>
      </div>
    </div>
  );
};