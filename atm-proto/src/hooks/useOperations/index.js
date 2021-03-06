import { useEffect, useCallback } from 'react';
import { createLocalStorageStateHook } from 'use-local-storage-state';
import { operations as initialOperations, operationsIds, doOperationById } from 'mocks';
import { useShouldSortByFreq } from 'hooks/useShouldSortByFreq';

const useOperationsInternal = createLocalStorageStateHook('operations', initialOperations);

export const useOperations = () => {
  const [operations, setOperations] = useOperationsInternal();
  const { shouldSortByFreq } = useShouldSortByFreq();

  useEffect(() => {
    setOperations(operations.map((operation) => ({
      ...operation,
      doOperation: doOperationById[operation.id],
    })));
  }, []);

  const incrementOperation = useCallback((operationId) => {
    setOperations(operations.map((operation) => (
      operation.id === operationId
        ? ({ ...operation, frequency: operation.frequency + 1 })
        : operation)));
  });

  const operationsSorted = [...operations].sort((a, b) => {
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

  // console.log(shouldSortByFreq);
  // console.log(shouldSortByFreq ? operationsSorted : operations);

  return {
    operations: shouldSortByFreq ? operationsSorted : operations,
    operationsIds,
    incrementOperation,
  };
};

export default useOperations;
