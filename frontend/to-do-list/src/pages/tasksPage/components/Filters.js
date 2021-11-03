import React, { useContext } from 'react';
import '../../../css/FormAddTask.css'; 
import loginContext from '../../../context/LoginContext';

export default function Filters(props) {
  const { reverse, setReverse, alphabeticalTasks, setAlphabeticalTasks, getAllTasks } = useContext(loginContext);

  const reverseTasks = () => {
    setReverse(true);
    console.log(reverse);
  };

  const orderTasksByName = async () => {
    if (!alphabeticalTasks) {
      setAlphabeticalTasks(true);
    }
    if (alphabeticalTasks) {
      setAlphabeticalTasks(false);
    }
    await getAllTasks();
    console.log(alphabeticalTasks);
  };

  return(
    <form>
      <label>
        alphabetical order
        <input type="checkbox" value="alphabetical order" onClick={() => orderTasksByName()} />
      </label>
      <label>
        creation date
        <input type="checkbox" value="creation date" onChange={() => reverseTasks()}/>
      </label>
    </form>
  );
};