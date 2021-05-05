import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useShouldSortByFreq } from 'hooks';
import { LogContext } from './LogContext';

export const LogProvider = ({ setStart, children }) => {
  const [name, setName] = useState('');
  const [startupTime, setStartupTime] = useState(0);
  const [operation, setOperation] = useState('');
  const [interactionId, setInteractionId] = useState('');
  const { shouldSortByFreq } = useShouldSortByFreq();

  const logStart = () => {
    setStartupTime(Date.now());
    setInteractionId(uuidv4());
  };

  const logStartOperation = (op) => setOperation(op);

  const logEnd = () => fetch('https://sheet.best/api/sheets/57107d6f-056a-4a22-9311-159a561d41a0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      interactionId,
      sortedByFreq: shouldSortByFreq,
      operation,
      startupTime,
      endTime: Date.now(),
    }),
  });

  const logBack = (page) => fetch('https://sheet.best/api/sheets/57107d6f-056a-4a22-9311-159a561d41a0', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      interactionId,
      sortedByFreq: shouldSortByFreq,
      operation,
      startupTime,
      page,
      backTime: Date.now(),
    }),
  });

  return (
    <LogContext.Provider value={{
      name,
      setName,
      setStart,
      logStart,
      logStartOperation,
      logEnd,
      logBack,
    }}
    >
      {children}
    </LogContext.Provider>
  );
};

LogProvider.propTypes = {
  setStart: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default LogProvider;
