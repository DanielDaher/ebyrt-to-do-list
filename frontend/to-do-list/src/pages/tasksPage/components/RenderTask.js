import React, { useContext, useState } from 'react';
import loginContext from '../../../context/LoginContext';

export default function RenderTask(props) {
  const { taskStatus } = props;
  const { tasks, getAllTasks, renderButtonsOptions, renderSelectAndOptions, editTask, setEditTask, updateTaskById } = useContext(loginContext);

 const filteredTasksByStatus = tasks.filter((task) => task.status === taskStatus);

 /*  const saveNewTaskOnState = (value) => {
    setNewTask(value);
  };

  const sendNewTaskToUpdate = async (status, allInfosTask) => {
    await updateTaskById(status, getTasks, { ...allInfosTask, task: newTask });
    setEditTask(false);
  };

  if (editTask) return (
    <div key={_id}>
      <input
        type="text"
        placeholder="insert the new task"
        value={newTask}
        onChange={(e) => saveNewTaskOnState(e.target.value)}
      />
      <button
        type="button"
        onClick={() => sendNewTaskToUpdate(status, getTasks, allInfosTask)}
        >
          OK
      </button>
    </div>
  ); */

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