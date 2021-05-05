import { DefaultPage, DefaultButton, DefaultInput } from 'components';
import { useLog } from 'hooks';

import './style.css';

export const NameForm = () => {
  const { name, setName, setStart } = useLog();

  const onChangeNameHandler = (e) => setName(e.target.vale);
  const onClickHandler = () => {
    if (name !== '') {
      setStart(true);
    }
  };

  return (
    <DefaultPage>
      <div className="flex h-full flex-col justify-center content-between py-16">
        <div>
          <h1 className="mb-3">
            Antes de começar, digite seu nome:
          </h1>
          <DefaultInput focusOnMount>
            {({ className }) => (
              <input
                type="text"
                className={className}
                value={name}
                onChange={onChangeNameHandler}
              />
            )}
          </DefaultInput>
        </div>
        <DefaultButton className="mx-auto mt-5 start-button" onClick={onClickHandler}>
          Iniciar
        </DefaultButton>
      </div>
    </DefaultPage>
  );
};

export default NameForm;
