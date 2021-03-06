import { useHistory } from 'react-router-dom';
import { useCurrentOperation, useLog } from 'hooks';
import { DefaultButton, DefaultMessage } from 'components';
import './style.css';

export const EndWithdraw = () => {
  const history = useHistory();
  const { logEnd } = useLog();
  const { finishCurrentOperation } = useCurrentOperation();

  const onClickButton = () => {
    logEnd();
    finishCurrentOperation();
    history.push('/');
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <DefaultMessage>
        <p>Operação bem-sucedida</p>
        <p>Remova seu cartão e retire seu dinheiro</p>
      </DefaultMessage>
      <DefaultButton className="retirar-cartao-button mt-7" onClick={onClickButton}>
        Retirar cartão
      </DefaultButton>
    </div>
  );
};

export default EndWithdraw;
