import { useState } from 'react';
import LoginContext from './LoginContext';

export default function LoginProvider(props) {
  const token = localStorage.getItem("toDoListToken") || null;
  const [editTask, setEditTask] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [alphabeticalTasks, setAlphabeticalTasks] = useState(false);
  const [tasks, setTasks] = useState([]);

  const getAllTasks = async () => {
    console.log('getAllTasks');   
    try {
      const url = 'http://localhost:3000/tasks';
    
      const requisition = await fetch(url, {
        method: "GET",
        headers: new Headers({
          'Authorization': token,
          'Content-Type': 'application/json',
        }),
      });
      const APIresponse = await requisition.json();
      if (alphabeticalTasks) {
        console.log('if');
        const sorted = APIresponse.sort((a, b) => {
          if (a.task < b.task) {
            return -1
          }
          if (a.task > b.task) {
            return 1;
          }
          return 0;
        });
        console.log(sorted, 'sorted');
        setTasks(sorted);
      }     
      setTasks(APIresponse);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTaskById = async (status, { task, _id }) => {
    if (status === 'Change status') return null;
    try {
      const url = `http://localhost:3000/tasks/${_id}`;
    
      await fetch(url, {
        method: "PUT",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          task,
          status,
        }),
      });
      await getAllTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async ({ task, status }, getTasks) => {
    try {
      const url = 'http://localhost:3000/tasks/';
    
      await fetch(url, {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
        body: JSON.stringify({
          task,
          status,
        }),
      });
      await getTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const removeTaskById = async ({ _id }) => {
    try {
      const url = `http://localhost:3000/tasks/${_id}`;
    
      await fetch(url, {
        method: "DELETE",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': token
        },
      });
      await getAllTasks();
    } catch (error) {
      console.error(error);
    }
  };

  const renderButtonsOptions = (task) => {
    return (
      <div>
        <button type="button" onClick={() => removeTaskById(task)}>X</button>
        <button type="button" onClick={() => setEditTask(true)}>Edit</button>
      </div>
    );
  };

  const renderSelectAndOptions = (task) => {
    return (
      <select onChange={(e) => updateTaskById(e.target.value, task)}>
        <option>Change status</option>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Concluded">Concluded</option>
      </select>
    );
  };

  const { children } = props;
  const contextValue = {
    token,
    renderButtonsOptions,
    renderSelectAndOptions,
    editTask,
    setEditTask,
    updateTaskById,
    addTask,
    tasks,
    setTasks,
    getAllTasks,
    reverse,
    setReverse,
    setAlphabeticalTasks,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};