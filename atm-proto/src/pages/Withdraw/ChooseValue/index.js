import { useEffect } from 'react';
import { DefaultButton, DefaultInput } from 'components';
import { useOperations, useCurrentOperation } from 'hooks';
import './style.css';

export const ChooseValue = () => {
  const { operationsIds } = useOperations();
  const { currentOperation, initOperation } = useCurrentOperation();

  useEffect(() => {
    if (currentOperation?.id !== operationsIds.SAQUE) {
      initOperation(operationsIds.SAQUE);
    }
  },
  []);

  return (
    <>
      <h1 className="title">Escolha ou digite o valor do saque</h1>
      <div className="flex justify-around">
        <DefaultButton className="value-button">
          R$ 50
        </DefaultButton>
        <DefaultButton className="value-button">
          R$ 175
        </DefaultButton>
        <DefaultButton className="value-button">
          R$ 500
        </DefaultButton>
      </div>

      <DefaultInput focusOnMount label="R$" />
    </>
  );
};

export default ChooseValue;
