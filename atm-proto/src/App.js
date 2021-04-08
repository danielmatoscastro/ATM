import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentUserProvider, CurrentOperationProvider } from 'contexts';
import {
  Home,
  Menu,
  Withdraw,
  SecondaryMeny,
} from 'pages';

function App() {
  return (
    <CurrentUserProvider>
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
              <Route path="/menu">
                <Menu />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </CurrentOperationProvider>
    </CurrentUserProvider>
  );
}

export default App;
