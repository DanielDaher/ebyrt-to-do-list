import React, { useContext, useEffect, useRef } from 'react';
import loginContext from '../../context/LoginContext';
import '../../css/Tasks.css'; 
import Filters from './components/Filters';
import FormAddTask from './components/FormAddTask';
import RenderTask from './components/RenderTask';

export default function Tasks(props) {
  const { tasks, setTasks, getAllTasks } = useContext(loginContext);
  const fetchTasks = useRef(getAllTasks);

  const getTasksFromAPI = async () => {
    await fetchTasks.current();
  };

  useEffect(() => {
    getTasksFromAPI();
  }, []);

  return (
    <div className="tasks-content">
      <h1>Tasks</h1>
      <FormAddTask getTasks={getAllTasks} />
      <Filters tasks={tasks} setTasks={setTasks} />
      <div className="boards-content">
        <div className="first-board">
          <h3>Pending</h3>
          <RenderTask taskStatus='Pending'/>
        </div>
        <div className="second-board">
          <h3>In progress</h3>
          <RenderTask taskStatus='In Progress'/>
        </div>
        <div className="third-board">
          <h3>Concluded</h3>
          <RenderTask taskStatus='Concluded'/>
        </div>
      </div>
    </div>
  );
};