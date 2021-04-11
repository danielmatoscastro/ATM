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
              <Route path="/deposito">
                <NotImplementedYet operationId={operationsIds.DEPOSITO} />
              </Route>
              <Route path="/pagar-boleto-bancario">
                <NotImplementedYet operationId={operationsIds.PAGAR_BOLETO} />
              </Route>
              <Route path="/fatura-do-cartao-de-credito">
                <NotImplementedYet operationId={operationsIds.FATURA_CARTAO} />
              </Route>
              <Route path="/recarga-de-celular">
                <NotImplementedYet operationId={operationsIds.RECARGA} />
              </Route>
              <Route path="/investimentos">
                <NotImplementedYet operationId={operationsIds.INVESTIMENTOS} />
              </Route>
              <Route path="/emprestimo">
                <NotImplementedYet operationId={operationsIds.EMPRESTIMO} />
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
