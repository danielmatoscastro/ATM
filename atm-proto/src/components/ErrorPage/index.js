import { useHistory } from 'react-router-dom';
import { useCurrentOperation } from 'hooks';
import { DefaultPage } from 'components/DefaultPage';
import { DefaultButton } from 'components/DefaultButton';
import './style.css';

export const ErrorPage = () => {
  const history = useHistory();
  const { currentOperation } = useCurrentOperation();

  return (
    <DefaultPage>
      <div className="h-full flex flex-col justify-between items-center ">
        <p className="error-message mx-16 text-center">
          Erro:
          {' '}
          {currentOperation.payload.errorMessage}
        </p>

        {currentOperation.payload.auxiliarErrorMessage && (
          <p>
            {currentOperation.payload.auxiliarErrorMessage}
          </p>
        )}
        <DefaultButton onClick={() => history.goBack()} className="voltar-e-corrigir-button mb-12">
          Voltar e corrigir
        </DefaultButton>
      </div>
    </DefaultPage>
  );
};

export default ErrorPage;
