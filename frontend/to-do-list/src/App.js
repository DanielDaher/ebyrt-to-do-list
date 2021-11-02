import './css/App.css';
import Home from './pages/homepage/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Home />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
