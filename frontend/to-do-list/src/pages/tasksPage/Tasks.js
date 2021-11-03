import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import loginContext from '../../context/LoginContext';
import '../../css/Tasks.css'; 

export default function Tasks(props) {
  const { token, separateTasksByStatus, renderButtonsOptions, renderSelectAndOptions } = useContext(loginContext);
  const [updateTask, setUpdateTask] = useState(false);
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

  const renderTask = (allInfosTask) => {
    const { task, _id } = allInfosTask;
    if (updateTask) return (
      <div key={_id}>
        <input type="text" value={task}/>
      </div>
    );
    return (
      <div key={_id}>
        <p>
          {task}
        </p>
        {renderButtonsOptions(allInfosTask)}
        {renderSelectAndOptions(allInfosTask, getAllTasks)}
      </div>
    );
  };

  return (
    <div>
      <h1>Tasks</h1>
      <div className="boards-content">
        <div className="first-board">
          <h3>Pending</h3>
          {!tasks ? null : tasks.pending.map(task => renderTask(task))}
          <button>+</button>
        </div>
        <div className="second-board">
          <h3>In progress</h3>
          {!tasks ? null : tasks.inProgress.map(task => renderTask(task))}
          <button>+</button>
        </div>
        <div className="third-board">
          <h3>Concluded</h3>
          {!tasks ? null : tasks.concluded.map(task => renderTask(task))}
          <button>+</button>
        </div>
      </div>
    </div>
  );
};