import { OperationPage } from 'components';
import { useOperations } from 'hooks';
import {
  ChooseValue,
  validateNext as validateNextChooseValue,
  OnError as OnErrorChooseValue,
} from './ChooseValue';
import { InsertPassword, validateNext as validateNextInsertPassword } from './InsertPassword';
import { EndWithdraw } from './EndWithdraw';

const steps = [
  {
    name: 'Valor',
    path: '/valor',
    page: () => <ChooseValue />,
    validateNext: validateNextChooseValue,
    onError: (message) => <OnErrorChooseValue message={message} />,
  },
  {
    name: 'Senha',
    path: '/senha',
    page: () => <InsertPassword />,
    validateNext: validateNextInsertPassword,
  },
  {
    name: 'Fim',
    path: '/fim-saque',
    page: () => <EndWithdraw />,
    validateNext: () => {},
    showButtonBack: false,
    showButtonContinue: false,
  },
];

export const Withdraw = () => {
  const { operationsIds } = useOperations();

  return (
    <OperationPage steps={steps} operationId={operationsIds.SAQUE} />
  );
};

export default Withdraw;
