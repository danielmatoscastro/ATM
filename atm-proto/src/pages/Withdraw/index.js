import { OperationPage } from 'components';
import { ChooseValue } from './ChooseValue';

const steps = [
  {
    name: 'Valor',
    path: '/valor',
    page: () => <ChooseValue />,
  },
  {
    name: 'Senha',
    path: '/senha',
    page: () => <h1>Senha</h1>,
  },
  {
    name: 'Fim',
    path: '/fim-saque',
    page: () => <h1>Fim</h1>,
  },
];

export const Withdraw = () => (
  <OperationPage steps={steps} />
);

export default Withdraw;
