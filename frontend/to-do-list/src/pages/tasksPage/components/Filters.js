import React, { useContext } from 'react';
import '../../../css/FormAddTask.css'; 
import loginContext from '../../../context/LoginContext';

export default function Filters(props) {
  const { alphabeticalTasks, setAlphabeticalTasks, getAllTasks } = useContext(loginContext);


  console.log(alphabeticalTasks, 'alphabeticalTasks');

  const orderTasks = (value) => {
    switch (value) {
      case 'Alphabetical order':
        orderTasksByName();
        break;
      default:
        break;
    }
  };

  const orderTasksByName = async () => {
    setAlphabeticalTasks(!alphabeticalTasks);
    await getAllTasks();
    console.log(alphabeticalTasks, 'alphabeticalTasks');
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