import LoginContext from './LoginContext';

export default function LoginProvider(props) {
  const token = localStorage.getItem("toDoListToken") || null;
  
  const separateTasksByStatus = (tasks) => {
    const pending = 'Pending';
    const inProgress = 'In Progress';

    const dividedTasks = {
      pending: [],
      inProgress: [],
      concluded: [],
    };
    tasks.forEach((task) => {
      switch (task.status) {
        case pending:
          dividedTasks.pending.push(task);
          break;
        case inProgress:
          dividedTasks.inProgress.push(task);
          break;
        default:
          dividedTasks.concluded.push(task);
          break;
      }
    })
    return dividedTasks;
  };

  const updateTaskById = async (status, getAllTasks, { task, _id }) => {
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

  const renderButtonsOptions = (task) => {
    return (
      <div>
        <button type="button">X</button>
        <button type="button">Edit</button>
      </div>
    );
  };

  const renderSelectAndOptions = (task, getAllTasks) => {
    return (
      <select onChange={(e) => updateTaskById(e.target.value, getAllTasks, task)}>
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
    separateTasksByStatus,
    renderButtonsOptions,
    renderSelectAndOptions,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};