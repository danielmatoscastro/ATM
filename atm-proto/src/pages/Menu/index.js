import { Link } from 'react-router-dom';
import { Textfit } from 'react-textfit';
import { DefaultPage, DefaultButton } from 'components';
import { useOperations, useLog } from 'hooks';
import './style.css';

export const Menu = () => {
  const { logStartOperation } = useLog();
  const { operations, operationsIds } = useOperations();
  const operationsTop3 = operations.slice(0, 3);

  // console.log(operations);

  return (
    <DefaultPage>
      <h1>Escolha a operação</h1>
      <div className="flex justify-around mt-16 mb-12">
        {operationsTop3.map((operation) => (
          <Link key={operation.id} to={operation.path}>
            <DefaultButton
              onClick={() => logStartOperation(operation.name)}
              className={`px-1 main-menu-button ${operation.id === operationsIds.TRANSFERENCIA ? 'transferencia' : ''}`}
            >
              <div className="my-9">
                <Textfit mode="multi" max={45} min={24}>
                  <span>{operation.name}</span>
                </Textfit>
              </div>
              {operation.img && <img src={operation.img} alt={operation.name} className="m-auto" />}
            </DefaultButton>
          </Link>
        ))}
      </div>

      <div className="flex align-center justify-center">
        <Link to="/outros">
          <DefaultButton className="main-menu-button outros">
            <div>Outros</div>
          </DefaultButton>
        </Link>
      </div>
    </DefaultPage>
  );
};

export default Menu;
