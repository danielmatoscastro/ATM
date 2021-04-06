import { Link, useRouteMatch } from 'react-router-dom';
import { DefaultPage, DefaultButton } from 'components';
import { useOperations } from 'hooks';
import './style.css';

export const SecondaryMeny = () => {
  const { path } = useRouteMatch();
  const { operations } = useOperations();

  const operationsSorted = operations.slice(3);

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
