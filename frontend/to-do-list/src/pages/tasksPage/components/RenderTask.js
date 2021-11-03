import React, { useContext, useState } from 'react';
import loginContext from '../../../context/LoginContext';

export default function RenderTask(props) {
  const { taskStatus } = props;
  const [newTask, setNewTask] = useState('');
  const { tasks, renderButtonsOptions, renderSelectAndOptions, editTask, setEditTask, updateTaskById } = useContext(loginContext);

 const filteredTasksByStatus = tasks.filter((task) => task.status === taskStatus);
 console.log(filteredTasksByStatus, 'filtado');

  const saveNewTaskOnState = (value) => {
    setNewTask(value);
  };

  const sendNewTaskToUpdate = async (task) => {
    await updateTaskById(task.status, { ...task, task: newTask });
    setEditTask(false);
  };

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