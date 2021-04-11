import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OperationPage, ErrorPage } from 'components';
import { useCurrentOperation, useOperations } from 'hooks';
import {
  InsertPassword,
  validateNext as validateNextInsertPassword,
} from './InsertPassword';
import { ShowAmmount } from './ShowAmmount';
import { EndBalance } from './EndBalance';

const stepNames = ['Senha', 'Valor', 'Fim'];

export const Balance = () => {
  const { operationsIds } = useOperations();
  const { currentOperation, initOperation } = useCurrentOperation();

  useEffect(() => {
    if (!currentOperation || !currentOperation.id || operationsIds.SALDO !== currentOperation.id) {
      initOperation(operationsIds.SALDO);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/saldo">
        <Redirect to="/saldo/senha" />
      </Route>
      <Route exact path="/saldo/valor">
        <OperationPage
          activeStep={1}
          stepNames={stepNames}
          nextPage="/saldo/fim-saldo"
          validateNext={() => true}
        >
          <ShowAmmount />
        </OperationPage>
      </Route>
      <Route exact path="/saldo/senha">
        <OperationPage
          activeStep={0}
          stepNames={stepNames}
          nextPage="/saldo/valor"
          validateNext={validateNextInsertPassword}
          isFirstPage
        >
          <InsertPassword />
        </OperationPage>
      </Route>
      <Route path="/saldo/fim-saldo">
        <OperationPage
          activeStep={2}
          stepNames={stepNames}
          nextPage="/menu"
          validateNext={() => {}}
          showButtonBack={false}
          showButtonContinue={false}
          isLastPage
        >
          <EndBalance />
        </OperationPage>
      </Route>
      <Route path={['/saldo/senha/error']}>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
export default Balance;
