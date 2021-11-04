import React, { useContext } from 'react';
import '../../../css/FormAddTask.css'; 
import loginContext from '../../../context/LoginContext';

export default function Filters() {
  const { setAlphabeticalTasks, setTasksByDate } = useContext(loginContext);

  const orderTasks = (value) => {
    switch (value) {
      case 'Alphabetical order':
        orderTasksByName();
        break;
      case 'Creation date':
        orderTasksByDate();
        break;
      default:
        break;
    }
  };

  const orderTasksByDate = async () => {
    setAlphabeticalTasks(false);
    setTasksByDate(true);
  };

  const orderTasksByName = async () => {
    setTasksByDate(false);
    setAlphabeticalTasks(true);
  };

  return (
    <form>
      <select onChange={(e) => orderTasks(e.target.value)}>
        <option>Order by</option>
        <option>Alphabetical order</option>
        <option>Creation date</option>
      </select>
    </form>
  );
};