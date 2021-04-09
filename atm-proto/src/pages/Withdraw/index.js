import { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OperationPage, ErrorPage } from 'components';
import { useCurrentOperation, useOperations } from 'hooks';
import {
  ChooseValue,
  validateNext as validateNextChooseValue,
} from './ChooseValue';
import {
  InsertPassword,
  validateNext as validateNextInsertPassword,
} from './InsertPassword';
import { EndWithdraw } from './EndWithdraw';

const stepNames = ['Valor', 'Senha', 'Fim'];

export const Withdraw = () => {
  const { operationsIds } = useOperations();
  const { currentOperation, initOperation } = useCurrentOperation();

  useEffect(() => {
    if (!currentOperation || !currentOperation.id || operationsIds.SAQUE !== currentOperation.id) {
      initOperation(operationsIds.SAQUE);
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/saque">
        <Redirect to="/saque/valor" />
      </Route>
      <Route exact path="/saque/valor">
        <OperationPage
          activeStep={0}
          stepNames={stepNames}
          nextPage="/saque/senha"
          validateNext={validateNextChooseValue}
          isFirstPage
        >
          <ChooseValue />
        </OperationPage>
      </Route>
      <Route exact path="/saque/senha">
        <OperationPage
          activeStep={1}
          stepNames={stepNames}
          nextPage="/saque/fim-saque"
          validateNext={validateNextInsertPassword}
        >
          <InsertPassword />
        </OperationPage>
      </Route>
      <Route path="/saque/fim-saque">
        <OperationPage
          activeStep={2}
          stepNames={stepNames}
          nextPage="/menu"
          validateNext={() => {}}
          showButtonBack={false}
          showButtonContinue={false}
          isLastPage
        >
          <EndWithdraw />
        </OperationPage>
      </Route>
      <Route path={['/saque/valor/error', '/saque/senha/error']}>
        <ErrorPage />
      </Route>
    </Switch>
  );
};
export default Withdraw;
