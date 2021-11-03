import React, { useContext } from 'react';
import '../../../css/FormAddTask.css'; 
import loginContext from '../../../context/LoginContext';

export default function Filters(props) {
  const { reverse, setReverse } = useContext(loginContext);

  const reverseTasks = () => {
    setReverse(true);
    console.log(reverse);
  };

  return(
    <form>
      <label>
        alphabetical order
        <input type="checkbox" value="alphabetical order"/>
      </label>
      <label>
        creation date
        <input type="checkbox" value="creation date" onChange={() => reverseTasks()}/>
      </label>
    </form>
  );
};