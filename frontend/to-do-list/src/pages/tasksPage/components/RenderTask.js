import React, { useContext, useState } from 'react';
import loginContext from '../../../context/LoginContext';

export default function RenderTask(props) {
  const { allInfosTask, getTasks } = props;
  const [newTask, setNewTask] = useState(allInfosTask.task);
  const { renderButtonsOptions, renderSelectAndOptions, editTask, setEditTask, updateTaskById } = useContext(loginContext);

  const { status, _id, task } = allInfosTask;

  const saveNewTaskOnState = (value) => {
    setNewTask(value);
  };

  const sendNewTaskToUpdate = async (status, getTasks, allInfosTask) => {
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
      <button type="button" onClick={() => sendNewTaskToUpdate(status, getTasks, allInfosTask)}>OK</button>
    </div>
  );

  return (
    <div key={_id}>
    <p>
      {task}
    </p>
    {renderButtonsOptions(allInfosTask, getTasks)}
    {renderSelectAndOptions(allInfosTask, getTasks)}
  </div>
  );
};