import { useState, useEffect, useCallback } from 'react';
import { operations as initialOperations } from 'mocks';

export const useOperations = () => {
  const [operations, setOperations] = useState([]);

  useEffect(() => {
    setOperations(initialOperations);
  }, []);

  const incrementOperation = useCallback((operationPath) => {
    setOperations(operations.map((operation) => {
      if (operation.path === operationPath) {
        return { ...operation, frequency: operation.frequency + 1 };
      }
      return operation;
    }));
  });

  const operationsSorted = operations.sort((a, b) => {
    if (a.frequency === b.frequency) {
      if (a.name < b.name) {
        return -1;
      }

      if (a.name === b.name) {
        return 0;
      }

      return 1;
    }

    // increasing order
    return -(a.frequency - b.frequency);
  });

  return {
    operations: operationsSorted,
    incrementOperation,
  };
};

export default useOperations;
