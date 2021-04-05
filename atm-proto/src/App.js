import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu, Withdraw } from './pages';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/saque">
            <Withdraw />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
