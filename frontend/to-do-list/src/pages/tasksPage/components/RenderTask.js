import React, { useContext, useState } from 'react';
import loginContext from '../../../context/LoginContext';

export default function RenderTask(props) {
  const { taskStatus } = props;
  const [newTask, setNewTask] = useState('');
  const { tasks, alphabeticalTasks, sortTasksByName, tasksByDate, sortTasksByDate, renderButtonsOptions, renderSelectAndOptions, editTask, setEditTask, updateTaskById } = useContext(loginContext);

  console.log(tasks);
  let filteredTasksByStatus = tasks.filter((task) => task.status === taskStatus);

  if (alphabeticalTasks) {
    filteredTasksByStatus = sortTasksByName(filteredTasksByStatus);
    console.log(filteredTasksByStatus);
  };

  if (tasksByDate) {
    filteredTasksByStatus = sortTasksByDate(filteredTasksByStatus);
    console.log(filteredTasksByStatus);
  }
  
  const saveNewTaskOnState = (value) => {
    setNewTask(value);
  };
  
  const sendNewTaskToUpdate = async (task) => {
    await updateTaskById(task.status, { ...task, task: newTask });
    setEditTask(false);
  };
  
  if (tasks === 'this user has no tasks yet!') return null;

  if (editTask) return (
    filteredTasksByStatus.map((task) => (
      <div key={task._id}>
        <input
          type="text"
          placeholder={`${task.task}`}
          onChange={(e) => saveNewTaskOnState(e.target.value)}
        />
        <button
          type="button"
          onClick={() => sendNewTaskToUpdate(task)}
          >
            OK
        </button>
      </div>
    ))
  );

  return (
    filteredTasksByStatus.map((task) => (
      <div key={task._id}>
      <p>
        {task.task}
      </p>
      {renderButtonsOptions(task)}
      {renderSelectAndOptions(task)}
    </div>
    ))
  );
};