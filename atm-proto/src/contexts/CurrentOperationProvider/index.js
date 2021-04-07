import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useOperations } from 'hooks/useOperations';
import { CurrentOperationContext } from './CurrentOperationContext';

export const CurrentOperationProvider = ({ children }) => {
  const [currentOperation, setCurrentOperation] = useState({ payload: {} });
  const { operations, incrementOperation } = useOperations();

  const initOperation = useCallback((operationId) => {
    const operation = operations.find((op) => op.id === operationId);
    setCurrentOperation({ ...operation, payload: {} });
  }, [operations, setCurrentOperation]);

  const finishCurrentOperation = useCallback(
    () => incrementOperation(currentOperation.id),
    [currentOperation, incrementOperation],
  );

  const setPayload = useCallback(
    (payload) => setCurrentOperation((op) => (
      {
        ...op,
        payload,
      })), [setCurrentOperation],
  );

  return (
    <CurrentOperationContext.Provider value={{
      currentOperation,
      initOperation,
      finishCurrentOperation,
      setPayload,
    }}
    >
      {children}
    </CurrentOperationContext.Provider>
  );
};

CurrentOperationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CurrentOperationContext;
