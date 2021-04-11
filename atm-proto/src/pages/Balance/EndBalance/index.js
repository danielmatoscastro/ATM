import { useHistory } from 'react-router-dom';
import { useCurrentOperation } from 'hooks';
import { DefaultButton, DefaultMessage } from 'components';
import './style.css';

export const EndBalance = () => {
  const history = useHistory();
  const { finishCurrentOperation } = useCurrentOperation();

  const onClickButton = () => {
    finishCurrentOperation();
    history.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <DefaultMessage>
        <p>Operação bem-sucedida</p>
        <p>Remova seu cartão</p>
      </DefaultMessage>
      <DefaultButton className="retirar-cartao-button mt-7" onClick={onClickButton}>
        Retirar cartão
      </DefaultButton>
    </div>
  );
};

export default EndBalance;
