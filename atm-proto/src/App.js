import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Menu, ChoiceValue } from './pages';

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/withdraw/choice-value">
            <ChoiceValue />
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
