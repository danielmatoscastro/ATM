import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { DefaultPage, DefaultButton, DefaultMessage } from 'components';
import { useCurrentOperation, useLog } from 'hooks';

import './style.css';

export const NotImplementedYet = ({ operationId }) => {
  const history = useHistory();
  const { logEnd } = useLog();
  const { currentOperation, initOperation, finishCurrentOperation } = useCurrentOperation();

  useEffect(() => {
    if (!currentOperation || !currentOperation.id || operationId !== currentOperation.id) {
      initOperation(operationId);
    }
  }, []);

  const onClickHandler = () => {
    logEnd();
    finishCurrentOperation();
    history.goBack();
  };

  return (
    <DefaultPage>
      <div className="flex h-full flex-col justify-between items-center">
        <DefaultMessage className="px-3">Esta operação ainda não foi implementada.</DefaultMessage>
        <DefaultButton className="voltar-button mb-8" onClick={onClickHandler}>Voltar</DefaultButton>
      </div>
    </DefaultPage>
  );
};

NotImplementedYet.propTypes = {
  operationId: PropTypes.number.isRequired,
};

export default NotImplementedYet;
