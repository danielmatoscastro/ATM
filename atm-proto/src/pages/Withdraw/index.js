import { OperationPage } from 'components';
import { useOperations } from 'hooks';
import { ChooseValue } from './ChooseValue';
import { InsertPassword } from './InsertPassword';
import { EndWithdraw } from './EndWithdraw';

const steps = [
  {
    name: 'Valor',
    path: '/valor',
    page: () => <ChooseValue />,
    validateNext: (userAccount, payload, setErrorMessage) => {
      if (payload.value <= userAccount.ammount) {
        return true;
      }

      setErrorMessage('Valor inválido.');
      return false;
    },
  },
  {
    name: 'Senha',
    path: '/senha',
    page: () => <InsertPassword />,
    validateNext: (userAccount, payload, setErrorMessage) => {
      if (payload.password === userAccount.password) {
        return true;
      }

      setErrorMessage('Senha inválida.');
      return false;
    },
  },
  {
    name: 'Fim',
    path: '/fim-saque',
    page: () => <EndWithdraw />,
    validateNext: () => {},
  },
];

export const Withdraw = () => {
  const { operationsIds } = useOperations();
  return (
    <OperationPage steps={steps} operationId={operationsIds.SAQUE} />
  );
};

export default Withdraw;
