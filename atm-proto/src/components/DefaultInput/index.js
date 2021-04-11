import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const DefaultInput = ({
  focusOnMount, label, type, children,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focusOnMount && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  return (
    <div className="flex justify-center">
      <label className="label-default-input">
        {label}
        {children
          ? children({ type, className: 'default-input ml-5', inputRef })
          : <input type={type} className="default-input ml-5" ref={inputRef} />}
      </label>
    </div>
  );
};

DefaultInput.defaultProps = {
  focusOnMount: false,
  label: '',
  type: 'text',
};

DefaultInput.propTypes = {
  focusOnMount: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.func,
};

export default DefaultInput;
