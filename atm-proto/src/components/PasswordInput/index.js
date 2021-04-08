import PropTypes from 'prop-types';
import ReactCodeInput from 'react-code-input';
import './style.css';

export const PasswordInput = ({ value, onChange, className }) => (
  <ReactCodeInput
    type="password"
    fields={4}
    value={value}
    onChange={onChange}
    className={`password-input ${className}`}
  />
);

PasswordInput.defaultProps = {
  className: '',
};

PasswordInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default PasswordInput;
