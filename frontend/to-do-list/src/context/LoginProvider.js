import LoginContext from './LoginContext';

export default function LoginProvider(props) {
  const token = localStorage.getItem("toDoListToken") || null;
  
  const separateTasksByStatus = (tasks) => {
    const pending = 'pendente';
    const inProgress = 'em progresso';

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

  const { children } = props;
  const contextValue = {
    token,
    separateTasksByStatus,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};