import { DefaultButton, DefaultInput } from '../../../components';
import './style.css';

export const ChooseValue = () => (
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

    <DefaultInput label="R$" />
  </>
);

export default ChooseValue;
