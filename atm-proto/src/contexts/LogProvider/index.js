import { useState } from 'react';
import PropTypes from 'prop-types';
import { LogContext } from './LogContext';

export const LogProvider = ({ setStart, children }) => {
  const [name, setName] = useState('');

  return (
    <LogContext.Provider value={{ name, setName, setStart }}>
      {children}
    </LogContext.Provider>
  );
};

LogProvider.propTypes = {
  setStart: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LogProvider;
