import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CurrentUserProvider, CurrentOperationProvider } from 'contexts';
import { useOperations } from 'hooks';
import {
  Home,
  Menu,
  Withdraw,
  SecondaryMeny,
  Balance,
  NotImplementedYet,
} from 'pages';

function App() {
  const { operationsIds } = useOperations();

  return (
    <CurrentUserProvider>
      <CurrentOperationProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/saque">
                <Withdraw />
              </Route>
              <Route path="/saldo">
                <Balance />
              </Route>
              <Route path="/transferencia">
                <NotImplementedYet operationId={operationsIds.TRANSFERENCIA} />
              </Route>
              <Route path="/outros">
                <SecondaryMeny />
              </Route>
              <Route path="/menu">
                <Menu />
              </Route>
              <Route exact path="/">
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
