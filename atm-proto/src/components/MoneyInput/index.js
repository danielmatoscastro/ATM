/* eslint-disable no-param-reassign */
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { DefaultInput } from '../DefaultInput';

export const MoneyInput = ({
  label,
  onChange,
  value,
  focusOnMount,
  disabled,
}) => (
  <DefaultInput focusOnMount={focusOnMount} label={label}>
    {({ className, inputRef }) => (
      <NumberFormat
        value={value}
        onChange={onChange}
        thousandSeparator="."
        decimalSeparator=","
        className={className}
        getInputRef={(el) => { inputRef.current = el; }}
        disabled={disabled}
      />
    )}
  </DefaultInput>
);

MoneyInput.defaultProps = {
  label: '',
  focusOnMount: false,
  onChange: () => {},
  disabled: false,
};

MoneyInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  focusOnMount: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MoneyInput;
