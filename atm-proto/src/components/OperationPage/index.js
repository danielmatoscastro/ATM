import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import { useCurrentUser, useCurrentOperation } from 'hooks';
import { DefaultPage } from '../DefaultPage';
import { DefaultButton } from '../DefaultButton';
import { StepIndicator } from '../StepIndicator';
import './style.css';

export const OperationPage = ({ steps, operationId }) => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);
  const { currentUser } = useCurrentUser();
  const { currentOperation, initOperation, finishCurrentOperation } = useCurrentOperation();

  useEffect(() => {
    if (currentOperation?.id !== operationId && activeStep === 0) {
      initOperation(operationId);
    }
  }, []);

  const nextPage = activeStep + 1 < steps.length ? `${path}${steps[activeStep + 1].path}` : '/';
  const previousPage = activeStep - 1 >= 0 ? `${path}${steps[activeStep - 1].path}` : '/';

  const onClickContinue = () => {
    if (steps[activeStep].validateNext(currentUser, currentOperation.payload, console.log)) {
      if (activeStep === steps.length - 1) {
        finishCurrentOperation();
      } else {
        setActiveStep((active) => active + 1);
      }

      history.push(nextPage);
    }
  };

  const onClickBack = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep((active) => active - 1);

      history.push(previousPage);
    }
  };

  const stepNames = steps.map((step) => step.name);

  return (
    <DefaultPage>
      <div className="flex h-full flex-col justify-between pb-7">
        <StepIndicator steps={stepNames} activeStep={activeStep} />
        <div className="flex flex-col justify-between flex-grow pt-2 pb-10">
          <Switch>
            {steps.map((step, index) => {
              if (index === 0) {
                return (
                  <Route key={step.name} exact path={[path, `${path}${step.path}`]}>
                    <step.page />
                  </Route>
                );
              }

              return (
                <Route key={step.name} path={`${path}${step.path}`}>
                  <step.page />
                </Route>
              );
            })}
          </Switch>

          <div className="flex justify-between px-12">
            <DefaultButton className="voltar" onClick={onClickBack}>
              Voltar
            </DefaultButton>

            <DefaultButton className="continuar" onClick={onClickContinue}>
              Continuar
            </DefaultButton>
          </div>
        </div>
      </div>
    </DefaultPage>
  );
};

OperationPage.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  operationId: PropTypes.number.isRequired,
};

export default OperationPage;
