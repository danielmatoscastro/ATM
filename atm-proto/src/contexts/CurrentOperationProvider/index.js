import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useOperations } from 'hooks/useOperations';
import { CurrentOperationContext } from './CurrentOperationContext';

const initialStateCurrentOperation = { payload: {} };
export const CurrentOperationProvider = ({ children }) => {
  const [currentOperation, setCurrentOperation] = useState(initialStateCurrentOperation);
  const { operations, incrementOperation } = useOperations();

  const initOperation = useCallback((operationId) => {
    const operation = operations.find((op) => op.id === operationId);
    setCurrentOperation({ ...operation, payload: {} });
  }, [operations, setCurrentOperation]);

  const finishCurrentOperation = useCallback(
    () => incrementOperation(currentOperation.id),
    [currentOperation, incrementOperation],
  );

  const cancelCurrentOperation = useCallback(
    () => setCurrentOperation(initialStateCurrentOperation),
    [setCurrentOperation, initialStateCurrentOperation],
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
      cancelCurrentOperation,
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
