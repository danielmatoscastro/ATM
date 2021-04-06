import { Link } from 'react-router-dom';
import { DefaultPage, DefaultButton } from 'components';
import withdraw from 'imgs/withdraw.png';
import receipt from 'imgs/receipt.png';
import sendMoney from 'imgs/sendMoney.png';
import './style.css';

export const Menu = () => (
  <DefaultPage>
    <h1>Escolha a operação</h1>
    <div className="flex justify-around mt-16 mb-12">
      <DefaultButton className="main-menu-button">
        <Link to="/saque">
          <div className="my-9">Saque</div>
          <img src={withdraw} alt="Saque" className="m-auto" />
        </Link>
      </DefaultButton>
      <DefaultButton className="main-menu-button">
        <div className="my-9">Saldo</div>
        <img src={receipt} alt="Saldo" className="m-auto" />
      </DefaultButton>
      <DefaultButton className="main-menu-button transferencia">
        <div className="my-9">Transferência</div>
        <img src={sendMoney} alt="Trasnferência" className="m-auto" />
      </DefaultButton>
    </div>

    <div className="flex align-center justify-center">
      <DefaultButton className="main-menu-button outros ">
        <div>Outros</div>
      </DefaultButton>
    </div>
  </DefaultPage>
);

export default Menu;
