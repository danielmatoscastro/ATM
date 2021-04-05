import { OperationPage } from '../../components';

const steps = [
  {
    name: 'Valor',
    path: '/valor',
    page: () => <h1>Valor</h1>,
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
