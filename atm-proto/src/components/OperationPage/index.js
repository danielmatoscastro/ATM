import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { useCurrentOperation } from 'hooks';
import { OperationPageInternal } from './OperationPageInternal';
import './style.css';

export const OperationPage = ({ steps, operationId }) => {
  const { path } = useRouteMatch();
  const [activeStep, setActiveStep] = useState(0);
  const {
    currentOperation,
    initOperation,
  } = useCurrentOperation();

  useEffect(() => {
    if (currentOperation?.id !== operationId && activeStep === 0) {
      initOperation(operationId);
    }
  }, []);

  return (
    <Switch>
      {steps.map((step, index) => {
        let pathRoute;
        let onErrorPathRoute;
        if (index === 0) {
          pathRoute = [path, `${path}${step.path}`];
          onErrorPathRoute = [`${path}/error`, `${path}${step.path}/error`];
        } else {
          pathRoute = `${path}${step.path}`;
          onErrorPathRoute = `${path}${step.path}/error`;
        }

        return (
          <React.Fragment key={step.name}>
            <Route exact path={pathRoute}>
              <OperationPageInternal
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                steps={steps}
              >
                <step.page />
              </OperationPageInternal>
            </Route>
            {step.onError && (
            <Route exact path={onErrorPathRoute}>
              <step.onError />
            </Route>
            )}
          </React.Fragment>
        );
      })}
    </Switch>
  );
};

OperationPage.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  operationId: PropTypes.number.isRequired,
};

export default OperationPage;
