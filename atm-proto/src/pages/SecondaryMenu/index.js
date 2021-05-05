import { Link } from 'react-router-dom';
import { DefaultPage, DefaultButton } from 'components';
import { useOperations, useLog } from 'hooks';
import './style.css';

export const SecondaryMeny = () => {
  const { logStartOperation, logBack } = useLog();
  const { operations } = useOperations();

  const operationsSorted = operations.slice(3);

  const onClickOperationHandler = (op) => () => logStartOperation(op);
  const onClickBackHandler = () => logBack('Menu secundário');

  return (
    <DefaultPage>
      <h1>Escolha a operação</h1>
      <div className="flex flex-wrap justify-around mt-8 mb-5">
        {operationsSorted.map((operation) => (
          <Link key={operation.path} to={`${operation.path}`}>
            <DefaultButton
              onClick={onClickOperationHandler(operation.name)}
              className="secondary-menu-button mb-5"
            >
              <div className="px-3">{operation.name}</div>
            </DefaultButton>
          </Link>
        ))}
      </div>
      <div className="flex align-center justify-center">
        <Link to="/menu">
          <DefaultButton onClick={onClickBackHandler} className="secondary-menu-voltar">
            <div>voltar</div>
          </DefaultButton>
        </Link>
      </div>

    </DefaultPage>
  );
};
export default SecondaryMeny;
