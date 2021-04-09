import { DefaultButton, MoneyInput } from 'components';
import { useCurrentOperation } from 'hooks';
import './style.css';

export const ChooseValue = () => {
  const { currentOperation, setPayload } = useCurrentOperation();

  const onChangeValue = (e) => setPayload({ ...currentOperation.payload, value: e.target.value });
  const onClickButton = (value) => () => setPayload({ ...currentOperation.payload, value });

  return (
    <>
      <h1 className="title">Escolha ou digite o valor do saque</h1>
      <div className="flex justify-around">
        <DefaultButton className="value-button" onClick={onClickButton('50')}>
          R$ 50
        </DefaultButton>
        <DefaultButton className="value-button" onClick={onClickButton('175')}>
          R$ 175
        </DefaultButton>
        <DefaultButton className="value-button" onClick={onClickButton('500')}>
          R$ 500
        </DefaultButton>
      </div>

      <MoneyInput onChange={onChangeValue} value={currentOperation.payload.value ?? ''} focusOnMount label="R$" />
    </>
  );
};

export const validateNext = (userAccount, payload, setErrorMessage) => {
  if (!payload.value) {
    setErrorMessage('Valor inválido. Tente novamente.');
    return false;
  }

  if (parseFloat(payload.value.replaceAll('.', '')) <= parseFloat(userAccount.ammount)) {
    return true;
  }

  setErrorMessage('Saldo insuficiente. Tente novamente.');
  return false;
};

export default ChooseValue;
