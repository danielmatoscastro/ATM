import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const DefaultInput = ({ focusOnMount, label, type }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (focusOnMount) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex justify-center">
      <label className="label-default-input">
        {label}
        <input type={type} className="default-input ml-5" ref={inputRef} />
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
};

export default DefaultInput;
