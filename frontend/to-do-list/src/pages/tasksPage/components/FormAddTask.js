import React, { useContext, useState } from 'react';
import '../../../css/FormAddTask.css'; 
import loginContext from '../../../context/LoginContext';

export default function FormAddTask(props) {
  const { getTasks } = props;
  const [newTask, setNewTask] = useState('');
  const { addTask } = useContext(loginContext);

  const addNewTask = () => {
    const infoTask = {
      task: newTask,
      status: 'Pending',
    };

    addTask(infoTask, getTasks);
  };

  return (
    <form className="add-task-form">
      <input
        type="text"
        placeholder="add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => addNewTask()}>+</button>
    </form>
  );
};