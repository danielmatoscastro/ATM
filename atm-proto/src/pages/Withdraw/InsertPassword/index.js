import { DefaultInput } from 'components';

export const InsertPassword = () => (
  <>
    <div className="flex flex-grow flex-col justify-around">
      <div>
        <h1 className="title">Digite sua senha</h1>
        <DefaultInput type="password" focusOnMount />
      </div>
    </div>
  </>
);

export default InsertPassword;
