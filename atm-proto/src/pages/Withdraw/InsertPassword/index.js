import { useCurrentOperation } from 'hooks';
import { PasswordInput } from 'components';

export const InsertPassword = () => {
  const { currentOperation, setPayload } = useCurrentOperation();
  const onChangeHandler = (value) => {
    setPayload({
      ...currentOperation.payload,
      password: value,
    });
  };
  return (
    <>
      <div className="flex flex-grow flex-col justify-around">
        <div>
          <h1 className="title">Digite sua senha</h1>
          <div className="flex justify-center">
            <PasswordInput value={currentOperation.payload.password ?? ''} onChange={onChangeHandler} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InsertPassword;
