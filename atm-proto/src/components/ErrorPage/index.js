import { useHistory } from 'react-router-dom';
import { useCurrentOperation } from 'hooks';
import { DefaultPage } from 'components/DefaultPage';
import { DefaultButton } from 'components/DefaultButton';

export const ErrorPage = () => {
  const history = useHistory();
  const { currentOperation } = useCurrentOperation();

  return (
    <DefaultPage>
      <div>
        <p>
          Erro:
          {' '}
          {currentOperation.payload.errorMessage}
        </p>
        <DefaultButton onClick={() => history.goBack()}>
          Voltar e corrigir
        </DefaultButton>
      </div>
    </DefaultPage>
  );
};

export default ErrorPage;
