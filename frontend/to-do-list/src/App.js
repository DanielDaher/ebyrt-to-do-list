import './css/App.css';
import Home from './pages/homepage/Home';
import Tasks from './pages/tasksPage/Tasks';
import LoginProvider from './context/LoginProvider';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <LoginProvider>
        <Route exact path='/' component={ Home } />
        <Route exact path='/tasks' component={ Tasks } />
        </LoginProvider>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
