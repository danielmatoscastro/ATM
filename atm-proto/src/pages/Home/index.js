import { Link } from 'react-router-dom';
import { useCurrentUser, useUsers, useLog } from 'hooks';
import { DefaultPage, DefaultMessage, DefaultButton } from 'components';
import { ReactComponent as DownArrow } from 'imgs/downArrow.svg';
import './style.css';

export const Home = () => {
  const { usersIds } = useUsers();
  const { setCurrentUser } = useCurrentUser();
  const { logStart } = useLog();

  const onClickHandler = () => {
    logStart();
    setCurrentUser(usersIds.EUCLIDES);
  };

  return (
    <DefaultPage>
      <div className="h-full flex flex-col justify-between items-center pb-7">
        <DefaultMessage className="uppercase">
          Insira seu cartão
        </DefaultMessage>
        <DownArrow className="w-16 h-16" />
        <Link to="/menu">
          <DefaultButton className="inserir-cartao-button" onClick={onClickHandler}>
            Inserir cartão de Euclides
          </DefaultButton>
        </Link>
      </div>
    </DefaultPage>
  );
};

export default Home;
