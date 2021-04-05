import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useRouteMatch,
  Link,
} from 'react-router-dom';
import { DefaultPage } from '../DefaultPage';
import { DefaultButton } from '../DefaultButton';
import { StepIndicator } from '../StepIndicator';
import './style.css';

export const OperationPage = ({ steps }) => {
  const { path } = useRouteMatch();
  const [activeStep, setActiveStep] = useState(0);

  const onClickContinue = () => {
    if (activeStep + 1 < steps.length) {
      setActiveStep((active) => active + 1);
    }
  };
  const onClickBack = () => {
    if (activeStep - 1 >= 0) {
      setActiveStep((active) => active - 1);
    }
  };

  const nextPage = activeStep + 1 < steps.length ? `${path}${steps[activeStep + 1].path}` : '/';
  const previousPage = activeStep - 1 >= 0 ? `${path}${steps[activeStep - 1].path}` : '/';

  const stepNames = steps.map((step) => step.name);

  return (
    <DefaultPage>
      <div className="flex h-full flex-col justify-between pb-7">
        <StepIndicator steps={stepNames} activeStep={activeStep} />

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
          <Link to={previousPage}>
            <DefaultButton className="voltar" onClick={onClickBack}>
              Voltar
            </DefaultButton>
          </Link>

          <Link to={nextPage}>
            <DefaultButton className="continuar" onClick={onClickContinue}>
              Continuar
            </DefaultButton>
          </Link>
        </div>
      </div>
    </DefaultPage>
  );
};

OperationPage.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default OperationPage;
