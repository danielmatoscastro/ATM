import PropTypes from 'prop-types';
import { Stepper } from 'react-form-stepper';
import './style.css';

export const StepIndicator = ({ steps, activeStep }) => (
  <Stepper
    className="step-indicator"
    steps={steps.map((step) => ({ label: step }))}
    activeStep={activeStep}
    styleConfig={{
      activeBgColor: '#E2E71B',
      completedBgColor: '#07CE0F',
      activeTextColor: 'black',
      completedTextColor: 'black',
      inactiveTextColor: 'black',
    }}
  />
);

StepIndicator.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeStep: PropTypes.number.isRequired,
};

export default StepIndicator;
