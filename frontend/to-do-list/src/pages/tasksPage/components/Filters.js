import React, { useContext } from 'react';
import '../../../css/FormAddTask.css'; 
import loginContext from '../../../context/LoginContext';

export default function Filters(props) {
  const { alphabeticalTasks, setAlphabeticalTasks, tasksByDate, setTasksByDate } = useContext(loginContext);

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
    setTasksByDate(!tasksByDate);
  };

  const orderTasksByName = async () => {
    setAlphabeticalTasks(!alphabeticalTasks);
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