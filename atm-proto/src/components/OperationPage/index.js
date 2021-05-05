import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useCurrentUser, useCurrentOperation, useLog } from 'hooks';
import { DefaultPage } from '../DefaultPage';
import { DefaultButton } from '../DefaultButton';
import { StepIndicator } from '../StepIndicator';
import './style.css';

export const OperationPage = ({
  children,
  activeStep,
  stepNames,
  nextPage,
  validateNext,
  isFirstPage,
  isLastPage,
  showButtonBack,
  showButtonContinue,
  showStepIndicator,
}) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const { logBack } = useLog();
  const { currentUser } = useCurrentUser();
  const {
    currentOperation,
    setPayload,
    finishCurrentOperation,
    cancelCurrentOperation,
  } = useCurrentOperation();

  const errorPage = `${path}/error`;

  const setError = (errorMessage) => {
    setPayload({ ...currentOperation.payload, errorMessage });
  };

  const onClickContinue = () => {
    if (validateNext(currentUser, currentOperation.payload, setError)) {
      if (isLastPage) {
        finishCurrentOperation();
      }

      history.push(nextPage);
    } else {
      history.push(errorPage);
    }
  };

  const onClickBack = () => {
    if (isFirstPage) {
      cancelCurrentOperation();
    }
    logBack(stepNames[activeStep]);
    history.goBack();
  };

  return (
    <DefaultPage>
      <div className="flex h-full flex-col justify-between pb-7">
        {showStepIndicator && <StepIndicator steps={stepNames} activeStep={activeStep} />}
        <div className="flex flex-col justify-between flex-grow pt-2 pb-10">
          {children}
          <div className="flex justify-between px-12">
            {showButtonBack && (
            <DefaultButton className="voltar" onClick={onClickBack}>
              Voltar
            </DefaultButton>
            )}

            { showButtonContinue && (
            <DefaultButton className="continuar" onClick={onClickContinue}>
              Continuar
            </DefaultButton>
            )}
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

OperationPage.defaultProps = {
  isFirstPage: false,
  isLastPage: false,
  showButtonBack: true,
  showButtonContinue: true,
  showStepIndicator: true,
};

OperationPage.propTypes = {
  children: PropTypes.node.isRequired,
  activeStep: PropTypes.number.isRequired,
  stepNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  nextPage: PropTypes.string.isRequired,
  validateNext: PropTypes.func.isRequired,
  isFirstPage: PropTypes.bool,
  isLastPage: PropTypes.bool,
  showButtonBack: PropTypes.bool,
  showButtonContinue: PropTypes.bool,
  showStepIndicator: PropTypes.bool,
};

export default OperationPage;
