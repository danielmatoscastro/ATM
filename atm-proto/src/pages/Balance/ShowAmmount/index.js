import { useCurrentUser } from 'hooks';
import { MoneyInput } from 'components';

export const ShowAmmount = () => {
  const { currentUser } = useCurrentUser();

  return (
    <>
      <div className="flex flex-grow flex-col justify-around">
        <div>
          <h1 className="title">Saldo disponível:</h1>
          <div className="flex justify-center">
            <MoneyInput label="R$" value={currentUser.ammount.toString()} disabled />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAmmount;
