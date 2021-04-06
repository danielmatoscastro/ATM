import { OperationPage } from 'components';
import { ChooseValue } from './ChooseValue';
import { InsertPassword } from './InsertPassword';
import { EndWithdraw } from './EndWithdraw';

const steps = [
  {
    name: 'Valor',
    path: '/valor',
    page: () => <ChooseValue />,
  },
  {
    name: 'Senha',
    path: '/senha',
    page: () => <InsertPassword />,
  },
  {
    name: 'Fim',
    path: '/fim-saque',
    page: () => <EndWithdraw />,
  },
];

export const Withdraw = () => (
  <OperationPage steps={steps} />
);

export default Withdraw;
