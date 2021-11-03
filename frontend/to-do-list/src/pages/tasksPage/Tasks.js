import React, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react/cjs/react.development';
import loginContext from '../../context/LoginContext';
import '../../css/Tasks.css'; 
import FormAddTask from './components/FormAddTask';
import RenderTask from './components/RenderTask';

export default function Tasks(props) {
  const { token, separateTasksByStatus } = useContext(loginContext);
  const [tasks, setTasks] = useState({});
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
    <div className="tasks-content">
      <h1>Tasks</h1>
      <FormAddTask getTasks={getAllTasks} />
      <div className="boards-content">
        <div className="first-board">
          <h3>Pending</h3>
          {!tasks.pending ? null : tasks.pending.map(task => <RenderTask allInfosTask={task} getTasks={getAllTasks} key={task._id} />)}
        </div>
        <div className="second-board">
          <h3>In progress</h3>
          {!tasks.inProgress ? null : tasks.inProgress.map(task => <RenderTask allInfosTask={task} getTasks={getAllTasks} key={task._id} />)}
        </div>
        <div className="third-board">
          <h3>Concluded</h3>
          {!tasks.concluded ? null : tasks.concluded.map(task => <RenderTask allInfosTask={task} getTasks={getAllTasks} key={task._id} />)}
        </div>
      </div>
    </div>
  );
};