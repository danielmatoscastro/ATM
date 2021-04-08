import { DefaultButton, MoneyInput } from 'components';
import { useCurrentOperation } from 'hooks';
import './style.css';

export const ChooseValue = () => {
  const { currentOperation, setPayload } = useCurrentOperation();

  const onChangeValue = (e) => setPayload({ ...currentOperation.payload, value: e.target.value });

  return (
    <>
      <h1 className="title">Escolha ou digite o valor do saque</h1>
      <div className="flex justify-around">
        <DefaultButton className="value-button" onClick={() => setPayload({ ...currentOperation.payload, value: '50' })}>
          R$ 50
        </DefaultButton>
        <DefaultButton className="value-button">
          R$ 175
        </DefaultButton>
        <DefaultButton className="value-button">
          R$ 500
        </DefaultButton>
      </div>

      <MoneyInput onChange={onChangeValue} value={currentOperation.payload.value ?? ''} focusOnMount label="R$" />
    </>
  );
};

export default ChooseValue;
