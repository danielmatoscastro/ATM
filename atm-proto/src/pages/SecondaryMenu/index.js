import { Link, useRouteMatch } from 'react-router-dom';
import { DefaultPage, DefaultButton } from 'components';
import './style.css';

const operations = [
  { name: 'Saque', path: '/saque', frequency: 1000 },
  { name: 'Saldo', path: '/saldo', frequency: 999 },
  { name: 'Transferência', path: '/transferencia', frequency: 998 },
  {
    name: 'Pagar boleto bancário',
    path: '/pagar-cartao-de-credito',
    frequency: 3,
  },
  {
    name: 'Fatura do cartão de crédito',
    path: '/fatura-do-cartao-de-credito',
    frequency: 0,
  },
  {
    name: 'Recarga de celular',
    path: '/recarga-de-celular',
    frequency: 4,
  },
  {
    name: 'Investimentos',
    path: '/investimentos',
    frequency: 1,
  },
  {
    name: 'Depósito',
    path: '/deposito',
    frequency: 6,
  },
  {
    name: 'Empréstimo',
    path: '/emprestimo',
    frequency: 5,
  },
];

export const SecondaryMeny = () => {
  const { path } = useRouteMatch();

  const operationsSorted = operations.sort((a, b) => {
    if (a.frequency === b.frequency) {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name === b.name) {
        return 0;
      }

      return 1;
    }

    // increasing order
    return -(a.frequency - b.frequency);
  }).slice(3);

  return (
    <DefaultPage>
      <h1>Escolha a operação</h1>
      <div className="flex flex-wrap justify-around mt-8 mb-5">
        {operationsSorted.map((operation) => (
          <Link key={operation.path} to={`${path}${operation.path}`}>
            <DefaultButton className="secondary-menu-button mb-5">
              <div className="px-3">{operation.name}</div>
            </DefaultButton>
          </Link>
        ))}
      </div>
      <div className="flex align-center justify-center">
        <Link to="/menu">
          <DefaultButton className="secondary-menu-voltar">
            <div>voltar</div>
          </DefaultButton>
        </Link>
      </div>

    </DefaultPage>
  );
};
export default SecondaryMeny;
