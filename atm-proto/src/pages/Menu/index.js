import { Link } from 'react-router-dom';
import { DefaultPage, DefaultButton } from 'components';
import { useOperations } from 'hooks';
import './style.css';

export const Menu = () => {
  const { operations, operationsIds } = useOperations();
  const operationsTop3 = operations.slice(0, 3);

  return (
    <DefaultPage>
      <h1>Escolha a operação</h1>
      <div className="flex justify-around mt-16 mb-12">
        {operationsTop3.map((operation) => (
          <Link key={operation.id} to={operation.path}>
            <DefaultButton className={`main-menu-button ${operation.id === operationsIds.TRANSFERENCIA ? 'transferencia' : ''}`}>
              <div className="my-9">{operation.name}</div>
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
