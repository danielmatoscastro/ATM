import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useCurrentUser, useCurrentOperation } from 'hooks';
import { DefaultPage } from '../DefaultPage';
import { DefaultButton } from '../DefaultButton';
import { StepIndicator } from '../StepIndicator';

export const OperationPageInternal = ({
  children,
  steps,
  activeStep,
  setActiveStep,
}) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const { currentUser } = useCurrentUser();
  const {
    currentOperation,
    setPayload,
    finishCurrentOperation,
    cancelCurrentOperation,
  } = useCurrentOperation();

  const nextPage = activeStep + 1 < steps.length ? `${path}${steps[activeStep + 1].path}` : '/';
  const previousPage = activeStep - 1 >= 0 ? `${path}${steps[activeStep - 1].path}` : '/';
  const errorPage = `${path}/error`;

  const setError = (errorMessage) => {
    console.log(errorMessage);
    setPayload({ ...currentOperation.payload, errorMessage });
  };

  const onClickContinue = () => {
    if (steps[activeStep].validateNext(currentUser, currentOperation.payload, setError)) {
      if (activeStep === steps.length - 1) {
        finishCurrentOperation();
      } else {
        setActiveStep((active) => active + 1);
      }

      history.push(nextPage);
    } else {
      history.push(errorPage);
    }
  };

  const onClickBack = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep((active) => active - 1);
    } else {
      cancelCurrentOperation();
    }

    history.push(previousPage);
  };

  const { showButtonBack = true, showButtonContinue = true } = steps[activeStep];
  const stepNames = steps.map((step) => step.name);
  return (
    <DefaultPage>
      <div className="flex h-full flex-col justify-between pb-7">
        <StepIndicator steps={stepNames} activeStep={activeStep} />
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

OperationPageInternal.propTypes = {
  children: PropTypes.node.isRequired,
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};

export default OperationPageInternal;
