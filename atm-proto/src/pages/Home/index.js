import { Link } from 'react-router-dom';
import { useCurrentUser, useUsers } from 'hooks';
import { DefaultPage, DefaultMessage, DefaultButton } from 'components';
import { ReactComponent as DownArrow } from 'imgs/downArrow.svg';
import './style.css';

export const Home = () => {
  const { usersIds } = useUsers();
  const { setCurrentUser } = useCurrentUser();

  return (
    <DefaultPage>
      <div className="h-full flex flex-col justify-between items-center pb-7">
        <DefaultMessage className="uppercase">
          Insira seu cartão
        </DefaultMessage>
        <DownArrow className="w-16 h-16" />
        <Link to="/menu">
          <DefaultButton className="inserir-cartao-button" onClick={() => setCurrentUser(usersIds.EUCLIDES)}>
            Inserir cartão de Euclides
          </DefaultButton>
        </Link>
      </div>
    </DefaultPage>
  );
};

export default Home;
