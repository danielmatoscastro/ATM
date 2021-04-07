import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentOperationProvider } from 'contexts';
import { Menu, Withdraw, SecondaryMeny } from 'pages';

function App() {
  return (
    <CurrentOperationProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/saque">
              <Withdraw />
            </Route>
            <Route path="/outros">
              <SecondaryMeny />
            </Route>
            <Route path="/">
              <Menu />
            </Route>
          </Switch>
        </div>
      </Router>
    </CurrentOperationProvider>
  );
}

export default App;
